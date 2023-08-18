"use client";

import Stereotype from "@/misc/logos/Stereotype";
import React from "react";
import Link from "next/link";
import { headerNavbar } from "@/utils/navbar";
import { usePathname } from "next/navigation";

const SiteHeader = () => {
  const pathname = usePathname();

  const color = pathname.slice(0, 6) === "/Story" ? "black" : "white";
  
  return (
    <header className="w-full h-[150px] absolute top-0 left-0 right-0">
      <section className="h-[80px] flex flex-row justify-center items-end">
        <div className="primary-container w-full flex justify-end">
          <nav
            style={{ borderColor: color }}
            className="flex flex-row font-gen pb-[6px] md:pb-[8px] border-b-[1px]
          text-[15px] md:text-[19.25px] font-[450] tracking-[-0.015em] z-50"
          >
            <Link
              href="/"
              aria-label="HomeStereotype"
              className="flex flex-row items-center"
            >
              <Stereotype
                width={107.8}
                height={20}
                fill={color}
                className="hover:opacity-60 hover:transition-all hover:ease-in-out"
              />
            </Link>
            <ul className="flex flex-row">
              {headerNavbar.map(
                ({
                  text,
                  link,
                  aria,
                }: {
                  text: string;
                  link: string;
                  aria: string;
                }) => (
                  <li key={text}>
                    <span
                      style={{ color: color }}
                      className="px-[16px] font-normal"
                    >
                      /
                    </span>
                    <Link
                      style={{ color: color }}
                      href={link}
                      aria-label={aria}
                      className="hover:opacity-50 hover:transition-all hover:ease-in-out"
                    >
                      {text}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      </section>
    </header>
  );
};

export default SiteHeader;
