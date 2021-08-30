import React, { createRef } from "react";
import FRInputs from "./FRInputs";

const FRParentInput = () => {
  const inputRef = createRef();

  const clickHandler = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <FRInputs ref={inputRef} />
      <button onClick={clickHandler}>Focus input</button>
    </div>
  );
};

export default FRParentInput;
