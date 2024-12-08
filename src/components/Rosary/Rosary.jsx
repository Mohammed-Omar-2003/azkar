import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import style from "./rosary.module.css";
import { useState } from "react";
import Header from "../Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Rosary() {
  const navigate = useNavigate();
  const [num, setNum] = useState(0);
  return (
    <div className={style.rosary}>
      <div>
        <Header />
      </div>
      <Container style={{marginBottom:"30px"}}>
        <h4 style={{ color: "#777", fontWeight: "400" }}>
          أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ
        </h4>

        <select>
          <option>سبحان الله</option>
          <option>الحمد لله </option>
          <option>الله اكبر </option>
          <option> اللهم صلى على سيدنا محمد </option>
          <option> سبحان الله وبحمده </option>
          <option> سبحان الله وبحمده سبحان الله العظيم</option>
          <option> لاحول ولا قوه الا بالله </option>
          <option> استغفر الله العظيم واتوب اليه </option>
        </select>
        <div className={style.box}>
          <div className={style.screen}>
            <h1>{num}</h1>
          </div>
          <div className={style.counter}>
            <div className={style.add} onClick={() => setNum(num + 1)}>
              <FontAwesomeIcon icon={faPlus} />
            </div>
            <div className={style.again}>
              <FontAwesomeIcon icon={faRotateRight} onClick={() => setNum(0)} />
            </div>
          </div>
        </div>
      </Container>
      <div onClick={() => navigate("/")} className={style.return}>
        الرجوع
        <span style={{ marginLeft: "10px" }}>
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </div>
    </div>
  );
}

export default Rosary;
