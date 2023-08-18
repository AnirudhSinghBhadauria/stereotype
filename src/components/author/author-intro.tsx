import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import X from "@/misc/logos/author/twitter";
import Tree from "@/misc/logos/author/link";
import Mail from "@/misc/logos/author/email";
import In from "@/misc/logos/author/linkedin";
import { AuthorProfileInterface } from "@/utils/interfaces";
import { getAuthorProfile } from "@/lib/author/get-author-profiles";

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
        <div className="mx-auto grid primary-container auto-cols-max grid-flow-col grid-cols-4 gap-[20px] sm:grid-rows-1 md:grid-cols-7 md:gap-[32px] lg:px-0 pt-[20px] bg-purple-100">
          <div className="col-start-1 col-end-8 row-start-1 w-full lg:col-start-2 lg:row-start-1 z-10">
            <p className="font-mono uppercase text-torq-100 text-[15px] tracking-[0.1em] font-[550] mb-[6px]">
              more Stories by:
            </p>
            <h1 className="font-title font-bold text-[100px] leading-80 tracking-[0.01em] leading-[0.8] text-white md:text-[160px]">
              {Name}
            </h1>
          </div>
        </div>
      </section>
      <div className="h-[60px] w-full author-gradinet"></div>
      <section className="w-full">
        <div className="mx-auto grid primary-container auto-cols-max grid-flow-col grid-cols-4 gap-[20px] sm:grid-rows-1 md:grid-cols-7 md:gap-[32px] lg:px-0 border-b-[1px] border-[#4a4a4a]">
          <section className="self-end sm:row-start-1 sm:mt-[20px] md:self-start w-[130px] h-[130px] rounded-full overflow-hidden">
            <Image src={ProfilePicture} alt={Name} width={512} height={512} />
          </section>
          <section className="col-start-1 col-end-8 w-full md:col-start-2 md:row-start-1">
            <p className="font-mono uppercase text-torq-100 text-[15px] tracking-[0.1em] font-[550] mb-[15px]">
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

            <section className="flex flex-row space-x-[24px] mb-[45px]">
              <Link
                href={`https://mail.google.com/mail/u/0/?hl=en&tf=cm&fs=1&to=${Email}`}
                aria-label={`Write an Email for ${Name}`}
                className="flex flex-row items-center group"
                target="_blank"
              >
                <Mail height="20" width="20" className="fill-[#3CFFD0]" />
                <p className="ml-[12px] font-mono uppercase text-torq-100 text-[15px] tracking-[0.125em] font-semibold hover:underline hover:underline-offset-[4.4px]">
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
                  <X height="20" width="20" className="fill-[#3CFFD0]" />
                  <p className="ml-[12px] font-mono uppercase text-torq-100 text-[15px] tracking-[0.125em] font-semibold hover:underline hover:underline-offset-[4.4px]">
                    Twitter
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
                  <p className="ml-[12px] font-mono uppercase text-torq-100 text-[15px] tracking-[0.125em] font-semibold hover:underline hover:underline-offset-[4.4px]">
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
                  <Tree height="20" width="20" className="fill-[#3CFFD0]" />
                  <p className="ml-[12px] font-mono uppercase text-torq-100 text-[15px] tracking-[0.125em] font-semibold hover:underline hover:underline-offset-[4.4px]">
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
