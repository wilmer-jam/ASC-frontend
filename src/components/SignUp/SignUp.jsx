import "./SignUp.css";
import { useState } from "react";
import AddClasses from "../Dashboard/components/AddClasses";
const SignUp = () => {
  const [signUpInfo, setSignUpInfo] = useState({});
  const [showClasses, setShowClasses] = useState(false);

  if (!showClasses)
    return (
      <section>
        <h1>Sign Up!</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const date = new Date();
            const obj = {
              email: formData.get("email") ?? "",
              password: formData.get("password") ?? "",
              semesterName: formData.get("semester") + date.getFullYear() ?? "",
            };
            setSignUpInfo(obj);
            setShowClasses(true);
          }}
        >
          <label htmlFor="email">
            Email
            <input
              id="email"
              name="email"
              onChange={() => {}}
              placeholder="Email"
              required
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={() => {}}
              required
            />
          </label>
          <select required name="semester" id="semester-select">
            <option value="">-- Select Semester</option>
            <option value="fall">Fall</option>
            <option value="spring">Spring</option>
            <option value="summer">Summer</option>
          </select>
          <button>Submit</button>
        </form>
      </section>
    );
  else {
    console.log(signUpInfo);
    return (
      <AddClasses signUpInfo={signUpInfo} setShowClasses={setShowClasses} />
    );
  }
};

export default SignUp;
