import FAQQuestion from "./components/FAQQuestion/FAQQuestion";
import "./FAQ.css";

const FAQ = () => {
  const FAQs = [
    {
      question: "How do I get recommended classes?",

      answer: "Answer",
    },
    {
      question: "How do I input my credit hours?",
      answer: "Answer",
    },
    {
      question: "How do I sync to Canvas?",
      answer: "Answer",
    },
    {
      question: "How do I delete my account?",
      answer: "Answer",
    },
    {
      question: "How can I change any inputs?",
      answer: "Answer",
    },
  ];

  return (
    <section className="investor-faq">
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
