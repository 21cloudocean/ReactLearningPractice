import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  function inputState(event) {
    console.log(event.target.value);
    const inputContent = event.target.value;
    setInput(inputContent);
  }
  const [inputs, setInputs] = useState(["A item"]);
  function updateInputs() {
    console.log("clicked");
    setInputs((prevInputs) => {
      return [...prevInputs, input];
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={inputState} type="text" />
        <button onClick={updateInputs}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {inputs.map(function (input) {
            console.log(input);
            return <li>{input}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
