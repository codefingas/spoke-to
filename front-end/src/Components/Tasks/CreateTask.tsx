import React from "react";
const Field = (props: any) => {
  const {
    handlers: { handleChange, placeholder, value, name },
  } = props;
  return (
    <div>Input </div>
    // <Input
    //   type="text"
    //   name={name}
    //   placeholder={placeholder}
    //   onChange={handleChange}
    //   value={value}
    // />
  );
};
export default Field;
