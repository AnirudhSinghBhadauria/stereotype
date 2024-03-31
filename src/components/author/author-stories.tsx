import React, { Fragment, Suspense } from "react";
import { AuthorStoriesInterface } from "@/utils/interfaces";
import StoryCard from "./story-card";
import { getAuthorStories } from "@/lib/author/get-author-stories";

const AuthorStories = async ({ author }: { author: string }) => {
  const AuthorData = await getAuthorStories(author);

  const AuthorStories: AuthorStoriesInterface = AuthorData.AuthorStories;

  const main = AuthorStories.MainStory;
  const side = AuthorStories.SideStory;

  return (
    <Fragment>
      <ul>
        {main.map(
          ({
            Author,
            CreatedAt,
            Slug,
            Tag,
            ThumbImageOne,
            ThumbImageOneDescription,
            ThumbTitle,
            Reads,
            Category,
            BackgroundColor,
          }) => (
            <StoryCard
              key={Slug}
              Author={Author}
              Alt={ThumbImageOneDescription}
              CreatedAt={CreatedAt}
              Slug={Slug}
              Tag={Tag}
              ThumbTitle={ThumbTitle}
              Reads={Reads}
              ThumbImage={ThumbImageOne}
              category={Category}
              BackgroundColor={BackgroundColor}
              format="Main"
            />
          )
        )}

        {side.map(
          ({
            Author,
            CreatedAt,
            Slug,
            Tag,
            ThumbImage,
            ThumbImageDescription,
            ThumbTitle,
            Reads,
            Category,
            BackgroundColor,
          }) => (
            <StoryCard
              key={Slug}
              Author={Author}
              CreatedAt={CreatedAt}
              Slug={Slug}
              Reads={Reads}
              Tag={Tag}
              ThumbTitle={ThumbTitle}
              ThumbImage={ThumbImage}
              Alt={ThumbImageDescription}
              category={Category}
              BackgroundColor={BackgroundColor}
              format="Side"
            />
          )
        )}
      </ul>
    </Fragment>
  );
};

export default AuthorStories;
