import { useEffect, useState } from "react";
import "./Hamburger.css";
import rodolfo from "../../../../assets/rodolfo.svg";
import { Link } from "react-router-dom";
import AccessCodeGen from "../../../AccessCodeGen/AccessCodeGen";

function Hamburger({ setShowModal, user }) {
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
      </div>

      <ul className="ham__list">
        <li className="ham__item">
          <Link to="/Dashboard" onClick={() => setShowModal(false)}>
            <img src="" alt="" />
            <p>Home</p>
          </Link>
        </li>
        <li className="ham__item">
          <Link to="/Dashboard/FAQ" onClick={() => setShowModal(false)}>
            <img src="" alt="" />
            <p>Frequently Asked Questions</p>
          </Link>
        </li>
        <li className="ham__item">
          <Link
            to="/Dashboard/RecommendClasses"
            onClick={() => setShowModal(false)}
          >
            <img src="" alt="" />
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
          <Link to="/" onClick={() => setShowModal(false)}>
            <img src="" alt="" />
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
