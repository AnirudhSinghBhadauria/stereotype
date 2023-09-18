"use client";

import React from "react";

const FeedbackForm = () => {
  return (
    <form action="">
      <section className="flex flex-col max-w-[800px] mb-[32px]">
        <label
          htmlFor="name"
          className="font-mono text-[18.25px] text-[#424242] opacity-90"
        >
          First and last name :
        </label>
        <input
          autoComplete="off"
          className="mb-[16px] bg-white border-[1px] border-[#e7e7e8] p-[8px] font-gen text-black text-[14px] tracking-wide font-medium focus:border-purple-200"
          type="text"
          id="name"
          required
        />
        <label
          htmlFor="email"
          className="font-mono text-[18.25px] text-[#424242] opacity-90"
        >
          Email address :
        </label>
        <input
          autoComplete="off"
          className="mb-[16px] bg-white border-[1px] border-[#e7e7e8] p-[8px] font-gen text-black text-[14px] tracking-wide font-medium"
          type="text"
          id="email"
          required
        />

        <label
          htmlFor="feedback"
          className="font-mono text-[18.25px] text-[#424242] opacity-90"
        >
          Your feedback :
        </label>
        <textarea
          id="feedback"
          autoComplete="off"
          className="w-full bg-white p-[10px] border-[1px] border-[#e7e7e8] font-gen text-black text-[14px] tracking-wide font-medium"
          rows={4}
        ></textarea>
      </section>
      <button
        className="bg-purple-100 font-gen text-white py-[8px] px-[32px] uppercase font-black text-[13.5px] tracking-[3px]"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default FeedbackForm;
