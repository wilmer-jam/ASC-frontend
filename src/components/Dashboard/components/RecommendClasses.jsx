import React, { useEffect, useState } from "react";

const RecommendClasses = ({ classes, darkMode }) => {
  const [gradeWeightState, setGradeWeightState] = useState(0);
  const [gradeThreshold, setGradeThreshold] = useState(0);

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
      <h2>Current GPA: {}</h2>
      <div>
        <h2>Current Classes:</h2>
        {classes?.map((classElement, i) => {
          return (
            <div key={i}>
              <p>{classElement.className}</p>
              <p>{classElement.grade}</p>
            </div>
          );
        })}
      </div>

      {gradeThreshold <= gradeWeightState ? (
        <p>You`re failing bitch</p>
      ) : (
        <p>Well done you`re not failing</p>
      )}
    </section>
  );
};

export default RecommendClasses;
