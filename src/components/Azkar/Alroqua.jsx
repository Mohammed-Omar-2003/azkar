import style from "./Azkar.module.css";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAlroqua } from "../../redux/alroquaSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
function Alroqua() {
  const [counts, setCounts] = useState([]); // حالة لتخزين الأعداد الحالية
  const [originalCounts, setOriginalCounts] = useState([]); // حالة لتخزين القيم الأصلية
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { element } = useSelector((state) => state.alroqua); //array
  useEffect(() => {
    dispatch(fetchAlroqua());
  }, [dispatch]);

  // مزامنة الأذكار من Redux إلى الحالة
  useEffect(() => {
    if (element.length) {
      const initialCounts = element.map((ele) => ele.count);
      setCounts(initialCounts); // حفظ الأعداد الحالية
      setOriginalCounts(initialCounts); // حفظ الأعداد الأصلية
    }
  }, [element]);

  // دالة تقليل العدد عند الضغط
  const handleDecrement = (index) => {
    setCounts((prevCounts) =>
      prevCounts.map((count, i) =>
        i === index ? Math.max(count - 1, 0) : count
      )
    );
  };
  // دالة لإعادة العدد إلى القيمة الأصلية
  const handleReset = (index) => {
    setCounts((prevCounts) =>
      prevCounts.map((count, i) => (i === index ? originalCounts[i] : count))
    );
  };
  return (
    <div className={style.evening}>
      <div className={style.header}>
        <span>الرقية الشرعية</span>
        <span onClick={() => navigate("/azkar")}>
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </div>
      <Container className={style.contaner}>
        {element.map((ele, index) => (
          <div key={ele.id} className={style.box}>
            <h4 className={style.pasmala}>{ele.pasmala}</h4>
            <p>{ele.content}</p>
            <div className={style.button}>
              <h4 onClick={() => handleDecrement(index)}>{counts[index]}</h4>
              <span onClick={() => handleReset(index)}>
                <FontAwesomeIcon icon={faRotateRight} />
              </span>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
}

export default Alroqua;
