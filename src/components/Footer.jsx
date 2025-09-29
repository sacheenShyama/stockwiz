import React from "react";
import { AiOutlineLineChart } from "react-icons/ai";
import { AiOutlinePieChart } from "react-icons/ai";
import { IoDocumentTextOutline } from "react-icons/io5";
import { PiCalculatorThin } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="container my-16">
      <p className="text-[64px] text-gray-600">
        What will you <strong className="text-white">Learn?</strong>
      </p>
      <div className="mt-10 w-full flex gap-4">
        <div className="w-1/3 space-y-4">
          <div className="w-full bg-[linear-gradient(194.77deg,rgba(0,0,0,0.2)_10.43%,rgba(252,203,21,0.2)_95.86%),linear-gradient(142.65deg,rgba(0,0,0,0)_21.64%,rgba(42,184,12,0.2)_97.94%)] rounded-xl">
            <div className="p-[16px]">
              <div className="w-[50px] h-[50px] border-1 rounded-lg flex ">
                <AiOutlineLineChart className="text-3xl m-auto" />
              </div>
              <div>
                <p className="text-2xl font-bold mt-4">
                  Introduction To Institutional Trading Strategies
                </p>
              </div>
              <div className="w-full">
                <ul className="mt-4 list-disc w-full pl-[16px] text-[14px] text-[#ffffffbf]">
                  <li>Understand why how and when stocks make big moves</li>
                  <li>Build your foundation with concepts such as liquidity</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full bg-[#ffffff1f] rounded-xl">
            <div className="p-[16px]">
              <div className="w-[50px] h-[50px] border-1 rounded-lg flex ">
                <AiOutlinePieChart className="text-3xl m-auto" />
              </div>
              <div>
                <p className="text-2xl font-bold mt-4">
                  Relative Strength Analysis
                </p>
              </div>
            </div>
          </div>
          <div className="w-full bg-[#ffffff1f] rounded-xl">
            <div className="p-[16px]">
              <div className="w-[50px] h-[50px] border-1 rounded-lg flex ">
                <PiCalculatorThin className="text-3xl m-auto" />
              </div>
              <div>
                <p className="text-2xl font-bold mt-4">Building A Game Plan</p>
              </div>
            </div>
          </div>
          <div className="w-full bg-[#ffffff1f] rounded-xl">
            <div className="p-[16px]">
              <div className="w-[50px] h-[50px] border-1 rounded-lg flex ">
                <IoDocumentTextOutline className="text-3xl m-auto" />
              </div>
              <div>
                <p className="text-2xl font-bold mt-4">
                  Case Studies & Examples
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/3">
          <div className="w-full bg-[#ffffff1c] rounded-2xl h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
