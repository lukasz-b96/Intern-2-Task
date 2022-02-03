import React from "react";

const CheckBox = (props) => {
  return (
    <div>
      <input type="checkbox" onChange={props.handler} />
      <span>zgoda na newsletter</span>
      <br /> <br />
    </div>
  );
};

export default CheckBox;
