import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import style from "./Qibla.module.css";
import { Container } from "react-bootstrap";
import imge from "../../image/الكعبه.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Qubla() {
  const navigate = useNavigate();
  return (
    <div className={style.qibla}>
      <div>
        <Header />
      </div>
      <Container style={{ textAlign: "center", marginTop: "30px" }}>
        <h4 style={{ color: "#777", fontWeight: "400" }}>
          فَوَلِّ وَجْهَكَ شَطْرَ الْمَسْجِدِ الْحَرَامِ
        </h4>
        <div className={style.image}>
          <img src={imge} alt="img" />

          <a href="https://qiblafinder.withgoogle.com" target="_blank">
            تحديد القبلة
          </a>
        </div>

        <div onClick={() => navigate("/")} className={style.return}>
          الرجوع
          <span style={{ marginLeft: "10px" }}>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </div>
      </Container>
    </div>
  );
}

export default Qubla;
