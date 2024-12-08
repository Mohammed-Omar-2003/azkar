import { Container } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import style from "./Azkar.module.css";
import Header from "../Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCloudMoon } from "@fortawesome/free-solid-svg-icons";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { faPersonPraying } from "@fortawesome/free-solid-svg-icons";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faHandsPraying } from "@fortawesome/free-solid-svg-icons";

function Azkar() {
  const navigate = useNavigate();
  return (
    <div className={style.azkar}>
      <Header />
      <Container>
        <h4 style={{ color: "#777", fontWeight: "400" }}>
          أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ
        </h4>
        <div className={style.element}>
          <div onClick={() => navigate("/morning")}>
            <span className={style.ico}>
              <FontAwesomeIcon icon={faCloudSun} />
            </span>
            <span> أذكار الصباح</span>
          </div>
          <div onClick={() => navigate("/evening")}>
            <span className={style.ico}>
              <FontAwesomeIcon icon={faCloudMoon} />
            </span>
            <span>أذكارالمساء</span>
          </div>
          <div onClick={() => navigate("/afterPraye")}>
            <span className={style.ico}>
              <FontAwesomeIcon icon={faPersonPraying} />
            </span>
            <span>أذكار بعد الصلاة المفروضة</span>
          </div>
          <div onClick={() => navigate("/sleeping")}>
            <span className={style.ico}>
              <FontAwesomeIcon icon={faBed} />
            </span>
            <span>أذكار النوم</span>
          </div>
          <div onClick={() => navigate("/weakup")}>
            <span className={style.ico}>
              <FontAwesomeIcon icon={faPerson} />
            </span>
            <span>أذكار الاستيقاظ</span>
          </div>
          <div onClick={() => navigate("/alroqua")}>
            <span className={style.ico}>
              <FontAwesomeIcon icon={faHandsPraying} />
            </span>
            <span>الرقية الشرعية</span>
          </div>
        </div>
      </Container>
      <div onClick={() => navigate("/")} className={style.return}>
        الرجوع
        <span style={{ marginLeft: "10px" }}>
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </div>
      <Outlet />
    </div>
  );
}

export default Azkar;
