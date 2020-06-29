import React, { useState } from "react";

function TodoItems(props) {
  let [ischeck, setCheck] = useState(false);

  function handleClick() {
    setCheck(prev => {
      return !prev;
    });
  }

  return (
    <li
      style={ischeck ? { textDecoration: "line-through" } : null}
      onClick={handleClick}
    >
      {props.items}
    </li>
  );
}
export default TodoItems;
