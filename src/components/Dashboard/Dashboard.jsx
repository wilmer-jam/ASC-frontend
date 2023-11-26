import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/LogIn");
    }
  }, []);

  return (
    <section>
      <h1 style={{ color: "white" }}>Dashboard</h1>
      <div>
        Classes
        {user?.semesters[0]?.semester.classes.map((classElement, i) => (
          <h2 key={i}>{classElement.className}</h2>
        ))}
      </div>
      <button onClick={() => navigate("/Dashboard/CreditHours")}>
        Input credit hours
      </button>
      <button onClick={() => navigate("/Dashboard/Grades")}>
        Input grades
      </button>
      <button onClick={() => navigate("/Dashboard/RecommendClasses")}>
        Recommend classes
      </button>
      <button onClick={() => navigate("/Dashboard/AddClasses")}>
        Add classes
      </button>
    </section>
  );
};

export default Dashboard;
