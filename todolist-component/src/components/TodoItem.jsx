import React, { useState } from "react";
function TodoItem(props) {
  const [lineText, setLineText] = useState({
    isclicked: false,
    styling: { textDecoration: "" }
  });
  function lineThrough(event) {
    setLineText((prevValue) => {
      lineText.isclicked = !prevValue.isclicked;
      return {
        isclicked: lineText.isclicked,
        styling: lineText.isclicked
          ? { textDecoration: "line-through" }
          : { textDecoration: "" }
      };
    });
  }
  return (
    <li onClick={lineThrough} style={lineText.styling}>
      {props.content}
    </li>
  );
}
export default TodoItem;
