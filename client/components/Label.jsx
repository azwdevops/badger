import React from "react";

const Label = ({ children, className = "", ...props }) => {
  return (
    <label className={`${className} block text-indigo-700`} {...props}>
      {children}
    </label>
  );
};

export default Label;
