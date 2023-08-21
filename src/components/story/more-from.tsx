import Image from "next/image";
import Link from "next/link";
import React from "react";

const MoreFromSection = () => {
  return (
    <div className="bg-torq-100 flex flex-row justify-center items-center px-[20px] pb-[16px] pt-[30px] lg:pb-[36px] lg:pt-[50px]">
      <div className="primary-container w-full">
        <p className="font-poly text-[18px] font-medium text-black mb-[16px]">
          More stories from{" "}
          <span>
            <Link
              href=""
              aria-label=""
              className="font-semibold hover:underline underline-offset-[2.5px] hover:text-purple-100"
            >
              Tech
            </Link>
          </span>
        </p>

        <section className="w-full">
          <ul>
            <li className="group last-of-type:border-b-0 flex flex-row items-center py-[16px] border-b-[1px] border-[#000]/30">
              <div className="ml-[10px] mr-[20px] aspect-square">
                <div className="w-[60px] h-[60px] rounded-[2px] overflow-hidden">
                  <Link href="" aria-label="">
                    <Image
                      src="https://cdn.sanity.io/images/aftdl3p2/production/775c8f6cecafd3d76e79b00efd7f4c5c8b6293dd-640x640.jpg"
                      alt=""
                      width={640}
                      height={640}
                    />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="group-hover:underline underline-offset-[6px] story-more-underline font-poly text-[22px] font-semibold leading-[1.08] text-black -tracking-[0.01em] lg:text-[34px]">
                  <Link href="" aria-label="">
                    Leaked images reveal Lenovo’s Steam Deck competitor with a
                    hint of the Switch
                  </Link>
                </h3>
              </div>
            </li>
            <li className="group last-of-type:border-b-0 flex flex-row items-center py-[16px] border-b-[1px] border-[#000]/30">
              <div className="ml-[10px] mr-[20px] aspect-square">
                <div className="w-[60px] h-[60px] rounded-[2px] overflow-hidden">
                  <Link href="" aria-label="">
                    <Image
                      src="https://cdn.sanity.io/images/aftdl3p2/production/775c8f6cecafd3d76e79b00efd7f4c5c8b6293dd-640x640.jpg"
                      alt=""
                      width={640}
                      height={640}
                    />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="group-hover:underline underline-offset-[6px] story-more-underline font-poly text-[22px] font-semibold leading-[1.08] text-black -tracking-[0.01em] lg:text-[34px]">
                  <Link href="" aria-label="">
                    Leaked images reveal Lenovo’s Steam Deck competitor with a
                    hint of the Switch
                  </Link>
                </h3>
              </div>
            </li>
            <li className="group last-of-type:border-b-0 flex flex-row items-center py-[16px] border-b-[1px] border-[#000]/30">
              <div className="ml-[10px] mr-[20px] aspect-square">
                <div className="w-[60px] h-[60px] rounded-[2px] overflow-hidden">
                  <Link href="" aria-label="">
                    <Image
                      src="https://cdn.sanity.io/images/aftdl3p2/production/775c8f6cecafd3d76e79b00efd7f4c5c8b6293dd-640x640.jpg"
                      alt=""
                      width={640}
                      height={640}
                    />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="group-hover:underline underline-offset-[6px] story-more-underline font-poly text-[22px] font-semibold leading-[1.08] text-black -tracking-[0.01em] lg:text-[34px]">
                  <Link href="" aria-label="">
                    Leaked images reveal Lenovo’s Steam Deck competitor with a
                    hint of the Switch
                  </Link>
                </h3>
              </div>
            </li>
            <li className="group last-of-type:border-b-0 flex flex-row items-center py-[16px] border-b-[1px] border-[#000]/30">
              <div className="ml-[10px] mr-[20px] aspect-square">
                <div className="w-[60px] h-[60px] rounded-[2px] overflow-hidden">
                  <Link href="" aria-label="">
                    <Image
                      src="https://cdn.sanity.io/images/aftdl3p2/production/775c8f6cecafd3d76e79b00efd7f4c5c8b6293dd-640x640.jpg"
                      alt=""
                      width={640}
                      height={640}
                    />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="group-hover:underline underline-offset-[6px] story-more-underline font-poly text-[22px] font-semibold leading-[1.08] text-black -tracking-[0.01em] lg:text-[34px]">
                  <Link href="" aria-label="">
                    Leaked images reveal Lenovo’s Steam Deck competitor with a
                    hint of the Switch
                  </Link>
                </h3>
              </div>
            </li>
          </ul>
          <p className="font-poly text-[18px] font-medium text-black mt-[16px] mb-[8px]">
            Liked the writing style or content of this author? View more content
            from{" "}
            <span>
              <Link
                href={`/Author/AnirudhBhadauria`}
                aria-label=""
                className="font-semibold hover:underline underline-offset-[2.5px] hover:text-purple-100"
              >
                Anirudh Bhadauria
              </Link>
            </span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default MoreFromSection;
