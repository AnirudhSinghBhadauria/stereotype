"use client";

import { copyText } from "@/lib/global/copy-link";
import React, { ReactNode } from "react";

const CopyPostLink = ({
  text,
  children,
}: {
  text: string;
  children: ReactNode;
}) => {
  const copy = () => {
    copyText(text);
  };
  return (
    <button
      onClick={copy}
    >
      {children}
    </button>
  );
};

export default CopyPostLink;
