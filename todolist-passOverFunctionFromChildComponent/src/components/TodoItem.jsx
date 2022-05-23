import React, { useState } from "react";
function TodoItem(props) {
  return (
    <li
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      //props也可以用来传送function。
      //这里不能直接写conclick={props.onChecked(props.id)}，会直接调用，而不仅仅是pass over。
      {props.content}
    </li>
  );
}
export default TodoItem;
