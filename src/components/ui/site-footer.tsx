import Stereotype from "@/misc/logos/Stereotype";
import { footerNavbar } from "@/utils/navbar";
import Link from "next/link";
import React from "react";

const SiteFooter = () => {
  return (
    <footer className="md:ml-[30px] lg:ml-[0px] font-gen text-[10px] uppercase leading-[19px] tracking-[0.1em] text-white pt-[80px] pb-[85px] lg:text-left lg:text-[12px] lg:leading-[21.6px] font-medium flex flex-row justify-center">
      <section className="mx-auto max-w-[1100px] w-full flex flex-col items-center md:items-start">
        <Stereotype fill="white" className="mb-[34px] lg:mb-12 h-[46.6px] md:h-[80px] w-[250px] md:w-[431.1px]" />
        <nav className="max-w-[615px] flex flex-row items-center">
          <ul className="flex flex-row flex-wrap pl-[18px] justify-center md:justify-start">
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