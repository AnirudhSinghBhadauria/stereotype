import { Fragment, Suspense } from "react";
import Stereotype from "@/misc/logos/Stereotype";
import Link from "next/link";
import AuthorIntro from "@/components/author/author-intro";
import AuthorIntroSkeleton from "@/components/author/skeleton/author-intro-skeleton";
import AuthorStories from "@/components/author/author-stories";
import AuthorStroySkeleton from "@/components/author/skeleton/author-story-skeleton";
import SiteFooter from "@/components/ui/site-footer";

const Author = async ({ params }: { params: { author: string } }) => {
  return (
    <Fragment>
      <section className="relative pt-[150px] lg:pt-[174px] z-30">
        <div className="absolute top-0 bg-purple-100 w-full pb-[30px]">
          <Link
            href="/"
            aria-label="home button for stereotype"
            title="Stereotype Home"
          >
            <Stereotype className="fill-purple-400 z-40 pl-[9px] h-[50px] w-[270px] md:w-[645.6px] lg:w-[781.5px] md:h-[120px] lg:h-[145px]" />
          </Link>
        </div>

        <section className="w-full flex flex-center justify-center">
          <div className="w-full">
            <Suspense fallback={<AuthorIntroSkeleton />}>
              <AuthorIntro author={params.author} />
            </Suspense>
          </div>
        </section>

        <section className="w-full pt-[28px] lg:pt-[40px] flex flex-row justify-center">
          <div className="max-w-[1100px] mx-[10px] lg:m-0 w-full">
            <Suspense fallback={<AuthorStroySkeleton />}>
              <AuthorStories author={params.author} />
            </Suspense>
          </div>
        </section>
      </section>
      <SiteFooter />
    </Fragment>
  );
};

export default Author;