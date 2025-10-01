import React from "react";
import CtaButtons from "./CtaButtons";
import { MdArrowOutward } from "react-icons/md";
import { BsCalendarFill } from "react-icons/bs";

const Webinar = () => {
  return (
    <div className="container mt-8 flex flex-col-1 justify-center gap-5">
      <div className=" w-1/2 rounded-3xl bg-[linear-gradient(180deg,rgba(47,47,47,0)_-14.43%,#14A800_204.03%)]">
        <div className="mt-12 px-16 flex gap-2">
          <span>
            <BsCalendarFill className="text-4xl font-bold" />
          </span>
          <p className="text-[32px] font-bold">
            Sunday, 21 March 2025 | 8:00 PM
          </p>
        </div>
        <div className="flex justify-center my-12 w-full">
          <div className="w-full px-16">
            <CtaButtons bg={"white"}>
              <div className="flex w-full justify-between">
                <div className="flex items-center">
                  <p className="text-[20px] text-black font-semibold">
                    Join Now (English)-Free
                  </p>
                  <span className="pl-2 text-black line-through text-[18px] font-normal">
                    ₹299
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <p className="text-gray-500 text-sm">(Limited Seats Only)</p>
                  <div className="bg-black rounded-full w-[50px] h-[50px] flex items-center justify-center">
                    <MdArrowOutward className="text-white text-3xl" />
                  </div>
                </div>
              </div>
            </CtaButtons>
          </div>
        </div>
      </div>
      <div className=" w-1/2 rounded-3xl bg-[linear-gradient(180deg,rgba(47,47,47,0)_-3.52%,#A89400_185.4%)] ">
        <div className="mt-12 px-16 flex gap-2">
          <span>
            <BsCalendarFill className="text-4xl font-bold" />
          </span>
          <p className="text-[32px] font-bold">
            Sunday, 21 March 2025 | 8:00 PM
          </p>
        </div>
        <div className="flex justify-center my-12 w-full">
          <div className="w-full px-16">
            <CtaButtons bg={"black"}>
              <div className="flex w-full justify-between">
                <div className="flex items-center">
                  <p className="text-[20px] text-white font-semibold">
                    Join Now (English)-Free
                  </p>
                  <span className="pl-2 text-white line-through text-[18px] font-normal">
                    ₹299
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <p className="text-gray-400 text-sm">(Limited Seats Only)</p>
                  <div className="bg-white rounded-full w-[50px] h-[50px] flex items-center justify-center">
                    <MdArrowOutward className="text-black text-3xl" />
                  </div>
                </div>
              </div>
            </CtaButtons>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webinar;
