import React from "react";
import Link from "next/link";

const AuthorReadsDate = ({
  className,
  slug,
  name,
  reads,
  date,
  ifReads,
}: {
  className?: string;
  slug?: string;
  name: string;
  reads?: number;
  date: string;
  ifReads: boolean;
}) => {
  return (
    <div className={`flex flex-row ${className}`}>
      <Link
        href={`/Author/${slug}`}
        aria-label={`See ${name}'s Profile.`}
        className="mr-[8px] primary-small-torq-11px hover:underline-on-hover-author"
      >
        {name}
      </Link>
      {ifReads && (
        <p className="mr-[8px] primary-small-gray-11px hidden sm:inline">
          {`${reads} READS`}
        </p>
      )}
      <p className="primary-small-gray-11px">{date}</p>
    </div>
  );
};

export default AuthorReadsDate;
