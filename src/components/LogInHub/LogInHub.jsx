import { useNavigate } from "react-router-dom";

const LogInHub = () => {
  const navigate = useNavigate();

  return (
    <section className="hub-container">
      <div className="hub-heading">
        <h1>Academic Success Center</h1>
      </div>
      <div className="login-options">
        <button className="golden-button" onClick={() => navigate("/LogIn")}>
          Log In with Email
        </button>
        <button
          className="golden-button"
          onClick={() => navigate("/LogInCode")}
        >
          Log In with Alternate Access Passcode
        </button>
        <button className="grey-button" onClick={() => navigate("/")}>
          Back to Welcome Page
        </button>
      </div>
    </section>
  );
};

export default LogInHub;
