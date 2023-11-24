import React from "react";

const Container = ({ children }) => {
  return (
    <>
      <div className="px-4 md:px-6 lg:px-20 my-4 mx-auto">{children}</div>
    </>
  );
};

export default Container;
