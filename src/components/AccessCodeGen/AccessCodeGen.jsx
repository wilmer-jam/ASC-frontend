import "./AccessCodeGen.css";

const AccessCodeGen = ({ isOpen, setIsOpen, user }) => {
  const submitHandler = (obj) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    };

    fetch("http://localhost:8000/EditStudent", options).then((res) => {
      res
        .json()
        .then((data) => ({
          data: data,
          status: res.status,
        }))
        .then((res) => {
          res.data;
        });
    });
    setIsOpen(false);
  };

  return (
    <section
      className="access-code-modal"
      style={{ display: isOpen ? "flex" : "none" }}
    >
      <h1>Set Your Access Code</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = { ...user, accessCode: formData.get("accessCode") ?? 0 };
          submitHandler(obj);
          e.target.reset();
        }}
      >
        <input type="number" name="accessCode" />
        <button onClick={() => setIsOpen(false)}>Done</button>
      </form>
    </section>
  );
};

export default AccessCodeGen;
