import React, { useState } from "react";
import ConfirmationModal from "../../ConfirmationModal/ConfirmationModal";

const CreditHours = ({ classes, user }) => {
  const [isModalOpen, setisModalOpen] = useState();

  const creditSubmitHandler = (obj) => {
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
        <h1>Credit Hours</h1>
        <form
          id="credit-form"
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
                        creditHours: formData.get("creditHours1") ?? 0,
                        grade: "",
                      },
                      {
                        className:
                          user?.semesters[0]?.semester.classes[1]?.className ??
                          "",
                        creditHours: formData.get("creditHours2") ?? 0,
                        grade: "",
                      },
                      {
                        className:
                          user?.semesters[0]?.semester.classes[2]?.className ??
                          "",
                        creditHours: formData.get("creditHours3") ?? 0,
                        grade: "",
                      },
                      {
                        className:
                          user?.semesters[0]?.semester.classes[3]?.className ??
                          "",
                        creditHours: formData.get("creditHours4") ?? 0,
                        grade: "",
                      },
                      {
                        className:
                          user?.semesters[0]?.semester.classes[4]?.className ??
                          "",
                        creditHours: formData.get("creditHours5") ?? 0,
                        grade: "",
                      },
                      {
                        className:
                          user?.semesters[0]?.semester.classes[5]?.className ??
                          "",
                        creditHours: formData.get("creditHours6") ?? 0,
                        grade: "",
                      },
                    ],
                  },
                },
              ],
            };
            creditSubmitHandler(obj);
            setisModalOpen(true);
          }}
        >
          {classes?.map((classElement, i) => {
            if (classElement.className === "") return null;
            return (
              <div key={i}>
                <label htmlFor={`creditHours ${i + 1}`}>
                  {classElement.className}
                </label>
                <input type="text" name={`creditHours${i + 1}`} />
              </div>
            );
          })}
        </form>
        <button form="credit-form">Submit</button>
      </section>

      <ConfirmationModal
        copy={"Your credit hours have been updated successfully"}
        button={"Done"}
        isOpen={isModalOpen}
      />
    </div>
  );
};

export default CreditHours;
