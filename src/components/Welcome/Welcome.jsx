import { useNavigate } from "react-router-dom";
import student1 from "../../assets/smiling-student.jpg";
import student2 from "../../assets/smiling-student2.jpg";
import "./Welcome.css";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <section>
      <div className="welcome-heading">
        <h1>Academic Success Center</h1>
      </div>
      <div className="welcome-page">
        <div className="welcome-page-left">
          <img className="student1" src={student1} alt="Student 1" />
          <img className="student2" src={student2} alt="Student 2" />
        </div>
        <div className="welcome-page-right">
          <h2 className="bio">
            Helping students achieve their academic goals...
          </h2>
          <div className="welcome-button">
            <button
              className="golden-button golden-button-welcome"
              onClick={() => navigate("/LogInHub")}
            >
              Log In
            </button>
            <button className="grey-button" onClick={() => navigate("/SignUp")}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
