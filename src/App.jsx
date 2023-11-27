import { createRoot } from "react-dom/client";
import SignUp from "./components/SignUp/SignUp";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import LogIn from "./components/LogIn/LogIn";
import Dashboard from "./components/Dashboard/Dashboard";
import Welcome from "./components/Welcome/Welcome";
import LogInHub from "./components/LogInHub/LogInHub";
import LogInCode from "./components/LogInCode/LogInCode";
import Semesters from "./components/Dashboard/components/Semesters";
import Grades from "./components/Dashboard/components/Grades";
import CreditHours from "./components/Dashboard/components/CreditHours";
import RecommendClasses from "./components/Dashboard/components/RecommendClasses";
import AddClasses from "./components/SignUp/components/AddClasses";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import FAQ from "./components/FAQ/FAQ";
import ManageClasses from "./components/Dashboard/components/ManageClasses";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: Infinity,
//       cacheTime: Infinity,
//     },
//   },
// });

const App = () => {
  const [user, setUser] = useState();

  console.log("app", user);

  return (
    <div>
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/LogInHub" element={<LogInHub />} />
        <Route path="/LogIn" element={<LogIn setUser={setUser} />} />
        <Route path="/LogInCode" element={<LogInCode setUser={setUser} />} />
        <Route path="/Dashboard/Semesters" element={<Semesters />} />
        <Route
          path="/Dashboard/Grades"
          element={
            <Grades
              user={user}
              setUser={setUser}
              classes={user?.semesters[0]?.semester.classes}
            />
          }
        />
        <Route
          path="/Dashboard/CreditHours"
          element={
            <CreditHours
              user={user}
              classes={user?.semesters[0]?.semester.classes}
            />
          }
        />
        <Route
          path="/Dashboard/RecommendClasses"
          element={<RecommendClasses />}
        />
        <Route
          path="/Dashboard/ManageClasses"
          element={
            <ManageClasses
              classes={user?.semesters[0]?.semester.classes}
              user={user}
              setUser={setUser}
            />
          }
        />
        <Route path="/Dashboard/FAQ" element={<FAQ />} />
        <Route path="/Dashboard" exact element={<Dashboard user={user} />} />
      </Routes>
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
