import React from "react";
import Background from "./LandingComponents/Background";
import Navbar from "./LandingComponents/Navbar";
import Avatars from "./LandingComponents/Avatars";
import { PiStarFourLight } from "react-icons/pi";
import star from "../assets/star.png";
import CtaButtons from "./CtaButtons";
import { MdArrowOutward } from "react-icons/md";
import SignalCard from "./LandingComponents/SignalCard";
const Landing = () => {
  return (
    <Background>
      <Navbar />
      <div className="mt-8">
        <div className="bg-[#ffffff1f] rounded-full flex justify-center w-fit m-auto pl-1 pr-3 py-1">
          <Avatars /> <p className="font-semibold ml-3">1,00,000+ Attendees</p>
        </div>
      </div>

      <div className="mt-4 m-auto">
        <div className="">
          <p className="text-[90.83px] text-center leading-[85px]">
            Introducing <br />
          </p>
          <div className="flex justify-center leading-[140px]">
            <img src={star} className="object-fit w-[120px] h-[120px]" />
            <p className="text-[90.83px] bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent">
              AI Powered
            </p>
            <p className="text-[90.83px] text-center ">&nbsp;Signals</p>{" "}
          </div>
          <p className="text-center text-2xl ">
            Trade smarter with AI-Generated Signals — built with institutional
            precision, <br /> made for everyday traders.
          </p>
        </div>
      </div>

      {/* cta buttons */}
      <div className="flex justify-center gap-8 mt-8">
        <div className="">
          <CtaButtons bg={"white"} childText={"(Limited Seats Only)"}>
            <div className="flex">
              <p className="text-[20px] text-black font-semibold flex  m-auto">
                Join Now (Hinidi)-Free{" "}
                <p className="flex pl-2 line-through text-[18px] m-auto font-normal">
                  &#x20B9; 499
                </p>
              </p>
              <span className="bg-black rounded-[50%] w-[50px] h-[50px]  ml-8 flex items-center justify-center">
                <MdArrowOutward className="text-white text-3xl" />{" "}
              </span>
            </div>
          </CtaButtons>{" "}
        </div>
        <div className="">
          <CtaButtons bg={"black"} childText={"(Limited Seats Only)"}>
            <div className="flex">
              <p className="text-[20px] text-white font-semibold flex  m-auto">
                Join Now (English)-Free{" "}
                <p className="flex pl-2 line-through text-[18px] m-auto font-normal">
                  &#x20B9; 499
                </p>
              </p>
              <span className="bg-white rounded-[50%] w-[50px] h-[50px]  ml-8 flex items-center justify-center">
                <MdArrowOutward className="text-black text-3xl" />{" "}
              </span>
            </div>
          </CtaButtons>{" "}
        </div>
      </div>
      <SignalCard />
    </Background>
  );
};

export default Landing;
