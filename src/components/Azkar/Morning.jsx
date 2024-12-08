// import style from "./Azkar.module.css";
// import { Container } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { fetchAzkarMorning } from "../../redux/morningSlice";
// import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

// function Morning() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { element } = useSelector((state) => state.morning); //array
//   useEffect(() => {
//     dispatch(fetchAzkarMorning());
//   }, [dispatch]);
//   return (
//     <div className={style.morning}>
//       <div className={style.header}>
//         <span>أذكار الصباح</span>
//         <span onClick={() => navigate("/azkar")}>
//           <FontAwesomeIcon icon={faArrowRight} />
//         </span>
//       </div>
//       <Container className={style.contaner}>
//         {element.map((ele) => {
//           return (
//             <div key={ele.id} className={style.box}>
//               <p>{ele.content}</p>
//               <div className={style.button}>
//                 <h4>{ele.count}</h4>
//                 <span>
//                   <FontAwesomeIcon icon={faRotateRight} />
//                 </span>
//               </div>
//             </div>
//           );
//         })}
//       </Container>
//     </div>
//   );
// }
// export default Morning;

import style from "./Azkar.module.css";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAzkarMorning } from "../../redux/morningSlice";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

function Morning() {
  const [counts, setCounts] = useState([]); // حالة لتخزين الأعداد الحالية
  const [originalCounts, setOriginalCounts] = useState([]); // حالة لتخزين القيم الأصلية
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { element } = useSelector((state) => state.morning); // بيانات الأذكار من Redux

  useEffect(() => {
    dispatch(fetchAzkarMorning());
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
    <div className={style.morning}>
      <div className={style.header}>
        <span>أذكار الصباح</span>
        <span onClick={() => navigate("/azkar")}>
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </div>
      <Container className={style.contaner}>
        {element.map((ele, index) => (
          <div key={ele.id} className={style.box}>
            <h4 className={style.pasmala} >{ele.pasmala}</h4>
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

export default Morning;
