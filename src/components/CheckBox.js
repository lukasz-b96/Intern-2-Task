import React from "react";

const CheckBox = (props) => {
  return (
    <div>
      <input data-testid="checkbox" type="checkbox" onChange={props.handler} />
      <span>zgoda na newsletter</span>
      <br /> <br />
    </div>
  );
};

export default CheckBox;
