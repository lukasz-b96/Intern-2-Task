import React from "react";

const CustomInput = (props) => {
  return (
    <>
      <p>{props.fieldName}</p>
      <input
        data-testid="inputs"
        required
        type={props.type}
        onChange={props.handler}
      />
      <br /> <br />
    </>
  );
};

export default CustomInput;
