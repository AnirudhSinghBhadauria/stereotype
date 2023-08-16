"use client";

import { getStories } from "@/lib/Home/get-stories";
import { StoriesInterface } from "@/utils/interfaces";
import React, { Fragment, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import StroriesContainer from "./stories-container";
import { getStoriesLength } from "@/lib/Home/get-length";
import SiteFooter from "../ui/site-footer";
import LoadingSpinner from "./loading-spinner";

const LoadMore = () => {
  const [stories, setStories] = useState<StoriesInterface[]>([]);
  const [pagesLoaded, setPagesLoaded] = useState(0);
  const [storiesLength, setStoriesLength] = useState<{
    mainStoriesLength: number;
    sideStoriesLength: number;
  }>();

  const { ref, inView } = useInView();

  const newStoriesContainer: StoriesInterface[] = [];

  const loadMoreStories = async () => {
    const nextPage = (pagesLoaded % 10) + 1;
    const newStories = await getStories(nextPage);
    newStoriesContainer.unshift(newStories);

    setStories((prevStories: StoriesInterface[]) => [
      ...prevStories,
      ...newStoriesContainer,
    ]);

    const length: { mainStoriesLength: number; sideStoriesLength: number } =
      await getStoriesLength();

    setStoriesLength(length);
    setPagesLoaded(nextPage);
  };

  useEffect(() => {
    if (inView) {
      loadMoreStories();
    }
  }, [inView]);

  const limit =
    (storiesLength && Math.floor(storiesLength.mainStoriesLength / 2) - 1) ||
    (storiesLength && storiesLength.sideStoriesLength - 1);

  return (
    <Fragment>
      {stories.map(({ mainThumb, sideThumb, feedThumb }) => (
        <StroriesContainer
          mainThumb={mainThumb}
          sideThumb={sideThumb}
          feedThumb={feedThumb}
        />
      ))}

      {pagesLoaded !== limit ? (
        <div
          ref={ref}
          className="primary-container flex flex-row justify-center items-center h-[10rem]"
        >
          <LoadingSpinner />
        </div>
      ) : (
        <SiteFooter />
      )}
    </Fragment>
  );
};

export default LoadMore;
