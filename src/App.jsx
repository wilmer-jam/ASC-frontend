import { createRoot } from "react-dom/client";
import SignUp from "./components/SignUp/SignUp";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import LogIn from "./components/LogIn/LogIn";
import Dashboard from "./components/Dashboard/Dashboard";
import Welcome from "./components/Welcome/Welcome";
import LogInHub from "./components/LogInHub/LogInHub";
import LogInCode from "./components/LogInCode/LogInCode";
import Grades from "./components/Dashboard/components/Grades";
import CreditHours from "./components/Dashboard/components/CreditHours";
import RecommendClasses from "./components/Dashboard/components/RecommendClasses";
import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import FAQ from "./components/FAQ/FAQ";
import ManageClasses from "./components/Dashboard/components/ManageClasses";
import IdleModal from "./components/IdleModal/IdleModal";
import "./useIdleTimeout.js";
import useIdleTimeout from "./useIdleTimeout.js";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";

const App = () => {
  const [user, setUser] = useState({});
  const [darkMode, setDarkMode] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleIdle = () => {
    setOpenModal(true);
  };

  // eslint-disable-next-line no-unused-vars
  const { idleTimer } = useIdleTimeout({ onIdle: handleIdle, idleTime: 600 });

  const handleLogout = () => {
    navigate("/");
    setOpenModal(false);
  };

  return (
    <div>
      <NavBar user={user} darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/LogInHub" element={<LogInHub />} />
        <Route path="/LogIn" element={<LogIn setUser={setUser} />} />
        <Route path="/LogInCode" element={<LogInCode setUser={setUser} />} />
        <Route
          path="/ForgotPassword"
          element={<ForgotPassword setUser={setUser} user={user} />}
        />
        <Route
          path="/Dashboard/Grades"
          element={
            <Grades
              user={user}
              setUser={setUser}
              classes={user?.semesters?.[0]?.semester.classes || []}
              darkMode={darkMode}
            />
          }
        />
        <Route
          path="/Dashboard/CreditHours"
          element={
            <CreditHours
              user={user}
              classes={user?.semesters?.[0]?.semester.classes}
              darkMode={darkMode}
            />
          }
        />
        <Route
          path="/Dashboard/RecommendClasses"
          element={
            <RecommendClasses
              user={user}
              classes={user?.semesters?.[0]?.semester.classes}
              darkMode={darkMode}
            />
          }
        />
        <Route
          path="/Dashboard/ManageClasses"
          element={
            <ManageClasses
              classes={user?.semesters?.[0]?.semester.classes}
              user={user}
              setUser={setUser}
              darkMode={darkMode}
            />
          }
        />
        <Route path="/Dashboard/FAQ" element={<FAQ darkMode={darkMode} />} />
        <Route
          path="/Dashboard"
          exact
          element={<Dashboard user={user} darkMode={darkMode} />}
        />
      </Routes>
      {openModal ? (
        <IdleModal
          close={() => setOpenModal(false)}
          handleLogout={handleLogout}
        />
      ) : null}
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
