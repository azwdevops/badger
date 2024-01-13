import React from "react";

const Button = ({ type = "submit", className = "", ...props }) => {
  return (
    <button
      type={type}
      className={`${className} rounded inline-flex items-center px-4 py-2 bg-indigo-700 border border-transparent font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-800 active:bg-indigo-900 focus:outline-none focus:border-indigo-900 focus:ring ring-indigo-300 disabled:opacity-25 transition ease-in-out duration-150`}
      {...props}
    />
  );
};

export default Button;
