import { Link, useNavigate } from "react-router-dom";

const LogIn = ({ setUser, setReadOnly }) => {
  const navigate = useNavigate();

  const submitHandler = (obj) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: obj.email,
        password: obj.password,
      }),
    };

    fetch("http://localhost:8000/LogIn", options).then((res) => {
      res
        .json()
        .then((data) => ({
          data: data,
          status: res.status,
        }))
        .then((res) => {
          setUser({ ...res.data });
          setReadOnly(true);
          navigate("/Dashboard");
        });
    });
  };

  return (
    <>
      <section className="login-container">
        <h1 className="login-heading">Log In!</h1>
        <form
          className="data-form"
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const obj = {
              email: formData.get("email") ?? "",
              password: formData.get("password") ?? "",
            };
            submitHandler(obj);
            e.target.reset();
          }}
        >
          <label htmlFor="email">
            Email
            <input id="email" name="email" required placeholder="Email" />
          </label>
          <label htmlFor="password">
            Password
            <input
              required
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
          </label>
          <Link to="/ForgotPassword">Forgot Password</Link>
          <button className="submit-login">Submit</button>
        </form>
      </section>
    </>
  );
};

export default LogIn;
