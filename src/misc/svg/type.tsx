import React from "react";

const Type = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 249 120"
      className={className}
    >
      <path d="M18.4 120V21.6H0.8V0.79999H58.4V21.6H40.8V120H18.4ZM85.4588 120V46.08L59.2188 0.79999H83.5388L97.2988 25.28L110.419 0.79999H134.739L107.859 47.2V120H85.4588ZM140.288 120V0.79999H165.248C175.168 0.79999 183.541 4.15999 190.368 10.88C197.194 17.4933 200.608 26.0267 200.608 36.48C200.608 47.04 197.194 55.68 190.368 62.4C183.541 69.0133 175.168 72.32 165.248 72.32H162.688V120H140.288ZM165.248 51.52C168.768 51.52 171.648 50.1867 173.888 47.52C176.234 44.8533 177.408 41.1733 177.408 36.48C177.408 31.8933 176.234 28.2667 173.888 25.6C171.648 22.9333 168.768 21.6 165.248 21.6H162.688V51.52H165.248ZM248.889 120H208.569V0.79999H248.889V21.6H230.969V48.96H245.689V69.76H230.969V100.8H248.889V120Z" />
      <path d="M18.4 120H16.15V122.25H18.4V120ZM18.4 21.6H20.65V19.35H18.4V21.6ZM0.8 21.6H-1.45V23.85H0.8V21.6ZM0.8 0.79999V-1.45001H-1.45V0.79999H0.8ZM58.4 0.79999H60.65V-1.45001H58.4V0.79999ZM58.4 21.6V23.85H60.65V21.6H58.4ZM40.8 21.6V19.35H38.55V21.6H40.8ZM40.8 120V122.25H43.05V120H40.8ZM20.65 120V21.6H16.15V120H20.65ZM18.4 19.35H0.8V23.85H18.4V19.35ZM3.05 21.6V0.79999H-1.45V21.6H3.05ZM0.8 3.04999H58.4V-1.45001H0.8V3.04999ZM56.15 0.79999V21.6H60.65V0.79999H56.15ZM58.4 19.35H40.8V23.85H58.4V19.35ZM38.55 21.6V120H43.05V21.6H38.55ZM40.8 117.75H18.4V122.25H40.8V117.75ZM85.4588 120H83.2088V122.25H85.4588V120ZM85.4588 46.08H87.7088V45.4752L87.4055 44.9519L85.4588 46.08ZM59.2188 0.79999V-1.45001H55.3144L57.272 1.92813L59.2188 0.79999ZM83.5388 0.79999L85.5001 -0.302489L84.8551 -1.45001H83.5388V0.79999ZM97.2988 25.28L95.3374 26.3825L97.3457 29.9555L99.2819 26.3429L97.2988 25.28ZM110.419 0.79999V-1.45001H109.072L108.436 -0.262868L110.419 0.79999ZM134.739 0.79999L136.686 1.92785L138.642 -1.45001H134.739V0.79999ZM107.859 47.2L105.912 46.0721L105.609 46.5953V47.2H107.859ZM107.859 120V122.25H110.109V120H107.859ZM87.7088 120V46.08H83.2088V120H87.7088ZM87.4055 44.9519L61.1655 -0.328155L57.272 1.92813L83.512 47.2081L87.4055 44.9519ZM59.2188 3.04999H83.5388V-1.45001H59.2188V3.04999ZM81.5774 1.90247L95.3374 26.3825L99.2601 24.1775L85.5001 -0.302489L81.5774 1.90247ZM99.2819 26.3429L112.402 1.86285L108.436 -0.262868L95.3156 24.2171L99.2819 26.3429ZM110.419 3.04999H134.739V-1.45001H110.419V3.04999ZM132.792 -0.327871L105.912 46.0721L109.806 48.3279L136.686 1.92785L132.792 -0.327871ZM105.609 47.2V120H110.109V47.2H105.609ZM107.859 117.75H85.4588V122.25H107.859V117.75ZM140.288 120H138.038V122.25H140.288V120ZM140.288 0.79999V-1.45001H138.038V0.79999H140.288ZM190.368 10.88L188.789 12.4835L188.796 12.4898L188.802 12.496L190.368 10.88ZM190.368 62.4L191.933 64.016L191.94 64.0098L191.946 64.0035L190.368 62.4ZM162.688 72.32V70.07H160.438V72.32H162.688ZM162.688 120V122.25H164.938V120H162.688ZM173.888 47.52L172.198 46.0336L172.181 46.053L172.165 46.0728L173.888 47.52ZM173.888 25.6L172.165 27.0472L172.181 27.067L172.198 27.0864L173.888 25.6ZM162.688 21.6V19.35H160.438V21.6H162.688ZM162.688 51.52H160.438V53.77H162.688V51.52ZM142.538 120V0.79999H138.038V120H142.538ZM140.288 3.04999H165.248V-1.45001H140.288V3.04999ZM165.248 3.04999C174.6 3.04999 182.4 6.19391 188.789 12.4835L191.946 9.27653C184.682 2.12607 175.735 -1.45001 165.248 -1.45001V3.04999ZM188.802 12.496C195.145 18.641 198.358 26.5687 198.358 36.48H202.858C202.858 25.4847 199.243 16.3457 191.933 9.26395L188.802 12.496ZM198.358 36.48C198.358 46.5051 195.14 54.5449 188.789 60.7965L191.946 64.0035C199.248 56.8151 202.858 47.5749 202.858 36.48H198.358ZM188.802 60.784C182.415 66.9714 174.611 70.07 165.248 70.07V74.57C175.724 74.57 184.667 71.0553 191.933 64.016L188.802 60.784ZM165.248 70.07H162.688V74.57H165.248V70.07ZM160.438 72.32V120H164.938V72.32H160.438ZM162.688 117.75H140.288V122.25H162.688V117.75ZM165.248 53.77C169.424 53.77 172.938 52.1491 175.61 48.9672L172.165 46.0728C170.357 48.2243 168.111 49.27 165.248 49.27V53.77ZM175.577 49.0064C178.388 45.8121 179.658 41.5417 179.658 36.48H175.158C175.158 40.8049 174.081 43.8946 172.198 46.0336L175.577 49.0064ZM179.658 36.48C179.658 31.5095 178.38 27.299 175.577 24.1136L172.198 27.0864C174.089 29.2343 175.158 32.2772 175.158 36.48H179.658ZM175.61 24.1528C172.938 20.9709 169.424 19.35 165.248 19.35V23.85C168.111 23.85 170.357 24.8957 172.165 27.0472L175.61 24.1528ZM165.248 19.35H162.688V23.85H165.248V19.35ZM160.438 21.6V51.52H164.938V21.6H160.438ZM162.688 53.77H165.248V49.27H162.688V53.77ZM248.889 120V122.25H251.139V120H248.889ZM208.569 120H206.319V122.25H208.569V120ZM208.569 0.79999V-1.45001H206.319V0.79999H208.569ZM248.889 0.79999H251.139V-1.45001H248.889V0.79999ZM248.889 21.6V23.85H251.139V21.6H248.889ZM230.969 21.6V19.35H228.719V21.6H230.969ZM230.969 48.96H228.719V51.21H230.969V48.96ZM245.689 48.96H247.939V46.71H245.689V48.96ZM245.689 69.76V72.01H247.939V69.76H245.689ZM230.969 69.76V67.51H228.719V69.76H230.969ZM230.969 100.8H228.719V103.05H230.969V100.8ZM248.889 100.8H251.139V98.55H248.889V100.8ZM248.889 117.75H208.569V122.25H248.889V117.75ZM210.819 120V0.79999H206.319V120H210.819ZM208.569 3.04999H248.889V-1.45001H208.569V3.04999ZM246.639 0.79999V21.6H251.139V0.79999H246.639ZM248.889 19.35H230.969V23.85H248.889V19.35ZM228.719 21.6V48.96H233.219V21.6H228.719ZM230.969 51.21H245.689V46.71H230.969V51.21ZM243.439 48.96V69.76H247.939V48.96H243.439ZM245.689 67.51H230.969V72.01H245.689V67.51ZM228.719 69.76V100.8H233.219V69.76H228.719ZM230.969 103.05H248.889V98.55H230.969V103.05ZM246.639 100.8V120H251.139V100.8H246.639Z" />
    </svg>
  );
};

export default Type;