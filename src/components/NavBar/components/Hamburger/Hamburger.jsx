import { useEffect } from "react";
import "./Hamburger.css";
import rodolfo from "../../../../assets/rodolfo.svg";
import { Link } from "react-router-dom";

function Hamburger({ setShowModal }) {
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
          <Link onClick={() => setShowModal(false)}>
            <img src="" alt="" />
            <p>Log Out</p>
          </Link>
        </li>
      </ul>
      <button className="gradient" onClick={() => setShowModal(false)}></button>
    </div>
  );
}

export default Hamburger;
