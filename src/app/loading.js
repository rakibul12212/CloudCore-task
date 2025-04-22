import React from "react";

const loading = () => {
  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <div className="text-center animate-pulse flex items-center">
        <p className="text-xl font-bold">Loading...</p>
      </div>
    </div>
  );
};

export default loading;
