import React from "react";
import nifty from "../../assets/nifty.png";
import rill from "../../assets/rill.png";
import ProgressBar from "./ProgressBar";
const SignalCard = () => {
  const gradientBorder = {
    borderWidth: "1.24px",
    borderStyle: "solid",
    borderImageSlice: 1,
    borderImageSource:
      "linear-gradient(137.14deg, #26BC0D 14.89%, #FFCB15 87.52%)",
    boxShadow:
      "0 0 12px rgba(255, 203, 21, 0.6), 0 0 8px rgba(38, 188, 13, 0.6)",
    borderBottom: "none",
  };

  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-auto h-[235px]">
      <div className="flex">
        <div
          className="mt-6 w-[300px] bg-[#0e0e0e] rounded-tl-lg p-[9.6px]"
          style={{ ...gradientBorder, borderRight: "none" }}
        >
          <div>
            <div className="flex justify-between">
              <div className="flex">
                <div>
                  <img
                    src={rill}
                    width={28.62}
                    height={28.62}
                    alt=""
                    className="rounded-full"
                  />
                </div>
                <div className="pl-1.5">
                  <p className="text-[12px] font-bold">RELIANCE</p>
                  <p className="text-[9px] text-gray-400">
                    RELIANCE 31 JUL 1410 CALL
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[15px] font-bold text-right">₹6.95</p>
                <p className="text-[11px] text-green-500">+₹3.25 (+27.24%)</p>
              </div>
            </div>
          </div>
          <div>
            <ProgressBar />
          </div>
          <div>
            <div className="border-gray-400 border-[1px] p-2 rounded-lg mt-2">
              <div className="flex justify-between">
                <p className="text-gray-400 text-[11px]">Entry</p>
                <p className="text-gray-400 text-[11px]">Stop Loss</p>
              </div>
              <div className="flex justify-between">
                <p className="text-[14px] font-semibold">₹70.95</p>
                <p className="text-[14px] font-semibold">₹35.85</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className=" w-[370px] z-10 bg-[#0e0e0e] rounded-t-2xl p-[18px]"
          style={gradientBorder}
        >
          <div className="">
            <div className="flex justify-between">
              <div className="flex">
                <div>
                  <img
                    src={nifty}
                    width={35.62}
                    height={35.62}
                    alt=""
                    className="rounded-full"
                  />
                </div>
                <div className="pl-1.5">
                  <p className="text-[15px] font-bold">NIFTY</p>
                  <p className="text-[11px] text-gray-400">
                    NIFTY 24850 PE 31 Jul 2025
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[15px] font-bold text-right">₹118.50</p>
                <p className="text-[11px] text-green-500">+₹74.30 (+168.24%)</p>
              </div>
            </div>
            <div>
              <ProgressBar />
            </div>
            <div className="border-gray-400 border-[1px] p-2 rounded-lg mt-2">
              <div className="flex justify-between">
                <p className="text-gray-400 text-[11px]">Entry</p>
                <p className="text-gray-400 text-[11px]">Stop Loss</p>
              </div>
              <div className="flex justify-between">
                <p className="text-[14px] font-semibold">₹70.95</p>
                <p className="text-[14px] font-semibold">₹35.85</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-6 w-[300px] bg-[#0e0e0e] rounded-tr-lg p-[9.6px]"
          style={{ ...gradientBorder, borderLeft: "none" }}
        >
          <div>
            <div className="flex justify-between">
              <div className="flex">
                <div>
                  <img
                    src={rill}
                    width={28.62}
                    height={28.62}
                    alt=""
                    className="rounded-full"
                  />
                </div>
                <div className="pl-1.5">
                  <p className="text-[12px] font-bold">RELIANCE</p>
                  <p className="text-[9px] text-gray-400">
                    RELIANCE 31 JUL 1410 CALL
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[15px] font-bold text-right">₹6.95</p>
                <p className="text-[11px] text-green-500">+₹3.25 (+27.24%)</p>
              </div>
            </div>
            <div>
              <ProgressBar />
            </div>
            <div>
              <div className="border-gray-400 border-[1px] p-2 rounded-lg mt-2">
                <div className="flex justify-between">
                  <p className="text-gray-400 text-[11px]">Entry</p>
                  <p className="text-gray-400 text-[11px]">Stop Loss</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[14px] font-semibold">₹70.95</p>
                  <p className="text-[14px] font-semibold">₹35.85</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignalCard;
