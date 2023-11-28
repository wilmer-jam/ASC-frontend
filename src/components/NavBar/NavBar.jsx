import { useLocation } from "react-router-dom";
import hamburgerIcon from "../../assets/icons/hamburger.svg";
import Hamburger from "./components/Hamburger/Hamburger";
import { useState, useEffect } from "react";
import "./NavBar.css"

const NavBar = ({ user, setDarkMode, darkMode }) => {
  const [showModal, setShowModal] = useState(false);
  const [titleState, setTitleState] = useState("");
  const location = useLocation();

  const titleGetter = {
    "/Dashboard": "Home",
    "/Dashboard/Grades": "Input Grades",
    "/Dashboard/CreditHours": "Input Credit Hours",
    "/Dashboard/RecommendClasses": "Recommend Classes",
    "/Dashboard/FAQ": "Frequently Asked Questions"
  }

  useEffect(() => {
    if (
      location.pathname === "/" ||
      location.pathname === "/LogIn" ||
      location.pathname === "/LogInCode" ||
      location.pathname === "/SignUp" ||
      location.pathname === "/LogInHub"
    ) setTitleState("")
    else {
      setTitleState(titleGetter[location.pathname])
    }
  }, [location.pathname])

  return (
    <>
    
    <nav className="nav" style={{ display: location.pathname === "/" || location.pathname === "/LogIn" || location.pathname === "/LogInCode" || location.pathname === "/SignUp" || location.pathname === "/LogInHub" ? "none" : "flex" }}>
      <div className="nav__stuff">
        <button
          style={{ background: "transparent", border: "none" }}
          onClick={() => setShowModal(true)}
        >
          <img
            style={{ width: "20px" }}
            src={hamburgerIcon}
            alt="hamburger"
          />
        </button>
        <h2 className="ham-head">ASC</h2>
        <h2 className="ham-title">{titleState}</h2>
      </div>
    </nav>
    {showModal ? (
      <Hamburger
        setShowModal={setShowModal}
        user={user}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    ) : null}
    </>
  );
};

export default NavBar;
