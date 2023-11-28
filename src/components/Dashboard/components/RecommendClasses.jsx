import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RecommendClasses = ({ classes, darkMode }) => {
  const [gradeWeightState, setGradeWeightState] = useState(0);
  const [gradeThreshold, setGradeThreshold] = useState(0);

  const navigate = useNavigate()

  useEffect(() => {
    if (!classes) return;
    setGradeThreshold(3 * classes.length);
    let gradeWeightVar = 0;
    for (let i = 0; i < classes.length; i++) {
      gradeWeightVar += classes[i].gradeWeight;
    }
    setGradeWeightState(gradeWeightVar);
  }, []);
  return (
    <section 
      style={{
        background: darkMode ? "#353839" : "white",
        color: darkMode ? "white" : "#353839",
      }}
    >
      {/* <h2>Current GPA: {}</h2> */}
      <div className="recommend-classes">
        <h2>Current Classes:</h2>
        <div>
          {classes?.map((classElement, i) => {
            return (
              <div className="class-n-grade" key={i}>
                <p className="class-name">{classElement.className}</p>
                <p className="class-grade">{classElement.grade}</p>
              </div>
            );
          })}
        </div>

      {gradeThreshold <= gradeWeightState ? (
        <p className="recommendation">You can take the same amount of classes</p>
      ) : (
        <p className="recommendation">Recommend you take less classes</p>
      )}
      <button className="golden-button" onClick={() => navigate("/Dashboard")}>Done</button>
    </div>
    </section>
  );
};

export default RecommendClasses;
