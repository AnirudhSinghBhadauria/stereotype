import React from "react";

const Stereotype = ({
  width,
  height,
  fill,
  className,
}: {
  width: number;
  height: number;
  fill?: string;
  className?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 809 151"
      className={className}
    >
      <path
        d="M32.565 77.8C15.015 66.62 6.24 53.295 6.24 37.825C6.24 27.165 9.62 18.26 16.38 11.11C23.14 3.95999 31.72 0.384994 42.12 0.384994C52.26 0.384994 60.71 3.76499 67.47 10.525C74.36 17.285 77.805 25.605 77.805 35.485H50.505C50.505 32.755 49.66 30.415 47.97 28.465C46.41 26.385 44.46 25.345 42.12 25.345C39.78 25.345 37.83 26.385 36.27 28.465C34.71 30.415 33.93 32.95 33.93 36.07C33.93 40.23 35.36 44.065 38.22 47.575C41.21 50.955 46.54 55.18 54.21 60.25C64.48 67.01 72.215 74.03 77.415 81.31C82.745 88.46 85.41 96.975 85.41 106.855C85.41 119.205 81.575 129.54 73.905 137.86C66.365 146.18 56.095 150.34 43.095 150.34C30.615 150.34 20.475 146.31 12.675 138.25C4.875 130.19 0.975 120.31 0.975 108.61H28.665C28.665 113.29 30.03 117.32 32.76 120.7C35.49 123.95 38.935 125.575 43.095 125.575C47.515 125.575 51.025 124.015 53.625 120.895C56.225 117.645 57.525 113.615 57.525 108.805C57.525 102.955 55.575 97.82 51.675 93.4C47.775 88.85 41.405 83.65 32.565 77.8ZM108.88 148V28.075H87.4301V2.72499H177.13V28.075H136.18V148H108.88ZM190.39 148H148.465V39.775H190.39V64.15H174.4V82.09H186.49V105.49H174.4V125.575H190.39V148ZM201.063 148V2.72499H231.873C243.963 2.72499 254.168 6.68999 262.488 14.62C270.808 22.42 274.968 32.43 274.968 44.65C274.968 59.08 269.313 70.26 258.003 78.19L279.648 148H250.788L233.238 86.185H231.873H228.363V148H201.063ZM231.873 62.2C236.163 62.2 239.673 60.705 242.403 57.715C245.263 54.595 246.693 50.24 246.693 44.65C246.693 39.58 245.263 35.55 242.403 32.56C239.673 29.57 236.163 28.075 231.873 28.075H228.363V62.2H231.873ZM351.306 148H286.566V2.72499H351.306V28.075H313.866V61.42H337.656V86.77H313.866V124.6H351.306V148ZM481.385 128.695C467.345 143.125 449.86 150.34 428.93 150.34C408 150.34 390.45 143.125 376.28 128.695C362.24 114.135 355.22 96.26 355.22 75.07C355.22 54.01 362.24 36.33 376.28 22.03C390.45 7.59999 408 0.384994 428.93 0.384994C449.86 0.384994 467.345 7.59999 481.385 22.03C495.555 36.33 502.64 54.01 502.64 75.07C502.64 96.26 495.555 114.135 481.385 128.695ZM396.365 110.755C404.945 120.245 415.8 124.99 428.93 124.99C442.06 124.99 452.915 120.245 461.495 110.755C470.075 101.135 474.365 89.24 474.365 75.07C474.365 61.16 470.075 49.46 461.495 39.97C452.915 30.48 442.06 25.735 428.93 25.735C415.8 25.735 404.945 30.48 396.365 39.97C387.785 49.46 383.495 61.16 383.495 75.07C383.495 89.24 387.785 101.135 396.365 110.755ZM528.016 148V28.075H506.566V2.72499H576.766V28.075H555.316V148H528.016ZM609.744 148V57.91L577.764 2.72499H607.404L624.174 32.56L640.164 2.72499H669.804L637.044 59.275V148H609.744ZM676.566 148V2.72499H706.986C719.076 2.72499 729.281 6.81999 737.601 15.01C745.921 23.07 750.081 33.47 750.081 46.21C750.081 59.08 745.921 69.61 737.601 77.8C729.281 85.86 719.076 89.89 706.986 89.89H703.866V148H676.566ZM706.986 64.54C711.276 64.54 714.786 62.915 717.516 59.665C720.376 56.415 721.806 51.93 721.806 46.21C721.806 40.62 720.376 36.2 717.516 32.95C714.786 29.7 711.276 28.075 706.986 28.075H703.866V64.54H706.986ZM808.924 148H759.784V2.72499H808.924V28.075H787.084V61.42H805.024V86.77H787.084V124.6H808.924V148Z"
        fill={fill}
      />
    </svg>
  );
};

export default Stereotype;
