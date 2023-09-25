import React from "react";
import LoadingSpinner from "../loading-spinner";
import ReaderStorylineSkeleton from "./reader-storyline-skeleton";
import MainStorySkeleton from "./main-stories-skeleton";
import SideStoriesSkeleton from "./side-stories-skeleton";

const StoriesWrapperSkeleton = ({ className }: { className?: string }) => {
  return (
    <ul className="flex flex-col px-[10px] sm:px-0 w-full md:max-w-[560px] lg:max-w-[1100px]">
      <li
        className={
          `w-full flex flex-col lg:flex-row last-of-type:mb-[0px] sm:mx-auto` +
          className
        }
      >
        <div className="w-full flex-1 flex max-w-[560px] flex-col lg:mr-[100px] mx-auto sm:max-w-[500px]">
          <ReaderStorylineSkeleton />
          <ul>
            <MainStorySkeleton />
            <MainStorySkeleton />
          </ul>
        </div>

        <div className="flex-1 relative">
          <SideStoriesSkeleton />
        </div>
      </li>
    </ul>
  );
};

export default StoriesWrapperSkeleton;
