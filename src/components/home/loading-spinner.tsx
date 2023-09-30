import React from "react";

const LoadingSpinner = () => {
  return (
    <div
      className="h-[24px] w-[24px] inline-block border-zinc-800 border-r-zinc-600 rounded-full border-[3.75px] border-solid animate-spin"
      role="status"
    ></div>
  );
};

export default LoadingSpinner;
