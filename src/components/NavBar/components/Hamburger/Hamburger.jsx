import { useEffect, useState } from "react";
import "./Hamburger.css";
import rodolfo from "../../../../assets/rodolfo.svg";
import { Link } from "react-router-dom";
import AccessCodeGen from "../../../AccessCodeGen/AccessCodeGen";
import homeIcon from "../../../../assets/icons/home-225.png";
import whiteHomeIcon from "../../../../assets/icons/white-home.png";
import whiteLogoutIcon from "../../../../assets/icons/logout-white.png";
import questionIcon from "../../../../assets/icons/question.png";
import faqIcon from "../../../../assets/icons/faq.png";
import logoutIcon from "../../../../assets/icons/logout.svg";

function Hamburger({ setShowModal, user, setDarkMode, darkMode }) {
  const [showAccessCode, setShowAccessCode] = useState(false);
  const handleClick = () => {
    setShowModal(false);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);

  return (
    <div className="ham">
      <div className="ham__top-container">
        <h2>Academic Success Center</h2>
        <div className="ham__avatar-group">
          <button onClick={() => setShowModal(false)}>
            <img src={rodolfo} style={{ width: "10px" }} alt="avatar" />
          </button>
          <div>
            <h3>Pablo Alarcon</h3>
            <p>Student</p>
          </div>
        </div>
        <button onClick={() => setDarkMode(!darkMode)}>
          Switch Light/Dark
        </button>
      </div>

      <ul
        className="ham__list"
        style={{
          background: darkMode ? "#353839" : "white",
          color: darkMode ? "white" : "#353839",
        }}
      >
        <li className="ham__item">
          <Link
            to="/Dashboard"
            className="ham__link"
            style={{
              color: darkMode ? "white" : "#353839",
            }}
            onClick={() => setShowModal(false)}
          >
            <img
              src={darkMode ? whiteHomeIcon : homeIcon}
              alt=""
              className="ham__img"
            />
            <p>Home</p>
          </Link>
        </li>
        <li className="ham__item">
          <Link
            to="/Dashboard/FAQ"
            className="ham__link"
            style={{
              color: darkMode ? "white" : "#353839",
            }}
            onClick={() => setShowModal(false)}
          >
            <img src={questionIcon} alt="" className="ham__img" />
            <p>Frequently Asked Questions</p>
          </Link>
        </li>
        <li className="ham__item">
          <Link
            to="/Dashboard/RecommendClasses"
            className="ham__link"
            style={{
              color: darkMode ? "white" : "#353839",
            }}
            onClick={() => setShowModal(false)}
          >
            <img src={faqIcon} alt="" className="ham__img" />
            <p>View Previously Recommended Classes</p>
          </Link>
        </li>
        <li className="ham__item">
          <button
            onClick={() => {
              setShowAccessCode(true);
            }}
          >
            <img src="" alt="" />
            <p>Access Code</p>
          </button>
        </li>
        <li className="ham__item">
          <Link
            to="/"
            className="ham__link"
            style={{
              color: darkMode ? "white" : "#353839",
            }}
            onClick={() => setShowModal(false)}
          >
            <img
              src={darkMode ? whiteLogoutIcon : logoutIcon}
              alt=""
              className="ham__img"
            />
            <p>Log Out</p>
          </Link>
        </li>
      </ul>
      <button className="gradient" onClick={() => setShowModal(false)}></button>
      <AccessCodeGen
        isOpen={showAccessCode}
        setIsOpen={setShowAccessCode}
        user={user}
      />
    </div>
  );
}

export default Hamburger;
