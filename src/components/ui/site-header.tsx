"use client";

import Stereotype from "@/misc/logos/Stereotype";
import React, { Fragment, useState } from "react";
import Link from "next/link";
import { headerNavbar } from "@/utils/navbar";
import { usePathname } from "next/navigation";
import Sidebar from "./sidebar";

const SiteHeader = () => {
  let config: { color: string; position: string } = {
    color: "white",
    position: "flex-end",
  };
  const pathname = usePathname();

  const [sideBarState, setSideBarState] = useState<boolean>(false);

  if (
    pathname.slice(0, 6) === "/About" ||
    pathname.slice(0, 6) === "/Ethic" ||
    pathname.slice(0, 6) === "/Feedb" ||
    pathname.slice(0, 6) === "/Tip-u"
  ) {
    config = {
      color: "black",
      position: "flex-start",
    };
  } else if (pathname.slice(0, 6) === "/Story") {
    config = {
      color: "black",
      position: "flex-end",
    };
  } else {
    config = {
      color: "white",
      position: "flex-end",
    };
  }

  const sideBarHandeler = () => setSideBarState(!sideBarState ? true : false);
  return (
    <Fragment>
      <header
        id="head-er"
        className="hidden md:block w-full h-[150px] absolute top-0 right-0"
      >
        <section className="h-[80px] flex flex-row justify-center items-end">
          <div
            style={{ justifyContent: config.position }}
            className="lg:max-w-[1100px] w-full flex justify-end px-[22px] lg:px-0"
          >
            <nav
              id="nav-bar"
              style={{ borderColor: config.color }}
              className="flex flex-row font-gen pb-[6px] md:pb-[8px] border-b-[1px]
          text-[15px] md:text-[19.25px] font-[450] tracking-[-0.015em] z-50"
            >
              <Link
                href="/"
                aria-label="HomeStereotype"
                className="flex flex-row items-center"
              >
                <Stereotype
                  fill={config.color}
                  className="w-[107.8px] h-[20px] hover:opacity-60 hover:transition-all hover:ease-in-out"
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
                        style={{ color: config.color }}
                        className="px-[16px] font-normal"
                      >
                        /
                      </span>
                      <Link
                        style={{ color: config.color }}
                        href={link}
                        aria-label={aria}
                        className="hover:opacity-50 hover:transition-all hover:ease-in-out"
                      >
                        {text}
                      </Link>
                    </li>
                  )
                )}
                <li>
                  <span
                    style={{ color: config.color }}
                    className="px-[16px] font-normal"
                  >
                    /
                  </span>
                  <button
                    style={{ color: config.color }}
                    className="hover:opacity-50 hover:transition-all hover:ease-in-out"
                    onClick={sideBarHandeler}
                  >
                    More
                    <svg
                      fill={config.color}
                      width="100%"
                      height="100%"
                      viewBox="0 0 28 28"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-[8px] inline-block h-[18px] w-[18px] group-hover:opacity-50 group-hover:transition-all group-hover:ease-in-out translate-y-[-1px]"
                    >
                      <title>Expand</title>
                      <path d="M28 11.76H16.24V0h-4.48v11.76H0v4.48h11.76V28h4.48V16.24H28v-4.48Z"></path>
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </header>

      <header className="block md:hidden absolute top-0 right-0 w-fit h-[48px] px-[20px]">
        <nav className="w-full h-full flex items-end justify-end">
          <button
            style={{ borderColor: config.color }}
            onClick={sideBarHandeler}
            className="group pb-[6px] border-b-[1px] flex items-center cursor-pointer z-10"
          >
            <p
              style={{ color: config.color }}
              className="text-[15px] font-poly group-hover:opacity-50 group-hover:transition-all group-hover:ease-in-out"
            >
              Menu
            </p>
            <svg
              fill={config.color}
              width="100%"
              height="100%"
              viewBox="0 0 28 28"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-[8px] inline-block h-[18px] w-[18px] group-hover:opacity-50 group-hover:transition-all group-hover:ease-in-out"
            >
              <title>Expand</title>
              <path d="M28 11.76H16.24V0h-4.48v11.76H0v4.48h11.76V28h4.48V16.24H28v-4.48Z"></path>
            </svg>
          </button>
        </nav>
      </header>

      <Sidebar onSideBarClose={sideBarHandeler} sideBarState={sideBarState} />
    </Fragment>
  );
};

export default SiteHeader;
