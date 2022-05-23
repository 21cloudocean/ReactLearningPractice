import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input
        onChange={(event) => {
          props.onType(event);
        }}
        type="text"
        value={props.value}
      />
      <button
        onClick={() => {
          props.onChecked(props.id);
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;

/* <input onChange={handleChange} type="text" value={inputText} />
      <button onClick={addItem}> */
