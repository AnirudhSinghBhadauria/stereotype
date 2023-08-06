import React, { Fragment, Suspense } from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="pt-[174px] primary-container">
      <Link href="/Author/AnirudhBhadauria">Profile</Link>
      <br />
      <Link href="/Tech">Technology</Link>
      <br />
      <Link href="/Review">Review</Link>
      <br />
      <Link href="/News">News</Link>
      <br />
      <Link href="/Entertainment">Entertainment</Link>
    </div>
  );
};

export default Home;
