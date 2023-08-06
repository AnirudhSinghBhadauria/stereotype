import React, { Fragment } from "react";

const AuthorIntroSkeleton = () => {
  return (
    <section className="w-full flex flex-center justify-center">
      <div className="primary-container">
        <p className="py-20">loading...</p>
      </div>
    </section>
  );
};

export default AuthorIntroSkeleton;
