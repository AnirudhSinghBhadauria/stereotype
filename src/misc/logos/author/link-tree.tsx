import React from "react";

const LinkTree = ({
  width,
  height,
  className,
}: {
  width: string;
  height: string;
  className: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 17 20"
    >
      <path
        d="M6.68728 13.468H9.58008V20H6.68728V13.468ZM0 6.77295H4.92224L1.42301 3.437L3.35926 1.44632L6.69517 4.87555V0H9.58781V4.87555L12.9237 1.45413L14.8584 3.437L11.3608 6.76514H16.2815V9.51784H11.3327L14.8538 12.9393L12.9237 14.8834L8.14149 10.0777L3.35926 14.8834L1.42301 12.9471L4.94551 9.52565H0V6.77295Z"
        className={className}
      />
    </svg>
  );
};

export default LinkTree;


// h20 w17 1.17