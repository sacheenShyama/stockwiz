import React from "react";

const Background = ({ children }) => {
  return (
    <div
      className="relative container rounded-t-[12px] m-auto mt-4 rounded-b-[48px]  text-white"
      style={{
        fontFamily: "Arial, sans-serif",
        background: `
          linear-gradient(to right,
            #0E0E0E 0%,
            rgba(34,180,0,0.6) 35%,
            rgba(253,203,21,0.6) 50%,
            #0E0E0E 100%
          ) top / 100% 15% no-repeat,
          linear-gradient(to right,
            #0E0E0E 0%,
            #0E0E0E 100%
          ) center / 100% 70% no-repeat,
          linear-gradient(to right,
            #0E0E0E 0%,
            rgba(34,180,0,0.6) 35%,
            rgba(253,203,21,0.6) 50%,
            #0E0E0E 100%
          ) bottom / 100% 15% no-repeat,
          #0E0E0E
        `,
        overflowX: "hidden",
      }}
    >
      <div className="absolute inset-0 backdrop-blur-[126.3px]"></div>
      <div className="relative z-10 px-16 pt-6 h-[872px] overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default Background;
