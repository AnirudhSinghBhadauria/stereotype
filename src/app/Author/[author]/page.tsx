import { AuthorInterface } from "@/utils/interfaces";
import { Suspense } from "react";
import Stereotype from "@/misc/logos/Stereotype";
import Link from "next/link";
import AuthorLoading from "./loading";

const getAuthorData = async (slug: string) => {
  const authorData = await fetch(`http://localhost:3000/api/Author/${slug}`, {
    method: "GET",
  });

  if (!authorData.ok) {
    throw new Error("this is an Error message, be aware.");
  }

  const sanitizedAuthor = await authorData.json();

  return sanitizedAuthor;
};

const Author = async ({ params }: { params: { author: string } }) => {
  const slug = params.author;

  const AuthorData = await getAuthorData(slug);

  const Author: AuthorInterface = AuthorData.AuthorProfile;

  const { Name, Designation, Email, DescriptionOne, DescriptionTwo } = Author;
  return (
    <section className="relative pt-[174px] bg-purple-100 z-30">
      <Link
        href="/"
        aria-label="home button for stereotype"
        title="Stereotype Home"
      >
        <Stereotype
          width={809}
          height={150}
          className="absolute top-0 left-2 fill-purple-400 z-40"
        />
      </Link>

      <Suspense fallback={<AuthorLoading />}>
        <p>{Name}</p>
        <p>{Designation}</p>
        <p>{Email}</p>
        <p>{DescriptionOne}</p>
        <p>{DescriptionTwo}</p>
      </Suspense>
    </section>
  );
};

export default Author;
