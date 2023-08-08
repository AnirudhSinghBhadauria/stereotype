import React from "react";
import Link from "next/link";
import { getDate } from "@/lib/global/convert-date";

const AuthorReadsDate = ({
  className,
  slug,
  name,
  reads,
  date,
  ifReads
}: {
  className?: string;
  slug?: string;
  name: string;
  reads?: number;
  date: string;
  ifReads: boolean
}) => {
  return (
    <div className={`flex flex-row ${className}`}>
      <Link
        href={`/Author/${slug}`}
        aria-label={`See ${name}'s Profile.`}
        className="uppercase mr-[8px] leading-[1.2] font-medium font-poly text-[10.79px] tracking-[0.175em] text-torq-100 hover:underline-on-hover-author"
      >
        {name}
      </Link>
      {ifReads && (
        <p className="uppercase mr-[8px] leading-[1.2] font-medium font-poly text-[10.78px] tracking-[0.175em] text-[#949494]">
          {`${reads} READS`}
        </p>
      )}
      <p className="uppercase mr-[8px] leading-[1.2] font-medium font-poly text-[10.78px] tracking-[0.175em] text-[#949494]">
        {getDate(date)}
      </p>
    </div>
  );
};

export default AuthorReadsDate;
