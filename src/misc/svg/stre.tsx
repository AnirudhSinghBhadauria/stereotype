import React from "react";

const Stere = ({
  className,
}: {
  className: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 276 124"
      className={className}
    >
      <path
        d="M26.72 64.4C12.32 55.2267 5.12 44.2933 5.12 31.6C5.12 22.8533 7.89333 15.5467 13.44 9.68C18.9867 3.81333 26.0267 0.879995 34.56 0.879995C42.88 0.879995 49.8133 3.65333 55.36 9.19999C61.0133 14.7467 63.84 21.5733 63.84 29.68H41.44C41.44 27.44 40.7467 25.52 39.36 23.92C38.08 22.2133 36.48 21.36 34.56 21.36C32.64 21.36 31.04 22.2133 29.76 23.92C28.48 25.52 27.84 27.6 27.84 30.16C27.84 33.5733 29.0133 36.72 31.36 39.6C33.8133 42.3733 38.1867 45.84 44.48 50C52.9067 55.5467 59.2533 61.3067 63.52 67.28C67.8933 73.1467 70.08 80.1333 70.08 88.24C70.08 98.3733 66.9333 106.853 60.64 113.68C54.4533 120.507 46.0267 123.92 35.36 123.92C25.12 123.92 16.8 120.613 10.4 114C4 107.387 0.8 99.28 0.8 89.68H23.52C23.52 93.52 24.64 96.8267 26.88 99.6C29.12 102.267 31.9467 103.6 35.36 103.6C38.9867 103.6 41.8667 102.32 44 99.76C46.1333 97.0933 47.2 93.7867 47.2 89.84C47.2 85.04 45.6 80.8267 42.4 77.2C39.2 73.4667 33.9733 69.2 26.72 64.4ZM89.3375 122V23.6H71.7375V2.79999H145.338V23.6H111.738V122H89.3375ZM156.218 122H121.818V33.2H156.218V53.2H143.098V67.92H153.018V87.12H143.098V103.6H156.218V122ZM164.975 122V2.79999H190.255C200.175 2.79999 208.548 6.05333 215.375 12.56C222.202 18.96 225.615 27.1733 225.615 37.2C225.615 49.04 220.975 58.2133 211.695 64.72L229.455 122H205.775L191.375 71.28H190.255H187.375V122H164.975ZM190.255 51.6C193.775 51.6 196.655 50.3733 198.895 47.92C201.242 45.36 202.415 41.7867 202.415 37.2C202.415 33.04 201.242 29.7333 198.895 27.28C196.655 24.8267 193.775 23.6 190.255 23.6H187.375V51.6H190.255ZM275.451 122H235.131V2.79999H275.451V23.6H257.531V50.96H272.251V71.76H257.531V102.8H275.451V122Z"
      />
      <path
        d="M26.72 64.4L27.9617 62.5237L27.9454 62.5129L27.9289 62.5023L26.72 64.4ZM13.44 9.68L15.075 11.2258L15.075 11.2258L13.44 9.68ZM55.36 9.19999L53.769 10.791L53.7766 10.7986L53.7842 10.8061L55.36 9.19999ZM63.84 29.68V31.93H66.09V29.68H63.84ZM41.44 29.68H39.19V31.93H41.44V29.68ZM39.36 23.92L37.56 25.27L37.6077 25.3336L37.6597 25.3936L39.36 23.92ZM29.76 23.92L31.517 25.3256L31.5389 25.2981L31.56 25.27L29.76 23.92ZM31.36 39.6L29.6157 41.0213L29.6445 41.0566L29.6748 41.0908L31.36 39.6ZM44.48 50L43.2393 51.877L43.2429 51.8794L44.48 50ZM63.52 67.28L61.6891 68.5878L61.7024 68.6064L61.7161 68.6247L63.52 67.28ZM60.64 113.68L58.9857 112.155L58.9792 112.162L58.9728 112.169L60.64 113.68ZM10.4 114L12.0169 112.435L12.0169 112.435L10.4 114ZM0.8 89.68V87.43H-1.45V89.68H0.8ZM23.52 89.68H25.77V87.43H23.52V89.68ZM26.88 99.6L25.1296 101.014L25.1432 101.031L25.1572 101.047L26.88 99.6ZM44 99.76L45.7285 101.2L45.7429 101.183L45.757 101.166L44 99.76ZM42.4 77.2L40.6917 78.6643L40.7022 78.6765L40.7129 78.6886L42.4 77.2ZM27.9289 62.5023C13.9281 53.5833 7.37 43.2693 7.37 31.6H2.87C2.87 45.3174 10.7119 56.87 25.5111 66.2977L27.9289 62.5023ZM7.37 31.6C7.37 23.3758 9.95787 16.6381 15.075 11.2258L11.805 8.13422C5.8288 14.4552 2.87 22.3308 2.87 31.6H7.37ZM15.075 11.2258C20.1702 5.83653 26.6058 3.13 34.56 3.13V-1.37C25.4475 -1.37 17.8031 1.79013 11.805 8.13422L15.075 11.2258ZM34.56 3.13C42.3234 3.13 48.6719 5.69386 53.769 10.791L56.951 7.609C50.9548 1.6128 43.4366 -1.37 34.56 -1.37V3.13ZM53.7842 10.8061C58.995 15.9185 61.59 22.1615 61.59 29.68H66.09C66.09 20.9852 63.0317 13.5748 56.9358 7.59392L53.7842 10.8061ZM63.84 27.43H41.44V31.93H63.84V27.43ZM43.69 29.68C43.69 26.9328 42.8232 24.4805 41.0603 22.4464L37.6597 25.3936C38.6701 26.5594 39.19 27.9472 39.19 29.68H43.69ZM41.16 22.57C39.5094 20.3692 37.2741 19.11 34.56 19.11V23.61C35.6859 23.61 36.6506 24.0574 37.56 25.27L41.16 22.57ZM34.56 19.11C31.8459 19.11 29.6106 20.3692 27.96 22.57L31.56 25.27C32.4694 24.0574 33.4341 23.61 34.56 23.61V19.11ZM28.003 22.5144C26.331 24.6045 25.59 27.2195 25.59 30.16H30.09C30.09 27.9805 30.629 26.4355 31.517 25.3256L28.003 22.5144ZM25.59 30.16C25.59 34.1381 26.9729 37.7778 29.6157 41.0213L33.1043 38.1787C31.0538 35.6622 30.09 33.0086 30.09 30.16H25.59ZM29.6748 41.0908C32.3336 44.0964 36.9146 47.6963 43.2393 51.877L45.7207 48.123C39.4588 43.9837 35.2931 40.6502 33.0452 38.1092L29.6748 41.0908ZM43.2429 51.8794C51.5189 57.3269 57.6315 62.9071 61.6891 68.5878L65.3509 65.9722C60.8752 59.7062 54.2945 53.7665 45.7171 48.1206L43.2429 51.8794ZM61.7161 68.6247C65.7685 74.061 67.83 80.5629 67.83 88.24H72.33C72.33 79.7038 70.0181 72.2323 65.3239 65.9353L61.7161 68.6247ZM67.83 88.24C67.83 97.8644 64.8596 105.783 58.9857 112.155L62.2943 115.205C69.0071 107.923 72.33 98.8823 72.33 88.24H67.83ZM58.9728 112.169C53.2814 118.449 45.5017 121.67 35.36 121.67V126.17C46.5516 126.17 55.6253 122.564 62.3072 115.191L58.9728 112.169ZM35.36 121.67C25.6539 121.67 17.9431 118.559 12.0169 112.435L8.78315 115.565C15.6569 122.668 24.5861 126.17 35.36 126.17V121.67ZM12.0169 112.435C6.04198 106.261 3.05 98.724 3.05 89.68H-1.45C-1.45 99.836 1.95802 108.512 8.78315 115.565L12.0169 112.435ZM0.8 91.93H23.52V87.43H0.8V91.93ZM21.27 89.68C21.27 93.992 22.5406 97.8083 25.1296 101.014L28.6304 98.1862C26.7394 95.8451 25.77 93.048 25.77 89.68H21.27ZM25.1572 101.047C27.8147 104.211 31.2666 105.85 35.36 105.85V101.35C32.6268 101.35 30.4253 100.322 28.6028 98.1528L25.1572 101.047ZM35.36 105.85C39.5874 105.85 43.1266 104.323 45.7285 101.2L42.2715 98.3196C40.6068 100.317 38.3859 101.35 35.36 101.35V105.85ZM45.757 101.166C48.2579 98.0393 49.45 94.2142 49.45 89.84H44.95C44.95 93.3592 44.0087 96.1473 42.243 98.3544L45.757 101.166ZM49.45 89.84C49.45 84.4872 47.6468 79.7456 44.0871 75.7114L40.7129 78.6886C43.5532 81.9077 44.95 85.5928 44.95 89.84H49.45ZM44.1083 75.7357C40.7068 71.7673 35.2774 67.3649 27.9617 62.5237L25.4783 66.2763C32.6692 71.0351 37.6932 75.166 40.6917 78.6643L44.1083 75.7357ZM89.3375 122H87.0875V124.25H89.3375V122ZM89.3375 23.6H91.5875V21.35H89.3375V23.6ZM71.7375 23.6H69.4875V25.85H71.7375V23.6ZM71.7375 2.79999V0.54999H69.4875V2.79999H71.7375ZM145.338 2.79999H147.588V0.54999H145.338V2.79999ZM145.338 23.6V25.85H147.588V23.6H145.338ZM111.738 23.6V21.35H109.488V23.6H111.738ZM111.738 122V124.25H113.988V122H111.738ZM156.218 122V124.25H158.468V122H156.218ZM121.818 122H119.568V124.25H121.818V122ZM121.818 33.2V30.95H119.568V33.2H121.818ZM156.218 33.2H158.468V30.95H156.218V33.2ZM156.218 53.2V55.45H158.468V53.2H156.218ZM143.098 53.2V50.95H140.848V53.2H143.098ZM143.098 67.92H140.848V70.17H143.098V67.92ZM153.018 67.92H155.268V65.67H153.018V67.92ZM153.018 87.12V89.37H155.268V87.12H153.018ZM143.098 87.12V84.87H140.848V87.12H143.098ZM143.098 103.6H140.848V105.85H143.098V103.6ZM156.218 103.6H158.468V101.35H156.218V103.6ZM91.5875 122V23.6H87.0875V122H91.5875ZM89.3375 21.35H71.7375V25.85H89.3375V21.35ZM73.9875 23.6V2.79999H69.4875V23.6H73.9875ZM71.7375 5.04999H145.338V0.54999H71.7375V5.04999ZM143.088 2.79999V23.6H147.588V2.79999H143.088ZM145.338 21.35H111.738V25.85H145.338V21.35ZM109.488 23.6V122H113.988V23.6H109.488ZM111.738 119.75H89.3375V124.25H111.738V119.75ZM156.218 119.75H121.818V124.25H156.218V119.75ZM124.068 122V33.2H119.568V122H124.068ZM121.818 35.45H156.218V30.95H121.818V35.45ZM153.968 33.2V53.2H158.468V33.2H153.968ZM156.218 50.95H143.098V55.45H156.218V50.95ZM140.848 53.2V67.92H145.348V53.2H140.848ZM143.098 70.17H153.018V65.67H143.098V70.17ZM150.768 67.92V87.12H155.268V67.92H150.768ZM153.018 84.87H143.098V89.37H153.018V84.87ZM140.848 87.12V103.6H145.348V87.12H140.848ZM143.098 105.85H156.218V101.35H143.098V105.85ZM153.968 103.6V122H158.468V103.6H153.968ZM164.975 122H162.725V124.25H164.975V122ZM164.975 2.79999V0.54999H162.725V2.79999H164.975ZM215.375 12.56L213.823 14.1887L213.829 14.1951L213.836 14.2015L215.375 12.56ZM211.695 64.72L210.403 62.8777L209.06 63.8195L209.546 65.3863L211.695 64.72ZM229.455 122V124.25H232.508L231.604 121.334L229.455 122ZM205.775 122L203.611 122.615L204.075 124.25H205.775V122ZM191.375 71.28L193.539 70.6655L193.075 69.03H191.375V71.28ZM187.375 71.28V69.03H185.125V71.28H187.375ZM187.375 122V124.25H189.625V122H187.375ZM198.895 47.92L197.236 46.3996L197.233 46.4029L198.895 47.92ZM198.895 27.28L197.233 28.7971L197.251 28.8164L197.269 28.8353L198.895 27.28ZM187.375 23.6V21.35H185.125V23.6H187.375ZM187.375 51.6H185.125V53.85H187.375V51.6ZM167.225 122V2.79999H162.725V122H167.225ZM164.975 5.04999H190.255V0.54999H164.975V5.04999ZM190.255 5.04999C199.63 5.04999 207.438 8.10312 213.823 14.1887L216.927 10.9313C209.659 4.00353 200.72 0.54999 190.255 0.54999V5.04999ZM213.836 14.2015C220.174 20.1432 223.365 27.7455 223.365 37.2H227.865C227.865 26.6011 224.229 17.7768 216.914 10.9185L213.836 14.2015ZM223.365 37.2C223.365 48.3452 219.052 56.814 210.403 62.8777L212.987 66.5623C222.898 59.6126 227.865 49.7347 227.865 37.2H223.365ZM209.546 65.3863L227.306 122.666L231.604 121.334L213.844 64.0537L209.546 65.3863ZM229.455 119.75H205.775V124.25H229.455V119.75ZM207.939 121.385L193.539 70.6655L189.211 71.8945L203.611 122.615L207.939 121.385ZM191.375 69.03H190.255V73.53H191.375V69.03ZM190.255 69.03H187.375V73.53H190.255V69.03ZM185.125 71.28V122H189.625V71.28H185.125ZM187.375 119.75H164.975V124.25H187.375V119.75ZM190.255 53.85C194.365 53.85 197.863 52.3878 200.557 49.4371L197.233 46.4029C195.447 48.3589 193.185 49.35 190.255 49.35V53.85ZM200.554 49.4404C203.389 46.3468 204.665 42.1649 204.665 37.2H200.165C200.165 41.4085 199.094 44.3732 197.236 46.3996L200.554 49.4404ZM204.665 37.2C204.665 32.5984 203.354 28.6868 200.521 25.7247L197.269 28.8353C199.129 30.7798 200.165 33.4816 200.165 37.2H204.665ZM200.557 25.7629C197.863 22.8122 194.365 21.35 190.255 21.35V25.85C193.185 25.85 195.447 26.8411 197.233 28.7971L200.557 25.7629ZM190.255 21.35H187.375V25.85H190.255V21.35ZM185.125 23.6V51.6H189.625V23.6H185.125ZM187.375 53.85H190.255V49.35H187.375V53.85ZM275.451 122V124.25H277.701V122H275.451ZM235.131 122H232.881V124.25H235.131V122ZM235.131 2.79999V0.54999H232.881V2.79999H235.131ZM275.451 2.79999H277.701V0.54999H275.451V2.79999ZM275.451 23.6V25.85H277.701V23.6H275.451ZM257.531 23.6V21.35H255.281V23.6H257.531ZM257.531 50.96H255.281V53.21H257.531V50.96ZM272.251 50.96H274.501V48.71H272.251V50.96ZM272.251 71.76V74.01H274.501V71.76H272.251ZM257.531 71.76V69.51H255.281V71.76H257.531ZM257.531 102.8H255.281V105.05H257.531V102.8ZM275.451 102.8H277.701V100.55H275.451V102.8ZM275.451 119.75H235.131V124.25H275.451V119.75ZM237.381 122V2.79999H232.881V122H237.381ZM235.131 5.04999H275.451V0.54999H235.131V5.04999ZM273.201 2.79999V23.6H277.701V2.79999H273.201ZM275.451 21.35H257.531V25.85H275.451V21.35ZM255.281 23.6V50.96H259.781V23.6H255.281ZM257.531 53.21H272.251V48.71H257.531V53.21ZM270.001 50.96V71.76H274.501V50.96H270.001ZM272.251 69.51H257.531V74.01H272.251V69.51ZM255.281 71.76V102.8H259.781V71.76H255.281ZM257.531 105.05H275.451V100.55H257.531V105.05ZM273.201 102.8V122H277.701V102.8H273.201Z"
      />
    </svg>
  );
};

export default Stere;