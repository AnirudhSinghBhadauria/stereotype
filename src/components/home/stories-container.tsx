import React from "react";
import ReaderStoryline from "./readers-storyline";
import MainStory from "./main-story";
import SideStory from "./side-story";
import {
  MainStoriesThumb,
  SideStoryThumb,
  FeedStatusInterface,
} from "@/utils/interfaces";
import { getDateTime } from "@/lib/global/convert-date";

const StroriesContainer = ({
  mainThumb,
  sideThumb,
  feedThumb,
}: {
  mainThumb: MainStoriesThumb[];
  sideThumb: SideStoryThumb[];
  feedThumb: FeedStatusInterface;
}) => {
  return (
    <li
      key={mainThumb[0].Slug}
      className="flex flex-col lg:flex-row last-of-type:mb-[0px] mb-[65px] lg:mb-[80px] mx-[10px] sm:mx-auto"
    >
      <div className="flex-1 flex max-w-[560px] flex-col lg:mr-[100px] mx-auto sm:max-w-[500px]">
        <ReaderStoryline
          date={getDateTime(mainThumb[0].CreatedAt.toString())}
          message={feedThumb.Message}
        />
        <ul>
          {mainThumb.map((post) => (
            <MainStory key={post.Slug} postProps={post} />
          ))}
        </ul>
      </div>

      <div className="flex-1 relative">
        {sideThumb.map((post) => (
          <SideStory key={post.Slug} postProps={post} />
        ))}
      </div>
    </li>
  );
};

export default StroriesContainer;
