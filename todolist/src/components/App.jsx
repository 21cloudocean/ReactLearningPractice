import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  //如果不把input和button的useState分开，直接useState([])的话，event.target.value会返回 undefined。
  //每个useState对应一个动作。要保存input的内容（state）就要让这个Input有对应的useState。
  function inputState(event) {
    const inputContent = event.target.value;
    setInput(inputContent);
  }
  const [inputs, setInputs] = useState(["A item"]);
  function updateInputs() {
    setInputs((prevInputs) => {
      return [...prevInputs, input];
    });
    setInput("");
    //作用：点击按钮后输入栏清空。
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={inputState} value={input} type="text" />
    //注意：如果不输入value={input}【controlled component】，则上面的清空（setInput("")）没有效果。因为此时有两个state，清空的不是input的这个state。
        <button onClick={updateInputs}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {inputs.map(function (input) {
            return <li>{input}</li>;
          })}
          //map()里的function，即使只有一个return也算。而且这里只能在return中加<li></li>，而不能<li>{inputs.map)}</li>，否则只会在一个bullet后面向后加内容，而不会增加bullet。
          //map()需要用的HTML element直接放return里。让它保持{map(x=><h1>{x}</h1>)}这种状态。
        </ul>
      </div>
    </div>
  );
}

export default App;
