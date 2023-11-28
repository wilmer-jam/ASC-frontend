import { useState } from "react";
import ChangePassword from "../ChangePassword/ChangePassword";

const ForgotPassword = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [openChangePassword, setOpenChangePassword] = useState(false);

  const submitHandler = (obj) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: obj.email,
      }),
    };

    fetch("http://localhost:8000/LogIn", options).then((res) => {
      res
        .json()
        .then((data) => ({
          data: data,
          status: res.status,
        }))
        // eslint-disable-next-line no-unused-vars
        .then((res) => {});
    });
    setOpenChangePassword(true);
  };

  if (!openChangePassword) {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            email: formData.get("email") ?? "",
          };
          setEmail(formData.get("email") ?? "");
          submitHandler(obj);
        }}
      >
        <h1>Forgot Your Password?</h1>
        <p>Enter Your Email!</p>
        <input type="text" name="email" id="email" />
        <button>Submit</button>
      </form>
    );
  } else {
    return <ChangePassword setUser={setUser} email={email} />;
  }
};

export default ForgotPassword;
