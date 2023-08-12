"use client";

import { copyText } from "@/lib/global/copy-link";
import LinkSvg from "@/misc/svg/link-svg";
import React, { useState } from "react";

const CopyPostLink = ({ text }: { text: string }) => {
  const [bgColor, setBgColor] = useState<string>("bg-[#fff]");

  const copy = () => {
    copyText(text);
    setBgColor("bg-[#d6f31f]");

    setTimeout(() => {
      setBgColor("bg-[#fff]");
    }, 1250);
  };
  return (
    <button
      onClick={copy}
      className={`flex flex-row justify-center items-center w-[24px] h-[24px] transition-all ease-linear duration-100 rounded-full text-black ${bgColor}`}
    >
      <LinkSvg />
    </button>
  );
};

export default CopyPostLink;
