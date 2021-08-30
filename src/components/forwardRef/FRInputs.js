import React, { forwardRef } from "react";

const FRInputs = forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} placeholder="forward ref example" />
    </div>
  );
});

export default FRInputs;
