import { useState } from "react";
import "./FAQQuestion.css";
import arrowDownIcon from "../../../../assets/icons/arrow-down.svg";

const FAQQuestion = ({ question, answer }) => {
  const [minimize, setMinimize] = useState(true);

  return (
    <section className="question">
      <div className="question__header">
        <h3 className="question__question">{question}</h3>
        <button
          className="question__mini-icon"
          onClick={() => setMinimize(!minimize)}
        >
          <img src={arrowDownIcon} alt="arrow for minimizing" />
        </button>
      </div>
      {minimize ? null : (
        <div className="question__answer-container">
          <p className="question__answer">{answer}</p>
        </div>
      )}
    </section>
  );
};

export default FAQQuestion;
