"use client";

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
    <div
      style={{
        transform: `${sideBarState ? "translateX(0%)" : "translateX(100%)"}`,
      }}
      className="w-[340px] h-screen bg-purple-100 absolute top-0 right-0 transition-all duration-300 ease-in-out"
    >
      <button onClick={sideBarCloseInvoker}>Close</button>
    </div>
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
    document.body.style.paddingRight = "16px";
  } else {
    setTimeout(() => {
      sideBarRootElement.style.zIndex = "-50";
    }, 350);

    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0px";
  }

  return createPortal(
    <Fragment>
      <div
        style={{ display: `${sideBarState ? "block" : "none"}` }}
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
