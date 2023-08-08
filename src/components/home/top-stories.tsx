import React from "react";
import StoryCard from "./story-card";

const TopStories = () => {
  return (
    <ol className="flex flex-col">
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
    </ol>
  );
};

export default TopStories;
