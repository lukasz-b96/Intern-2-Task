import React from "react";

const CustomInput = (props) => {
  return (
    <>
      <p>{props.fieldName}</p>
      <CustomInput required type={props.type} onChange={props.handler} />
      <br /> <br />
    </>
  );
};

export default CustomInput;
