"use client";

import { copyText } from "@/lib/global/copy-link";
import Tree from "@/misc/logos/author/link";
import DoneSvg from "@/misc/svg/done-svg";
import LinkSvg from "@/misc/svg/link-svg";
import React, { ReactNode, useState } from "react";

const CopyPostLink = ({
  text,
  height,
  width,
  className,
  buttonClasses,
}: {
  text: string;
  height: string;
  width: string;
  className?: string;
  buttonClasses: string;
}) => {
  const [isCopy, setIsCopy] = useState<boolean>(false);

  const copy = () => {
    setIsCopy(true);
    copyText(text);

    setTimeout(() => setIsCopy(false), 2000);
  };

  return !isCopy ? (
    <button
      aria-label="Copy post link"
      style={{ height, width }}
      className={buttonClasses}
      onClick={copy}
    >
      {className ? (
        <Tree className={className} height="12.5px" width="12.5px" />
      ) : (
        <LinkSvg />
      )}
    </button>
  ) : (
    <button
      aria-label="Copy post link"
      style={{ height, width }}
      className="flex flex-row justify-center items-center transition-all ease-linear duration-100 rounded-full text-black bg-white"
      onClick={copy}
    >
      <DoneSvg />
    </button>
  );
};

export default CopyPostLink;
