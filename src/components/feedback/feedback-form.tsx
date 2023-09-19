"use client";

import React, { useRef, useState } from "react";
import { feedbackSumbit } from "@/actions/feedback-action";
import FeedbackSubmitButton from "./feedback-submit-button";

const FeedbackForm = () => {
  const ref = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<boolean>(false);

  const formStatusHandeler = () => setStatus(false);

  return (
    <form
      ref={ref}
      className="ml-[15px]"
      action={async (formData) => {
        const { status } = await feedbackSumbit(formData);
        ref.current?.reset();

        setStatus(status);
      }}
    >
      <section className="flex flex-col max-w-[800px]">
        <label
          htmlFor="name"
          className="font-mono text-[18.25px] text-[#424242] opacity-80 selection:bg-[#B4D5FF]"
        >
          First and last name :
        </label>
        <input
          autoComplete="off"
          className="mb-[16px] bg-white border-[1px] border-[#e7e7e8] p-[8px] font-gen text-black text-[14px] tracking-wide font-medium focus:border-purple-200 focus:input-shadow selection:bg-[#B4D5FF]"
          type="text"
          id="name"
          name="name"
          required
        />
        <label
          htmlFor="email"
          className="font-mono text-[18.25px] text-[#424242] opacity-80 selection:bg-[#B4D5FF]"
        >
          Email address :
        </label>
        <input
          autoComplete="off"
          className="mb-[16px] bg-white border-[1px] border-[#e7e7e8] p-[8px] font-gen text-black text-[14px] tracking-wide font-medium focus:border-purple-200 focus:input-shadow selection:bg-[#B4D5FF]"
          type="email"
          id="email"
          name="email"
          required
        />

        <label
          htmlFor="feedback"
          className="font-mono text-[18.25px] text-[#424242] opacity-80 selection:bg-[#B4D5FF]"
        >
          Your feedback :
        </label>
        <textarea
          id="feedback"
          name="feedback"
          autoComplete="off"
          className="w-full bg-white p-[10px] border-[1px] border-[#e7e7e8] font-gen text-black text-[14px] tracking-wide font-medium focus:border-purple-200 focus:input-shadow selection:bg-[#B4D5FF]"
          rows={4}
        ></textarea>
      </section>

      <FeedbackSubmitButton
        formStatus={status}
        onFormStatusHandeler={formStatusHandeler}
      />
    </form>
  );
};

export default FeedbackForm;

{
  /* <button
className="flex flex-row justify-center items-center rounded-[5px] font-gen text-[14px] tracking-wide font-medium pl-[32px] pr-[32px]"
type="submit"
>
<p className="translate-y-[-1.2px]">Submit</p>
</button>

<button
type="button"
className="flex flex-row justify-between items-center space-x-16 font-gen text-[14px] tracking-wide font-medium pl-[16px] pr-[32px]"
>
<p className="translate-y-[-1.2px]">Success! We got your feedback, Thank you.</p>
<p className="translate-y-[-2px]">x</p>
</button> */
}
