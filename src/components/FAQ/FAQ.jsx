import FAQQuestion from "./components/FAQQuestion/FAQQuestion";
import "./FAQ.css";

const FAQ = ({ darkMode }) => {
  const FAQs = [
    {
      question: "How do I get recommended classes?",

      answer: "To get recommended classes, log in and select the semester you are looking for classes in. Then a selection of classes will appear.",
    },
    {
      question: "How do I input my credit hours?",
      answer: "To input credit hours, click on the text box near the classes and enter a valid number",
    },
    {
      question: "How do I delete my account?",
      answer: "Contact an Administrator or support specialist.",
    },
    {
      question: "How can I change any inputs?",
      answer: "Enter the value, and then click save button below, to lock in changes.",
    },
  ];

  return (
    <section
      className="investor-faq"
      style={{
        background: darkMode ? "#353839" : "white",
        color: darkMode ? "white" : "#353839",
      }}
    >
      {FAQs.map((question) => (
        <FAQQuestion
          key={Math.random()}
          question={question.question}
          answer={question.answer}
        />
      ))}
    </section>
  );
};

export default FAQ;
