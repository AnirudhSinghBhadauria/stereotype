import { AuthorInterface } from "@/utils/interfaces";
import Loading from "./loading";
import { Suspense } from "react";

const getAuthorData = async (slug: string) => {
  const authorData = await fetch(`http://localhost:3000/api/Author/${slug}`, {
    method: "GET",
  });

  const sanitizedAuthor = await authorData.json();
  return sanitizedAuthor;
};

const Author = async ({ params }: { params: { author: string } }) => {
  const slug = params.author;

  const AuthorData = await getAuthorData(slug);

  const Author: AuthorInterface = AuthorData.AuthorProfile;

  const { Name, Designation, Email, DescriptionOne, DescriptionTwo } = Author;

  return (
    <Suspense fallback={<Loading />}>
      <div>
        <p>{Name}</p>
        <p>{Designation}</p>
        <p>{Email}</p>
        <p>{DescriptionOne}</p>
        <p>{DescriptionTwo}</p>
      </div>
    </Suspense>
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
