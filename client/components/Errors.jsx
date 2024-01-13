import React from "react";

const Errors = ({ errors = [], ...props }) => {
  return (
    <>
      {errors?.length > 0 && (
        <div {...props}>
          <div className="text-red-700 font-bold">Error</div>
          <ul className="mt-2 text-sm text-red-700 mb-3">
            {errors?.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Errors;
