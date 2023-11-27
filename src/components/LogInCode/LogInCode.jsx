import { useNavigate } from "react-router-dom";

const LogInCode = ({ setUser }) => {
  const navigate = useNavigate();

  const submitHandler = (obj) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    };

    fetch("http://localhost:8000/LogInCode", options).then((res) => {
      res
        .json()
        .then((data) => ({
          data: data,
          status: res.status,
        }))
        .then((res) => {
          setUser({ readOnly: true, ...res.data });
          navigate("/Dashboard");
        });
    });
  };

  return (
    <section>
      <h1>Enter Alternate Access Pass Code: </h1>
      <form
        id="passcode-form"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = { accessCode: formData.get("accessCode") ?? 0 };
          submitHandler(obj);
          e.target.reset();
        }}
      >
        <input
          type="number"
          placeholder="Alternate Access Passcode"
          name="accessCode"
        />
        <button form="passcode-form" className="golden-button">
          Submit
        </button>
        <button onClick={() => navigate(-1)} className="grey-button">
          Cancel
        </button>
      </form>
    </section>
  );
};

export default LogInCode;
