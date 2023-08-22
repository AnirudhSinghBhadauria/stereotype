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

export interface AuthorCardInterface {
  Author: { Name: string; Slug: string };
  Tag: string;
  ThumbTitle: string;
  Reads: number;
  CreatedAt: string;
  Slug: string;
  ThumbImage: string;
  Alt: string;
  category: { Category: string };
  BackgroundColor: string;
  format: string;
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
  BackgroundColor: string;
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
  BackgroundColor: string;
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
  BackgroundColor: string;
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
  BackgroundColor: string;
}

export interface TopStoryCardInterface {
  Author: { Name: string; Slug: string };
  CreatedAt: string;
  Slug: string;
  ThumbImage: string;
  ThumbImageDescription: string;
  ThumbTitle: string;
  Tag: string;
  number: number;
  BackgroundColor: string;
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
  BackgroundColor: string;
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

// Single Stories

export interface SinglePostInterface {
  Author: {
    DescriptionOne: string;
    Name: string;
    Slug: string;
    Instagram?: string;
    Linktree?: string;
    Linkedin?: string;
    Twitter?: string;
  };
  Tag: string;
  Image: string;
  ImageDescription: string;
  Title: string;
  Description: string;
  Reads: string;
  CreatedAt: string;
  category: string;
  format: string;
  slug: string;
  colorName: string;
}

export interface ArticleBodyInterface {
  IntroPara: string;
  ParaTwo: string;
  ParaThree: string;
  ParaFour: string;
  ParaFive?: string;
  ParaSix?: string;
  ParaSeven: string;
  ParaEight: string;
  AsideText: string;
}

export interface LinkPostDataInterface {
  color: string;
  category: string;
  format: string;
  slug: string;
  colorName: string;
  params: string[];
}

export interface MoreStoriesInterface {
  Image: string;
  ImageDescription: string;
  Title: string;
  Slug: string;
  BackgroundColor: string;
  Tag: string;
}
