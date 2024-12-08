import { useEffect, useState } from "react";
import style from "./PrayresTime.module.css";
import moment from "moment";
import Prayer from "./Prayer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
function PrayresTime() {
  const navigate=useNavigate()
  const formattedDate = moment().format("h:mm A");
  const dateLibrary = moment().format("DD-MM-YYYY");
  const [prayerTime, setPrayerTime] = useState({});
  const [dateDay, setDateDay] = useState({});
  const [city, setCity] = useState("القاهرة");
  useEffect(() => {
    async function fetchPrayerTime() {
      try {
        const res = await fetch(
          `https://api.aladhan.com/v1/timingsByCity/${dateLibrary}?city=${city}&country=Egypt`
        );
        const dataTime = await res.json();
        console.log(dataTime);
        setPrayerTime(dataTime.data.timings);
        setDateDay(dataTime.data.date.gregorian);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPrayerTime();
  }, [city, dateLibrary]);

  function formatTime(time) {
    if (!time) {
      return "00:00";
    }
    let [hours, minutes] = time.split(":").map(Number);
    const pers = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${hours}:${minutes < 10 ? "0" + minutes : minutes} ${pers}`;
  }

  return (
    <div className={style.body}>
      <h2 style={{ marginTop: "20px", color: "#485778" }}>مواقيت الصلاه</h2>
      <div className={style.conatner}>
        <div className={style.header}>
          <div className={style.top}>
            <div className={style.city}>
              <h3>اسم المدينة</h3>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="اكتب اسم المدينة"
              />
            </div>
            <div className={style.date}>
              <h3>التاريخ</h3>
              <h4>{dateDay.date}</h4>
            </div>
          </div>
          <div className={style.time}>
            <h5>الساعة</h5>
            <h4>{formattedDate}</h4>
          </div>
        </div>

        <div className={style.bottom}>
          <Prayer name={"الفجر"} time={formatTime(prayerTime.Fajr)} />
          <Prayer name={"الظهر"} time={formatTime(prayerTime.Dhuhr)} />
          <Prayer name={"العصر"} time={formatTime(prayerTime.Asr)} />
          <Prayer name={"المغرب"} time={formatTime(prayerTime.Maghrib)} />
          <Prayer name={"العشاء"} time={formatTime(prayerTime.Isha)} />
        </div>
      </div>
      <div onClick={() => navigate("/")} className={style.return}>
        <span style={{ marginLeft: "10px" }}>
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </div>
    </div>
  );
}

export default PrayresTime;
