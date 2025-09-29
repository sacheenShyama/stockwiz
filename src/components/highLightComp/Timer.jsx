import React from "react";

const Timer = () => {
  return (
    <div className="container mt-16">
      <p className="text-[32px] font-bold text-center">Next Live Q&A in</p>
      <div>
        <div className="flex gap-3 mt-4 justify-center">
          <div className="w-[214px] h-[125px] rounded-3xl border-1 border-gray-500">
            d
          </div>
          <div className="w-[214px] h-[125px] rounded-3xl border-1 border-gray-500">
            h
          </div>
          <div className="w-[214px] h-[125px] rounded-3xl border-1 border-gray-500">
            m
          </div>
          <div className="w-[214px] h-[125px] rounded-3xl border-1 border-gray-500">
            s
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
