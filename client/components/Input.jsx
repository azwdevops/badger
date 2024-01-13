import React from "react";

const Input = ({ disabled = false, className = "", ...props }) => {
  return (
    <input
      disabled={disabled}
      className={`${className} outline-none border border-indigo-400 h-10 px-2 rounded`}
      {...props}
    />
  );
};

export default Input;
