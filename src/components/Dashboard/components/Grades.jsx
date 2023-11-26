import React, { useState } from "react";
import ConfirmationModal from "../../ConfirmationModal/ConfirmationModal";

const Grades = ({ classes, user }) => {
  const [isModalOpen, setisModalOpen] = useState();

  const gradeSubmitHandler = (obj) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    };

    fetch("http://localhost:8000/EditStudent", options).then((res) => {
      res.json();
    });
  };

  return (
    <div style={{ position: "relative" }}>
      <section>
        <h1>Input Grades</h1>
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
                      },
                      {
                        className:
                          user?.semesters[0]?.semester.classes[1]?.className ??
                          "",
                        creditHours:
                          user?.semesters[0]?.semester.classes[1]
                            ?.creditHours ?? "",
                        grade: formData.get("grades2") ?? "",
                      },
                      {
                        className:
                          user?.semesters[0]?.semester.classes[2]?.className ??
                          "",
                        creditHours:
                          user?.semesters[0]?.semester.classes[2]
                            ?.creditHours ?? "",
                        grade: formData.get("grades3") ?? "",
                      },
                      {
                        className:
                          user?.semesters[0]?.semester.classes[3]?.className ??
                          "",
                        creditHours:
                          user?.semesters[0]?.semester.classes[3]
                            ?.creditHours ?? "",
                        grade: formData.get("grades4") ?? "",
                      },
                      {
                        className:
                          user?.semesters[0]?.semester.classes[4]?.className ??
                          "",
                        creditHours:
                          user?.semesters[0]?.semester.classes[4]
                            ?.creditHours ?? "",
                        grade: formData.get("grades5") ?? "",
                      },
                      {
                        className:
                          user?.semesters[0]?.semester.classes[5]?.className ??
                          "",
                        creditHours:
                          user?.semesters[0]?.semester.classes[5]
                            ?.creditHours ?? "",
                        grade: formData.get("grades6") ?? "",
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
              <div key={i}>
                <label htmlFor={`grades ${i + 1}`}>
                  {classElement.className}
                </label>
                <input type="text" name={`grades${i + 1}`} />
              </div>
            );
          })}
        </form>
        <button form="grade-form">Submit</button>
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
