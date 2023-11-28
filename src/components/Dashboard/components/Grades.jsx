import React, { useState } from "react";
import ConfirmationModal from "../../ConfirmationModal/ConfirmationModal";

const Grades = ({ classes, user, setUser, darkMode }) => {
  const [isModalOpen, setisModalOpen] = useState();

  const gradeWeightObj = {
    A: 5.0,
    B: 4.0,
    C: 3.0,
    D: 2.0,
    F: 1.0,
    "": 0,
  };

  const gradeSubmitHandler = (obj) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    };

    fetch("http://localhost:8000/EditStudent", options).then((res) => {
      res
        .json()
        .then((data) => ({
          data: data,
          status: res.status,
        }))
        .then((res) => {
          setUser(res.data);
        });
    });
  };

  return (
    <div
      style={{
        position: "relative",
        background: darkMode ? "#353839" : "white",
        color: darkMode ? "white" : "#353839",
      }}
    >
      <section>
        <form
          id="grade-form"
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const obj = {
              id: user.id,
              email: user.email,
              password: user.password,
              semesters: [
                {
                  semester: {
                    semesterName: user?.semesters[0]?.semester.semesterName,
                    classes: [
                      {
                        className:
                          user?.semesters[0]?.semester.classes[0]?.className ??
                          "",
                        creditHours:
                          user?.semesters[0]?.semester.classes[0]
                            ?.creditHours ?? "",
                        grade: formData.get("grades1") ?? "",
                        gradeWeight:
                          gradeWeightObj[formData.get("grades1") ?? ""],
                      },
                      {
                        className:
                          user?.semesters[0]?.semester.classes[1]?.className ??
                          "",
                        creditHours:
                          user?.semesters[0]?.semester.classes[1]
                            ?.creditHours ?? "",
                        grade: formData.get("grades2") ?? "",
                        gradeWeight:
                          gradeWeightObj[formData.get("grades2") ?? ""],
                      },
                      {
                        className:
                          user?.semesters[0]?.semester.classes[2]?.className ??
                          "",
                        creditHours:
                          user?.semesters[0]?.semester.classes[2]
                            ?.creditHours ?? "",
                        grade: formData.get("grades3") ?? "",
                        gradeWeight:
                          gradeWeightObj[formData.get("grades3") ?? ""],
                      },
                      {
                        className:
                          user?.semesters[0]?.semester.classes[3]?.className ??
                          "",
                        creditHours:
                          user?.semesters[0]?.semester.classes[3]
                            ?.creditHours ?? "",
                        grade: formData.get("grades4") ?? "",
                        gradeWeight:
                          gradeWeightObj[formData.get("grades4") ?? ""],
                      },
                      {
                        className:
                          user?.semesters[0]?.semester.classes[4]?.className ??
                          "",
                        creditHours:
                          user?.semesters[0]?.semester.classes[4]
                            ?.creditHours ?? "",
                        grade: formData.get("grades5") ?? "",
                        gradeWeight:
                          gradeWeightObj[formData.get("grades5") ?? ""],
                      },
                      {
                        className:
                          user?.semesters[0]?.semester.classes[5]?.className ??
                          "",
                        creditHours:
                          user?.semesters[0]?.semester.classes[5]
                            ?.creditHours ?? "",
                        grade: formData.get("grades6") ?? "",
                        gradeWeight:
                          gradeWeightObj[formData.get("grades6") ?? ""],
                      },
                    ],
                  },
                },
              ],
            };
            gradeSubmitHandler(obj);
            setisModalOpen(true);
          }}
        >
          {classes?.map((classElement, i) => {
            if (classElement.className === "") return null;
            return (
              <div key={i} className="classname-input">
                <label htmlFor={`grades${i + 1}`}>
                  {classElement.className}
                </label>
                <select className="input-box" required name={`grades${i + 1}`}>
                  <option value="">-- Select Grade</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="F">F</option>
                </select>
              </div>
            );
          })}
          <button className="form-button" form="grade-form">Submit</button>
        </form>
      </section>

      <ConfirmationModal
        copy={"Your grades have been updated successfully"}
        button={"Done"}
        isOpen={isModalOpen}
      />
    </div>
  );
};

export default Grades;
