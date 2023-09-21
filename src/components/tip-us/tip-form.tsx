"use client";

import React, { useRef, useState } from "react";
import { tipusSumbit } from "@/actions/tipus-action";
import TipSubmitButton from "./tipus-submit-form";

const TipUsForm = () => {
  const ref = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const formStatusHandeler = () => setStatus(false);

  const errorHandeler = () => setError(false);

  return (
    <form
      ref={ref}
      className="lg:ml-[15px] sm:mr-[163px] md:mr-[230px]"
      action={async (formData) => {
        const { status, error } = await tipusSumbit(formData);

        if (!error) {
          setStatus(status);
          ref.current?.reset();
        } else {
          setError(error);
        }
      }}
    >
      <section className="flex flex-col max-w-[800px]">
        <div className="w-full">
          <h2 className="text-[#424242] font-[900] text-[29.35px] font-poly tracking-[0.02em] mt-[54px] mb-[16px] selection:bg-[#B4D5FF] leading-[1.35] sm:leading-normal">
            Pitch us your story
          </h2>
        </div>
        <label
          htmlFor="summarize"
          className="font-mono text-[15.75px] sm:text-[17px] md:text-[18px] lg:text-[18.25px] text-[#424242] opacity-80 selection:bg-[#B4D5FF]"
        >
          Summarize your story in one sentence :
        </label>
        <input
          autoComplete="off"
          className="w-full mb-[16px] bg-white border-[1px] border-[#e7e7e8] p-[8px] font-gen text-black text-[14px] tracking-wide font-medium focus:border-purple-200 focus:input-shadow selection:bg-[#B4D5FF]"
          type="text"
          id="summarize"
          name="summarize"
          required
        />
        <label
          htmlFor="explain"
          className="font-mono text-[15.75px] sm:text-[17px] md:text-[18px] lg:text-[18.25px] text-[#424242] opacity-80 selection:bg-[#B4D5FF]"
        >
          Explain your story in detail :
        </label>
        <textarea
          id="explain"
          name="explain"
          autoComplete="off"
          required
          className="w-full bg-white p-[10px] border-[1px] border-[#e7e7e8] font-gen text-black text-[14px] tracking-wide font-medium focus:border-purple-200 focus:input-shadow selection:bg-[#B4D5FF]"
          rows={2}
        ></textarea>

        <div className="w-full">
          <h2 className="text-[#424242] font-[900] text-[29.35px] font-poly tracking-[0.02em] mt-[54px] mb-[16px] selection:bg-[#B4D5FF] leading-[1.35] sm:leading-normal">
            Tell us about you
          </h2>
        </div>
        <label
          htmlFor="name"
          className="font-mono text-[15.75px] sm:text-[17px] md:text-[18px] lg:text-[18.25px] text-[#424242] opacity-80 selection:bg-[#B4D5FF]"
        >
          First and last name :
        </label>
        <input
          autoComplete="off"
          className="w-full mb-[16px] bg-white border-[1px] border-[#e7e7e8] p-[8px] font-gen text-black text-[14px] tracking-wide font-medium focus:border-purple-200 focus:input-shadow selection:bg-[#B4D5FF]"
          type="text"
          id="name"
          name="name"
          required
        />
        <label
          htmlFor="email"
          className="font-mono text-[15.75px] sm:text-[17px] md:text-[18px] lg:text-[18.25px] text-[#424242] opacity-80 selection:bg-[#B4D5FF]"
        >
          Email address :
        </label>
        <input
          autoComplete="off"
          className="w-full mb-[16px] bg-white border-[1px] border-[#e7e7e8] p-[8px] font-gen text-black text-[14px] tracking-wide font-medium focus:border-purple-200 focus:input-shadow selection:bg-[#B4D5FF]"
          type="email"
          id="email"
          name="email"
          required
        />
      </section>

      {!error ? (
        <TipSubmitButton
          formStatus={status}
          onFormStatusHandeler={formStatusHandeler}
        />
      ) : (
        <div
          onClick={errorHandeler}
          className="transition-all duration-300 flex flex-row justify-between items-center space-x-16 font-gen text-[14px] tracking-wide font-medium pl-[16px] pr-[32px] py-[8px] mt-[32px] rounded-[5px] bg-red-200 text-black w-fit cursor-pointer"
        >
          <p className="translate-y-[-0.8px] sm:translate-y-[-1.2px]">
            <span className="hidden sm:inline">Error!&nbsp;&nbsp;</span>We
            apologize for this disruption.
          </p>
          <p className="translate-y-[-2px]">x</p>
        </div>
      )}
    </form>
  );
};

export default TipUsForm;
