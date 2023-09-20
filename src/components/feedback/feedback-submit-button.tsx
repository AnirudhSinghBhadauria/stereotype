import React, { Fragment } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const FeedbackSubmitButton = ({
  formStatus,
  onFormStatusHandeler,
}: {
  formStatus: boolean;
  onFormStatusHandeler: () => void;
}) => {
  const { pending } = useFormStatus();

  let submitButtonStatus = !formStatus ? "block" : "none";
  let messageButtonStatus = formStatus ? "flex" : "none";

  return (
    <Fragment>
      <button
        style={{ display: submitButtonStatus }}
        className="transition-all duration-300 flex flex-row justify-center items-center rounded-[5px] font-gen text-[14px] tracking-wide font-medium py-[8px] pl-[32px] pr-[32px] bg-black text-white space-x-16 mt-[32px] disabled:opacity-80"
        type="submit"
        disabled={pending}
      >
        <p className="transition-all duration-300 translate-y-[-0.8px] sm:translate-y-[-1.2px]">
          {pending ? "Submitting..." : "Submit"}
        </p>
      </button>

      <button
        onClick={() => onFormStatusHandeler()}
        style={{ display: messageButtonStatus }}
        type="button"
        className="transition-all duration-300 flex flex-row justify-between items-center space-x-16 font-gen text-[14px] tracking-wide font-medium pl-[16px] pr-[32px] py-[8px] mt-[32px] rounded-[5px] bg-blue-200 text-black"
      >
        <p className="translate-y-[-0.8px] sm:translate-y-[-1.2px]">
          <span className="hidden sm:inline">Success!&nbsp;&nbsp;</span>We got your feedback, Thank you.
        </p>
        <p className="translate-y-[-2px]">x</p>
      </button>
    </Fragment>
  );
};

export default FeedbackSubmitButton;

