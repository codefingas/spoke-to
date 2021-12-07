import React, { ReactElement } from "react";
import { ButtonProps } from "../../types";

const Btn = ({ type, value, handleSubmit, size, error, children, className }: ButtonProps): ReactElement => {
  return (
    <button
      className={`btn waves-effect waves-light btn-${size} ${error && 'red'} ${className}`}
      type={type}
      onClick={handleSubmit}

    >
      {value}
      {children}
    </button>
  );
};
export default Btn;
