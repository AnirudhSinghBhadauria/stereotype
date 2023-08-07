import { Suspense } from "react";
import Stereotype from "@/misc/logos/Stereotype";
import Link from "next/link";
import AuthorIntro from "@/components/author/author-intro";
import AuthorIntroSkeleton from "@/components/author/skeleton/author-intro-skeleton";
import AuthorStories from "@/components/author/author-stories";

const Author = async ({ params }: { params: { author: string } }) => {
  return (
    <section className="relative pt-[174px] z-30">
      <div className="absolute top-0 bg-purple-100 w-full pb-[30px]">
        <Link
          href="/"
          aria-label="home button for stereotype"
          title="Stereotype Home"
        >
          <Stereotype
            width={781.5}
            height={145}
            className="fill-purple-400 z-40 pl-[9px]"
          />
        </Link>
      </div>

      <section className="w-full flex flex-center justify-center">
        <div className="w-full">
          <Suspense fallback={<AuthorIntroSkeleton />}>
            <AuthorIntro author={params.author} />
          </Suspense>
        </div>
      </section>

      <section className="w-full py-[40px] flex flex-row justify-center">
        <div className="primary-container w-full">   
            <AuthorStories author={params.author} />
        </div>
      </section>
    </section>
  );
};

export default Author;
