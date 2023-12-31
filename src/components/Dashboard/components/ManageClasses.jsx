import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import xIcon from "../../../assets/icons/x.png";
import ClassInput from "./ClassInput";

const ManageClasses = ({ classes, user, setUser, darkMode }) => {
  const [state, setState] = useState([
    classes?.[0]?.className || "",
    classes?.[1]?.className || "",
    classes?.[2]?.className || "",
    classes?.[3]?.className || "",
    classes?.[4]?.className || "",
    classes?.[5]?.className || "",
  ]);

  const navigate = useNavigate();

  const submitHandler = (obj) => {
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
    navigate("/Dashboard");
  };

  useEffect(() => {
    if (!classes) {
      navigate("/LogIn");
    }
  }, []);

  const deleteHandler = (i) => {
    const deletedArray = state.filter((classEl) => {
      return classEl !== state[i];
    });
    setState(deletedArray);
  };

  return (
    <section
      style={{
        background: darkMode ? "#353839" : "white",
        color: darkMode ? "white" : "#353839",
      }}
    >
      <div>
      </div>
      <div>
        <h2 className="manage-class-title">Add or Delete Classes</h2>
      </div>
      <div>
        <form
          id="class-form"
          onSubmit={(e) => {
            e.preventDefault();
            const obj = {
              ...user,
              semesters: [
                {
                  semester: {
                    semesterName: user?.semesters[0]?.semester.semesterName,
                    classes: [
                      {
                        className: state[0] ?? "",
                        creditHours:
                          user?.semesters[0]?.semester.classes[0]
                            ?.creditHours ?? "",
                        grade:
                          user?.semesters[0]?.semester.classes[0]?.grades ?? "",
                      },
                      {
                        className: state[1] ?? "",
                        creditHours:
                          user?.semesters[0]?.semester.classes[1]
                            ?.creditHours ?? "",
                        grade:
                          user?.semesters[0]?.semester.classes[1]?.grades ?? "",
                      },
                      {
                        className: state[2] ?? "",
                        creditHours:
                          user?.semesters[0]?.semester.classes[2]
                            ?.creditHours ?? "",
                        grade:
                          user?.semesters[0]?.semester.classes[2]?.grades ?? "",
                      },
                      {
                        className: state[3] ?? "",
                        creditHours:
                          user?.semesters[0]?.semester.classes[3]
                            ?.creditHours ?? "",
                        grade:
                          user?.semesters[0]?.semester.classes[3]?.grades ?? "",
                      },
                      {
                        className: state[4] ?? "",
                        creditHours:
                          user?.semesters[0]?.semester.classes[4]
                            ?.creditHours ?? "",
                        grade:
                          user?.semesters[0]?.semester.classes[4]?.grades ?? "",
                      },
                      {
                        className: state[5] ?? "",
                        creditHours:
                          user?.semesters[0]?.semester.classes[5]
                            ?.creditHours ?? "",
                        grade:
                          user?.semesters[0]?.semester.classes[5]?.grades ?? "",
                      },
                    ],
                  },
                },
              ],
            };
            submitHandler(obj);
          }}
        >
          {state?.map((className, i) => {
            if (state[i - 1] === "") return null;
            if (className === "") {
              return (
                <ClassInput
                  key={i + 50}
                  state={state}
                  setState={setState}
                  i={i}
                />
              );
            } else {
              return (
                <div key={i + 25} className="manage-class">
                  <p>{className}</p>
                  <button className="delete-button" onClick={() => deleteHandler(i)}>
                    <img className="delete-class" style={{ width: "12px" }} src={xIcon} alt="" />
                  </button>
                </div>
              );
            }
          })}
        </form>
      </div>
      <div className="manage-class-button">
        <button className="grey-button" onClick={() => navigate(-1)}>Cancel</button>
        <button className="golden-button" type="submit" form="class-form">
          Finish
        </button>
      </div>
    </section>
  );
};

export default ManageClasses;
