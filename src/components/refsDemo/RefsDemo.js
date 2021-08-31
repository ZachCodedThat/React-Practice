import React, { createRef, useEffect } from "react";

export default function RefsDemo() {
  const inputRef = createRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const clickHandler = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="ref example" />
      <button onClick={clickHandler}>Focus input</button>
    </div>
  );
}
