import React from "react";

const Container = ({ className, children }) => {
  return (
    <div className={`w-full max-w-[1168px] mx-auto ${className} px-4 md:px-0`}>
      {children}
    </div>
  );
};

export default Container;
