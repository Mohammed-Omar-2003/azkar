import style from "./Header.module.css";

function Header() {
  return (
    <div className={style.pirant}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240">
        <path
          fill="#485779"
          fillOpacity="1"
          d="M0,192L40,197.3C80,203,160,213,240,218.7C320,224,400,224,480,192C560,160,640,96,720,80C800,64,880,96,960,133.3C1040,171,1120,213,1200,213.3C1280,213,1360,171,1400,149.3L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}

export default Header;
