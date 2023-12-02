import { useState } from "react";
import ChangePassword from "../ChangePassword/ChangePassword";

const ForgotPassword = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [openChangePassword, setOpenChangePassword] = useState(false);

  const sendResetLink = async (userEmail) => {
    try {
    // reset email link
      const response = await fetch("http://localhost:8000/SendResetLink", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: userEmail }),
      });

      if (response.ok) {
        setOpenChangePassword(true);
      } else {
        console.error("Password Reset Link Failed To Send, Please Try Again");
       
      }
    } catch (error) {
      console.error("Password Reset Link encountered error, Please review email entry and try again", error);
         }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = {
      email: formData.get("email") || "",
    };
    setEmail(obj.email);
    sendResetLink(obj.email);
  };

  if (!openChangePassword) {
    return (
      <form 
         onSubmit={handleSubmit}>
        <h1>Forgot Your Password?</h1>
        <p>Enter Your Email</p>
        <input type="text" name="email" id="email" />
        <button type="submit">Submit</button>
      </form>
    );
  } else {
    return <ChangePassword setUser={setUser} email={email} />;
  }
};

export default ForgotPassword;
