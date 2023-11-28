import { useNavigate } from "react-router-dom";

const ChangePassword = ({ setUser, email }) => {
  const navigate = useNavigate();

  const submitHandler = (obj) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: obj.password,
      }),
    };

    fetch("http://localhost:8000/ChangePassword", options).then((res) => {
      res
        .json()
        .then((data) => ({
          data: data,
          status: res.status,
        }))
        .then((res) => {
          setUser({ readOnly: false, ...res.data });
        });
    });
    navigate("/Dashboard");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const obj = {
          password: formData.get("password") ?? "",
        };
        submitHandler(obj);
      }}
    >
      <h1>Change Your Password!</h1>
      <input type="password" name="password" id="password" />
      <button>Submit</button>
    </form>
  );
};

export default ChangePassword;
