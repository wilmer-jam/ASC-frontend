import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = ({ user }) => {
  const navigate = useNavigate();

  const colors = {
    1: "#97DDAB",
    2: "#E6D36F",
    3: "#9A99D6",
    4: "#CC8C8C",
    5: "#A88CCC",
    6: "#CC8CB2",
  };

  useEffect(() => {
    if (!user) {
      navigate("/LogIn");
    }
  }, []);

  if (user?.readOnly) {
    return (
      <section>
        <h1 style={{ color: "white" }}>Dashboard</h1>
        <div className="homepage">
          <div>
            Hello! Here`s what your semester looks like:
            {user?.semesters[0]?.semester.classes.map((classElement, i) => (
              <div style={{ background: colors[i] }} key={i} className="card">
                <h2 className="card-heading">{classElement.className}</h2>
                {classElement.grade ? (
                  <p className="card-grade">
                    Current grade: {classElement.grade}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section>
        <h1 style={{ color: "white" }}>Dashboard</h1>
        <div className="homepage">
          <div className="homepage-left">
            Hello! Here`s what your semester looks like:
            <div className="card-group">
              {user?.semesters[0]?.semester.classes.map((classElement, i) => {
                if (!classElement.className) return null;
                return (
                  <div
                    style={{ background: colors[i + 1] }}
                    key={i}
                    className="card"
                  >
                    <h2 className="class-heading">{classElement.className}</h2>
                    {classElement.grade ? (
                      <p className="class-grade">
                        Current grade: {classElement.grade}
                      </p>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="homepage-right">
            <div className="goals-and-rec">
              <button onClick={() => navigate("/Dashboard/CreditHours")}>
                Input credit hours
              </button>
              <button onClick={() => navigate("/Dashboard/Grades")}>
                Input grades
              </button>
              <button onClick={() => navigate("/Dashboard/RecommendClasses")}>
                Recommend classes
              </button>
              <button onClick={() => navigate("/Dashboard/ManageClasses")}>
                Manage classes
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default Dashboard;
