export interface AuthorInterface {
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
  MainStory: {
    ThumbTitle: string;
    ThumbImageOne: string;
    ThumbImageOneDescription: string;
    Tag: string;
    Slug: string;
    CreatedAt: string;
    Category: { Category: string };
    Author: { Name: string };
  };
  SideStory: {
    Author: { Name: string };
    Category: { Category: string };
    ThumbTitle: string;
    Tag: string;
    ThumbImage: string;
    ThumbImageDescription: string;
    Slug: string;
    CreatedAt: string;
  };
}
