import React from "react";

const ProgressBar = () => {
  return (
    <div className=" rounded-lg mt-3">
      {/* Labels */}
      <div className="flex justify-between mb-1">
        <span className=""></span>
        <span className="text-[14px] text-white font-bold">Entry</span>
        <p className="bg-red-500 text-white text-[13px] font-semibold text-center py-0.5 w-[50px] rounded-md">
          Live
        </p>{" "}
        <span></span>
      </div>

      {/* Bar */}
      <div className="relative h-1 bg-green-500 rounded-full mb-3">
        {/* Green Fill (50% width) */}
        <div className="absolute h-full w-1/4 bg-red-500 rounded-full"></div>

        {/* 3 Dots */}
        <div className="absolute w-1.5 h-1.5 bg-white rounded-full top-1/2 -translate-y-1/2 left-0 -translate-x-1/2"></div>
        <div className="absolute w-1.5 h-1.5 bg-white rounded-full top-1/2 -translate-y-1/2 left-1/4 -translate-x-1/2"></div>
        <div className="absolute w-1.5 h-1.5 bg-white rounded-full top-1/2 -translate-y-1/2 left-2/2 -translate-x-1/2"></div>
        <div className="absolute w-1.5 h-1.5 bg-white rounded-full top-1/2 -translate-y-1/2 left-full -translate-x-1/2"></div>

        {/* White Circle */}
        <div className="absolute w-2.5 h-2.5 bg-white border-2  rounded-full top-1/2 -translate-y-1/2 left-4/6 -translate-x-1/2"></div>
      </div>

      {/* Bottom Info */}
      <div className="flex justify-between">
        <div className="w-auto">
          <span className="text-[14px] text-white font-bold">SL</span>
        </div>
        <div className="text-[10px]">
          <div className="text-white text-[14px]">26 July</div>
          <div className="text-white text-[14px] font-semibold">12:02 PM</div>
        </div>{" "}
        <div>
          <span className="text-[14px] text-white font-bold"></span>
        </div>
        <span className="text-[14px] text-white font-bold">Target</span>{" "}
      </div>
    </div>
  );
};

export default ProgressBar;
