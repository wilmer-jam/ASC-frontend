import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = ({ user, darkMode, readOnly }) => {
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
    if (!user.email) {
      navigate("/LogIn");
    }
  }, []);

  //this is codelogin important
  if (readOnly) {
    return (
      <section>
        <h1 style={{ color: darkMode ? "white" : "darkgrey" }}>Dashboard</h1>
        <div className="homepage">
          <div>
            Welcome, Here`s your semester plan:
            {user?.semesters?.[0]?.semester.classes.map((classElement, i) => {
              if (!classElement.className) return null;
              return (
                <div style={{ background: colors[i] }} key={i} className="card">
                  <h2 className="card-heading">{classElement.className}</h2>
                  {classElement.grade ? (
                    <p className="card-grade">
                      Current grade: {classElement.grade}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section
        style={{
          background: darkMode ? "#353839" : "white",
          color: darkMode ? "white" : "#353839",
        }}
      >
        <div className="homepage">
          <div className="homepage-left">
            Welcome, Here`s your semester plan:
            <div className="card-group">
              {user?.semesters?.[0]?.semester.classes.map((classElement, i) => {
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
            <div
              className="goals-and-rec"
              style={{ display: user?.readOnly ? "none" : "flex" }}
            >
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
