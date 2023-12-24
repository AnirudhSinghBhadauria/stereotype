"use client";

import { deskNav, mobileNav } from "@/utils/sidebar-links";
import Stereotype from "@/misc/logos/Stereotype";
import StereotypeStroked from "@/misc/logos/stereotype-stroked";
import Link from "next/link";
import React, { ReactPortal, useEffect, useState, Fragment } from "react";
import { createPortal } from "react-dom";

const Modal = ({
  sideBarCloseInvoker,
  sideBarState,
}: {
  sideBarCloseInvoker: () => void;
  sideBarState: boolean;
}) => {
  return (
    <aside
      style={{
        transform: `${sideBarState ? "translateX(0%)" : "translateX(100%)"}`,
      }}
      className="w-[340px] h-screen bg-purple-100 fixed top-0 right-0 transition-all duration-300 ease-in-out py-[24px] pl-[16px] pr-[12px] font-poly"
    >
      <div className="w-full h-full relative">
        <StereotypeStroked
          height="588.5"
          width="110"
          className="-z-10 opacity-20 absolute bottom-0 -right-[10px]"
          fill="black"
        />

        <div className="flex flex-row items-center justify-between mb-[16px]">
          <Stereotype
            fill="white"
            className="w-[161.3px] h-[30px] sm:hover:opacity-60 hover:transition-all hover:ease-in-out"
          />

          <button
            onClick={sideBarCloseInvoker}
            className="curser-pointer hover:opacity-60 hover:transition-all hover:ease-in-out"
          >
            <svg
              className="h-[24px] w-[24px] fill-torq-100 mr-[16px]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Close</title>
              <path d="M12 15.632 4.432 23.2.8 19.568 8.368 12 .8 4.432 4.432.8 12 8.368 19.568.8 23.2 4.432 15.632 12l7.568 7.568-3.632 3.632L12 15.632Z"></path>
            </svg>
          </button>
        </div>

        <nav>
          <ul className="mr-[24px] block md:hidden">
            {mobileNav.map(({ name, path }) => (
              <li
                key={name}
                onClick={sideBarCloseInvoker}
                className="w-full font-medium border-b border-[#3D00BF] px-[8px] py-[12px] text-[33px] text-white hover:opacity-60 hover:transition-all hover:ease-in-out"
              >
                <Link href={path} aria-label={name}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mr-[24px] hidden md:block">
            {deskNav.map(({ name, path }) => (
              <li
                key={name}
                onClick={sideBarCloseInvoker}
                className="w-full font-medium border-b border-[#3D00BF] px-[8px] py-[12px] text-[33px] text-white hover:opacity-60 hover:transition-all hover:ease-in-out"
              >
                <Link href={path} aria-label={name}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

const Sidebar: ({
  sideBarState,
  onSideBarClose,
}: {
  sideBarState: boolean;
  onSideBarClose: () => void;
}) => ReactPortal | null = ({
  sideBarState,
  onSideBarClose,
}: {
  sideBarState: boolean;
  onSideBarClose: () => void;
}) => {
  const [modal, setModal] = useState<boolean>();

  const sideBarClosingHandeler = () => onSideBarClose();

  useEffect(() => {
    const unSub = setModal(true);

    return unSub;
  }, []);

  if (!modal) return null;

  const sideBarRootElement = document.querySelector(
    "#sidebar-portal-root"
  ) as HTMLElement;

  if (sideBarState) {
    sideBarRootElement.style.zIndex = "50";
    document.body.style.overflow = "hidden";
    document.body.classList.add("sidebar-classes");
  } else {
    setTimeout(() => {
      sideBarRootElement.style.zIndex = "-50";
    }, 350);

    document.body.style.overflow = "auto";
    document.body.classList.remove("sidebar-classes");
  }

  return createPortal(
    <Fragment>
      <div
        style={{
          display: `${sideBarState ? "block" : "none"}`,
        }}
        className="w-full h-screen bg-black/40 transition-all duration-1000 ease-in-out"
      ></div>
      <Modal
        sideBarState={sideBarState}
        sideBarCloseInvoker={sideBarClosingHandeler}
      />
    </Fragment>,

    document.querySelector("#sidebar-portal-root") as HTMLElement
  );
};

export default Sidebar;
