"use client";

import { copyText } from "@/lib/global/copy-link";
import { getColors } from "@/lib/global/get-colors";
import LinkSvg from "@/misc/svg/link-svg";
import React, { useState } from "react";

const CopyPostLink = ({ text }: { text: string;  }) => {
  const copy = () => {
    copyText(text);
  };
  return (
    <button
      onClick={copy}
      className={`flex flex-row justify-center items-center w-[24px] h-[24px] transition-all ease-linear duration-100 rounded-full text-black bg-white hover:bg-mustard-100`}
    >
      <LinkSvg />
    </button>
  );
};

export default CopyPostLink;
