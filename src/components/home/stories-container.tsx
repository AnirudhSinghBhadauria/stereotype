import React from "react";
import ReaderStoryline from "./readers-storyline";
import MainStory from "./main-story";
import SideStory from "./side-story";
import {
  MainStoriesThumb,
  SideStoryThumb,
  FeedStatus,
} from "@/utils/interfaces";
import { getDate } from "@/lib/global/convert-date";

const StroriesContainer = ({
  mainThumb,
  sideThumb,
  feedThumb,
}: {
  mainThumb: MainStoriesThumb[];
  sideThumb: SideStoryThumb[];
  feedThumb: FeedStatus;
}) => {
  return (
    <section className="flex flex-row mb-[80px]">
      <div className="flex-1 flex max-w-[560px] flex-col lg:mr-[100px] mx-auto sm:max-w-[500px]">
        <ReaderStoryline
          date={getDate(mainThumb[0].CreatedAt)}
          message={feedThumb.Message}
        />
        <ul>
          {mainThumb.map((post) => (
            <MainStory postProps={post} />
          ))}
        </ul>
      </div>

      <div className="flex-1 relative">
        {sideThumb.map((post) => (
          <SideStory postProps={post} />
        ))}
      </div>
    </section>
  );
};

export default StroriesContainer;
