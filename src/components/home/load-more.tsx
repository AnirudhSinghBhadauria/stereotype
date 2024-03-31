"use client";

import { StoriesInterface } from "@/utils/interfaces";
import React, { Fragment, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import StroriesContainer from "./stories-container";
import { getStoriesLength } from "@/lib/Home/get-length";
import SiteFooter from "../ui/site-footer";
import LoadingSpinner from "./loading-spinner";
import { useParams } from "next/navigation";
import { getLoadMoreStories } from "@/lib/global/get-load-more-stories";
import StoriesWrapperSkeleton from "./skeleton/stories-wrapper-skeleton";

const LoadMore = () => {
  const [stories, setStories] = useState<StoriesInterface[]>([]);
  const [pagesLoaded, setPagesLoaded] = useState(0);
  const [storiesLength, setStoriesLength] = useState<{
    mainStoriesLength: number;
    sideStoriesLength: number;
  }>();

  const { category } = useParams();
  const { ref, inView } = useInView();

  const ifCategory = `${category ? category : ""}`;

  const newStoriesContainer: StoriesInterface[] = [];

  const loadMoreStories = async () => {
    const nextPage = pagesLoaded + 1;
    const newStories = await getLoadMoreStories(nextPage, ifCategory);
    newStoriesContainer.unshift(newStories);

    setStories((prevStories: StoriesInterface[]) => [
      ...prevStories,
      ...newStoriesContainer,
    ]);

    const length: { mainStoriesLength: number; sideStoriesLength: number } =
      await getStoriesLength(ifCategory);

    setStoriesLength(length);
    setPagesLoaded(nextPage);
  };

  useEffect(() => {
    if (inView) {
      loadMoreStories();
    }
  }, [inView]);

  const mainLimit =
  storiesLength && Math.floor(storiesLength.mainStoriesLength / 2) - 1;
  const sideLimit = storiesLength && storiesLength.sideStoriesLength - 1;

  return (
    <Fragment>
      {stories.map(({ mainThumb, sideThumb, feedThumb }) => (
        <StroriesContainer
          key={mainThumb[0].Slug}
          mainThumb={mainThumb}
          sideThumb={sideThumb}
          feedThumb={feedThumb!}
        />
      ))}

      {pagesLoaded !== mainLimit && pagesLoaded !== sideLimit ? (
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
