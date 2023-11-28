import { useLocation } from "react-router-dom";
import hamburgerIcon from "../../assets/icons/hamburger.svg";
import Hamburger from "./components/Hamburger/Hamburger";
import { useState } from "react";

const NavBar = ({ user, setDarkMode, darkMode }) => {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  if (
    location.pathname === "/" ||
    location.pathname === "/LogIn" ||
    location.pathname === "/LogInCode" ||
    location.pathname === "/SignUp" ||
    location.pathname === "/LogInHub"
  ) {
    return null;
  }

  return (
    <div>
      <nav className="nav">
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
          <h2>ASC</h2>
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
    </div>
  );
};

export default NavBar;
