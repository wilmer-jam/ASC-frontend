import { useState } from "react";

const ClassInput = ({ state, setState, i }) => {
  const [input, setInput] = useState("");

  const addClassHandler = (i) => {
    const splicedArray = state.toSpliced(i, 1, input);
    setState(splicedArray);
  };

  function inputHandler(e) {
    setInput(e.target.value);
  }

  return (
    <div key={i + 51}>
      <input
        placeholder="Add Class"
        type="text"
        value={input}
        onChange={inputHandler}
      />
      <button onClick={() => addClassHandler(i)}>Add</button>
    </div>
  );
};

export default ClassInput;
