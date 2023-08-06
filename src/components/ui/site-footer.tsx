import Stereotype from "@/misc/logos/Stereotype";
import { footerNavbar } from "@/utils/navbar";
import Link from "next/link";
import React from "react";

const SiteFooter = () => {
  return (
    <footer className="pb-[70px] pt-[20px] font-gen text-[10px] uppercase leading-[19px] tracking-[0.1em] text-white md:pt-[40px] lg:text-left lg:text-[12px] lg:leading-[21.6px] font-medium flex flex-row justify-center">
      <section className="primary-container w-full flex flex-col">
        <Stereotype fill="white" width={431.1} height={80} className="mb-12" />
        <nav className="max-w-[610px] flex flex-row items-center">
          <ul className="flex flex-row flex-wrap">
            <li>
              <Link
                href="/Contact"
                aria-label="contact us for more information."
                className="hover:underline hover:transition-all hover:ease-in-out underline-offset-2 pr-[8px]"
              >
                contact
              </Link>
            </li>
            {footerNavbar.map(({ text, aria, link }) => (
              <li key={aria} className="pr-[8px]">
                <span className="text-[#3CFFD0] pr-[8px]">/</span>

                <Link
                  href={link}
                  aria-label={aria}
                  className="hover:underline underline-offset-2 hover:transition-all hover:ease-in-out"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </footer>
  );
};

export default SiteFooter;
