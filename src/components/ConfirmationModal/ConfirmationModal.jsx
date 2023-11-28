import { useNavigate } from "react-router-dom";
import "./ConfirmationModal.css";

const ConfirmationModal = ({ copy, button, isOpen }) => {
  const navigate = useNavigate();

  return (
    <section className="modal" style={{ display: isOpen ? "flex" : "none" }}>
      <h1>{copy}</h1>
      <button className="golden-button" onClick={() => navigate("/Dashboard")}>{button}</button>
    </section>
  );
};

export default ConfirmationModal;
