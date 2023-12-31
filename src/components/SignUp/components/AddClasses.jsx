import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddClasses = ({ signUpInfo, setShowClasses }) => {
  const [numClasses, setNumClasses] = useState(0);
  const [classArray, setClassArray] = useState([]);

  const navigate = useNavigate();

  let inputArray = [];

  const submitHandlerSignUp = (obj) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    };

    fetch("http://localhost:8000/SignUp", options).then((res) => {
      res.json();
      console.log(res);
    });
    navigate("/");
  };

  useEffect(() => {
    for (let i = numClasses; i > 0; i--) {
      inputArray.push(i);
    }
    setClassArray([...inputArray]);
  }, [numClasses]);

  return (
    <section>
      <div>
        <h1 className="sign-up-head">Academic Success Center</h1>
      </div>
      <div className="class-select">
        <h2>What classes are you taking?</h2>
        <select
          name="classes"
          id="class-select"
          onChange={(e) => setNumClasses(e.target.value)}
        >
          <option value={0}>-- Select number of classes</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
        </select>
      </div>
      <div>
        <form
          id="class-form"
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const signUpObj = {
              email: signUpInfo.email,
              password: signUpInfo.password,
              name: signUpInfo.name,
              semesters: [
                {
                  semester: {
                    semesterName: signUpInfo.semesterName,
                    classes: [
                      {
                        className: formData.get("1") ?? "",
                        grade: "",
                      },
                      {
                        className: formData.get("2") ?? "",
                        grade: "",
                      },
                      {
                        className: formData.get("3") ?? "",
                        grade: "",
                      },
                      {
                        className: formData.get("4") ?? "",
                        grade: "",
                      },
                      {
                        className: formData.get("5") ?? "",
                        grade: "",
                      },
                      {
                        className: formData.get("6") ?? "",
                        grade: "",
                      },
                    ],
                  },
                },
              ],
            };
            submitHandlerSignUp(signUpObj);
          }}
        >
          {classArray.map((input, i) => (
            <div key={Math.random()} className="class-name-input">
              <label htmlFor="class">Class {i + 1}</label>
              <input placeholder="Name" type="text" name={String(i + 1)} />
            </div>
          ))}
        </form>
      </div>
      <div className="class-select-button">
        <button className="grey-button" onClick={() => setShowClasses(false)}>
          Previous
        </button>
        <button className="golden-button" type="submit" form="class-form">
          Finish
        </button>
      </div>
    </section>
  );
};

export default AddClasses;
