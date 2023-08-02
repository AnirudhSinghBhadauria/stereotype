"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface AuthorInterface {
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

const Author = () => {
  const [authorData, setAuthorData] = useState<AuthorInterface | null>(null);
  const pathname = useParams();

  const getAuthorData = async () => {
    const authorData = await fetch("/api/AuthorProfile", {
      cache: "force-cache",
      method: "POST",
      body: JSON.stringify({ author: pathname.author }),
      headers: {
        "Content-application": "application/json",
      },
    });

    const sanitizedAuthor = await authorData.json();

    setAuthorData(sanitizedAuthor.AuthorProfile);
  };

  useEffect(() => {
    getAuthorData();
  }, []);

  return (
    <div>
      {authorData ? (
        <div>
          <p>{authorData.Name}</p>
          <p>{authorData.Designation}</p>
          <p>{authorData.DescriptionOne}</p>
          <p>{authorData.Email}</p>
        </div>
      ) : (
        <p>loading..</p>
      )}
    </div>
  );
};

export default Author;

// This component should look like, and it must be a server component,

// <Suspense fallback = {<Loading />}>
//    <AuthorProfile />
// </Suspense>
// <Suspense fallback = {<Loading />}>
//    <MorePostsByAuthor />
// </Suspense>
