import { useNavigate } from "react-router-dom";
import ass from "../../assets/ass.png";
import banana from "../../assets/bananas-banana.svg";
import "./Welcome.css";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <section>
      <div className="welcome-heading">
        <h1>Academic Success Center</h1>
      </div>
      <div className="welcome-page">
        <div>
          <img className="peach" src={ass} alt="ass" />
          <img className="banana" src={banana} alt="banana" />
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
