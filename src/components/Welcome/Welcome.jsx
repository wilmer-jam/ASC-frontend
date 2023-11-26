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
        <img className="peach" src={ass} alt="ass" />
        <img className="banana" src={banana} alt="banana" />
      </div>
      <div>
        <h2 className="bio">
          Helping students achieve their academic goals...
        </h2>
        <div className="button">
          <button onClick={() => navigate("/LogInHub")}>Log In</button>
          <button onClick={() => navigate("/SignUp")}>Sign Up</button>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
