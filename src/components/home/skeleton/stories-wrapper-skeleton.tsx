import React from "react";
import LoadingSpinner from "../loading-spinner";

const StoriesWrapperSkeleton = () => {
  return (
    <div className="flex flex-row w-full h-96 justify-center items-center">
      <LoadingSpinner />
    </div>
  );
};

export default StoriesWrapperSkeleton;
