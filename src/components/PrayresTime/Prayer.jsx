import style from "./PrayresTime.module.css";
function prayer({ name, time }) {
  return (
    <div className={style.prayer}>
      <p className={style.name-prayer}>{name}</p>
      <p className={style.time-prayer}>{time}</p>
    </div>
  );
}

export default prayer;
