import { useNavigate } from "react-router-dom";
import style from "./App.module.css";
import Header from "./components/Header/Header";
import logo from "./image/لوجوpng.png";
import { Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMosque } from "@fortawesome/free-solid-svg-icons";
import { faHandsPraying } from "@fortawesome/free-solid-svg-icons";
import { faKaaba } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <div className={style.home}>
        <div>
          <Header />
        </div>
        <div className={style.image}>
          <img src={logo} alt="logo" />
        </div>
        <div className={style.text}>
          <h2>منبهك لذكر الله... بين يديك</h2>
          <p>ذكرنى... يذكرك دائما</p>
        </div>
        <Row className={style.boxes}>
          <div onClick={() => navigate("prayresTime")} className={style.box}>
            <span>
              <FontAwesomeIcon icon={faMosque} />
            </span>
            <span>مواقيت الصلاه</span>
          </div>
          <div onClick={() => navigate("qibla")} className={style.box}>
            <span>
              <FontAwesomeIcon icon={faKaaba} />
            </span>
            <span>القبلة</span>
          </div>
          <div onClick={() => navigate("azkar")} className={style.box}>
            <span>
              <FontAwesomeIcon icon={faHandsPraying} />
            </span>
            <span>اذكار</span>
          </div>
          <div onClick={() => navigate("msbha")} className={style.box}>
            <span>
              <FontAwesomeIcon icon={faHeart} />
            </span>
            <span>مسبحة</span>
          </div>
        </Row>
      </div>
      <div className={style.footer}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#485778"
            fillOpacity="1"
            d="M0,96L48,122.7C96,149,192,203,288,197.3C384,192,480,128,576,90.7C672,53,768,43,864,69.3C960,96,1056,160,1152,165.3C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
}

export default App;
// develop with mohamed omar mohamed 2024