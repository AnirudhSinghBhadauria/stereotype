import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import X from "@/misc/logos/author/twitter";
import Mail from "@/misc/logos/author/email";
import In from "@/misc/logos/author/linkedin";
import { AuthorProfileInterface } from "@/utils/interfaces";
import { getAuthorProfile } from "@/lib/author/get-author-profiles";
import LinkTree from "@/misc/logos/author/link-tree";

const AuthorIntro = async ({ author }: { author: string }) => {
  const AuthorData = await getAuthorProfile(author);

  const Author: AuthorProfileInterface = AuthorData.AuthorProfile;

  const {
    Name,
    DescriptionOne,
    DescriptionTwo,
    Designation,
    Email,
    Linkedin,
    Linktree,
    ProfilePicture,
    Twitter,
  } = Author;

  return (
    <Fragment>
      <section className="w-full bg-purple-100 pt-[10px]">
        <div className="mx-auto grid max-w-[1100px] auto-cols-max grid-flow-col grid-cols-4 gap-[20px] sm:grid-rows-1 md:grid-cols-7 md:gap-[32px] lg:px-0 pt-[20px] px-[20px] bg-purple-100">
          <div className="col-start-1 col-end-8 row-start-1 w-full lg:col-start-2 lg:row-start-1 z-10">
            <p className="font-mono uppercase text-torq-100 text-[15px] tracking-[0.1em] font-[700] sm:font-[550] mb-[6px]">
              more Stories by:
            </p>
            <h1 className="font-title font-extrabold text-[90px] leading-80 tracking-[0em] leading-[0.8] text-white md:text-[140px] lg:text-[150px]">
              {Name}
            </h1>
          </div>
        </div>
      </section>

      <div className="h-[60px] w-full author-gradinet"></div>

      <section className="w-full -mt-[40px]">
        <div className="overflow-hidden w-full grid md:hidden grid-cols-4 gap-[20px] pl-[20px] pr-[80px] pt-[10px]">
          <section className="col-start-1 w-full h-full overflow-hidden rounded-full">
            <Image src={ProfilePicture} alt={Name} width={512} height={512} />
          </section>
          <section className="col-span-3 col-start-2 flex items-end">
            <p className="min-w-[400px] font-mono uppercase text-torq-100 text-[15px] tracking-[0.1em] font-[700] sm:font-[550]">
              {Designation}
            </p>
          </section>
        </div>

        <div className="mt-[20px] w-[90%] mx-auto h-[1px] bg-[#4a4a4a] md:hidden"></div>

        <div className="mx-auto grid max-w-[1100px] auto-cols-max grid-flow-col grid-cols-4 sm:grid-rows-1 md:grid-cols-7 md:gap-[32px] p-[20px] lg:px-0 md:border-b-[1px] border-[#4a4a4a]">
          <section className="hidden md:block self-end sm:row-start-1 sm:mt-[20px] md:self-start w-full h-auto rounded-full overflow-hidden">
            <Image src={ProfilePicture} alt={Name} width={512} height={512} />
          </section>
          <section className="col-start-1 col-end-8 w-full md:col-start-2 md:row-start-1">
            <p className="hidden md:block font-mono uppercase text-torq-100 text-[15px] tracking-[0.1em] font-[550] mb-[15px]">
              {Designation}
            </p>
            <div className="mb-[20px]">
              <p className="font-sans mb-[23px] text-[19px] font-normal leading-[1.5] text-white md:text-[22px] md:leading-[1.3]">
                {DescriptionOne}
              </p>
              {DescriptionTwo && (
                <p className="font-sans mb-[20px] text-[19px] font-normal leading-[1.5] text-white md:text-[22px] md:leading-[1.3]">
                  {DescriptionTwo}
                </p>
              )}
            </div>

            <section className="flex flex-row space-x-[24px] md:mb-[20px] w-full py-[16px] border-b-[1px] border-t-[1px] border-[#4a4a4a] md:py-0 md:border-t-0 md:border-b-0">
              <Link
                href={`https://mail.google.com/mail/u/0/?hl=en&tf=cm&fs=1&to=${Email}`}
                aria-label={`Write an Email for ${Name}`}
                className="flex flex-row items-center group"
                target="_blank"
              >
                <Mail height="20" width="20" className="fill-[#3CFFD0]" />
                <p className="ml-[12px] font-mono uppercase text-torq-100 text-[15px] tracking-[0.125em] font-semibold hover:underline hover:underline-offset-[4.4px] hidden lg:block">
                  {Email}
                </p>
              </Link>
              {Twitter && (
                <Link
                  href={Twitter}
                  aria-label={`${Name}'s Twitter Account.`}
                  className="flex flex-row items-center group"
                  target="_blank"
                >
                  <X height="19.5" width="19.5" className="fill-[#3CFFD0]" />
                  <p className="ml-[12px] font-mono uppercase text-torq-100 text-[15px] tracking-[0.125em] font-semibold hover:underline hover:underline-offset-[4.4px] hidden lg:block">
                    Twitter-X
                  </p>
                </Link>
              )}

              {Linkedin && (
                <Link
                  href={Linkedin}
                  aria-label={`${Name}'s Linkedin Account.`}
                  className="flex flex-row items-center group"
                  target="_blank"
                >
                  <In height="19" width="18" className="fill-[#3CFFD0]" />
                  <p className="ml-[12px] font-mono uppercase text-torq-100 text-[15px] tracking-[0.125em] font-semibold hover:underline hover:underline-offset-[4.4px] hidden lg:block">
                    Linkedin
                  </p>
                </Link>
              )}
              {Linktree && (
                <Link
                  href={Linktree}
                  aria-label={`${Name}'s Linktree.`}
                  className="flex flex-row items-center group"
                  target="_blank"
                >
                  <LinkTree height="18.65" width="18" className="fill-[#3CFFD0]" />
                  <p className="ml-[12px] font-mono uppercase text-torq-100 text-[15px] tracking-[0.125em] font-semibold hover:underline hover:underline-offset-[4.4px] hidden lg:block">
                    Linktree
                  </p>
                </Link>
              )}
            </section>
          </section>
        </div>
      </section>
    </Fragment>
  );
};

export default AuthorIntro;
