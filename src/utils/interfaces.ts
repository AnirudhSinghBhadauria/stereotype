// Author---------------------

export interface AuthorProfileInterface {
  Name: string;
  DescriptionOne: string;
  DescriptionTwo: string;
  Email: string;
  Linkedin: string;
  Linktree: string;
  ProfilePicture: string;
  Designation: string;
  Instagram: string;
  Twitter: string;
}

export interface AuthorStoriesInterface {
  MainStory: MainStoriesThumbForAuthor[];
  SideStory: SideStoriesThumbForAuthor[];
}

interface MainStoriesThumbForAuthor {
  ThumbTitle: string;
  ThumbImageOne: string;
  ThumbImageOneDescription: string;
  Tag: string;
  Slug: string;
  CreatedAt: string;
  Category: { Category: string };
  Author: { Name: string; Slug: string };
  Reads: number;
}

interface SideStoriesThumbForAuthor {
  Author: { Name: string; Slug: string };
  Category: { Category: string };
  ThumbTitle: string;
  Tag: string;
  ThumbImage: string;
  ThumbImageDescription: string;
  Slug: string;
  CreatedAt: string;
  Reads: number;
}

// Headlines---------------------

export interface HeadlineInterface {
  Author: { Name: string; Slug: string };
  CreatedAt: string;
  ThumbTitle: string;
  ThumbDescription: string;
  ThumbImage: string;
  ThumbImageDescription: string;
  Reads: number;
  Slug: string;
  Category: { Category: string };
  Tag: string;
}

// TopStories---------------------

export interface TopStoryInterface {
  Author: { Name: string; Slug: string };
  CreatedAt: string;
  ThumbImageDescription: string;
  ThumbImage: string;
  ThumbTitle: string;
  Tag: string;
  Slug: string;
  Category: { Category: string };
}

// GlobalStories ------------------

export interface MainStoriesThumb {
  Author: { Name: string; Slug: string };
  Category: { Category: string };
  Slug: string;
  CreatedAt: string;
  ThumbTitle: string;
  ThumbDescription: string;
  ThumbImageOne: string;
  ThumbImageTwo: string;
  ThumbImageOneDescription: string;
  ThumbImageTwoDescription: string;
  Summary: string;
  SummaryHighlighted: string;
  Reads: number;
  Tag: string;
}

export interface SideStoryThumb {
  ThumbTitle: string;
  ThumbDescriptionOne: string;
  ThumbDescriptionTwo: string;
  ThumbImage: string;
  ThumbImageDescription: string;
  BackgroundColor: string;
  Reads: number;
  Slug: string;
  Category: { Category: string };
  Author: { Name: string; Slug: string };
  CreatedAt: string;
  Tag: string;
}

export interface FeedStatus {
  LastRefreshed: string;
  Message: string;
}

export interface StoriesInterface {
  mainThumb: MainStoriesThumb[];
  sideThumb: SideStoryThumb[];
  feedThumb: FeedStatus;
}
