import { useState } from "react";
import ChangePassword from "../ChangePassword/ChangePassword";

const ForgotPassword = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [openChangePassword, setOpenChangePassword] = useState(false);
  const [passwordLinkSent, setPasswordLinkSent] = useState(false);
  const [passwordLinkError, setPasswordLinkError] = useState(false);

  const sendResetLink = async (userEmail) => {
    try {
      const response = await fetch("http://localhost:8000/SendResetLink", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: userEmail }),
      });

      if (response.ok) {
        setOpenChangePassword(true);
        setPasswordLinkSent(true);
        setPasswordLinkError(false);
      } else {
        setPasswordLinkError(true);
        setPasswordLinkSent(false);
      }
    } catch (error) {
      console.error("Password Reset Link encountered an error. Please review the email entry and try again.", error);
      setPasswordLinkError(true);
      setPasswordLinkSent(false);
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
      <form onSubmit={handleSubmit}>
        <h1>Forgot Your Password?</h1>
        <p>Enter Your Email</p>
        <input type="text" name="email" id="email" />
        <button type="submit">Submit</button>
        {passwordLinkSent && <p>Password reset link has been sent to your email!</p>}
        {passwordLinkError && <p>Failed to send the password reset link. Please try again.</p>}
      </form>
    );
  } else {
    return <ChangePassword setUser={setUser} email={email} />;
  }
};

export default ForgotPassword;
