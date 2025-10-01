import React from "react";
import PartnerLogo from "../components/PartnerLogo";
import HighLightCard from "../components/HighLightCard";
import Timer from "../components/Timer";
import CtaButtons from "../components/CtaButtons";
import { MdArrowOutward } from "react-icons/md";
import Webinar from "../components/Webinar";
import Footer from "../components/Footer";
import Landing from "../components/Landing";

const Home = () => {
  return (
    <div className="text-white ">
      <Landing />
      {/* partner section */}
      <div className="mt-12">
        <p className="text-base text-center pt-2.5 text-gray-400">
          Trusted by <strong className="text-white"> Professionals </strong>{" "}
          Working At Top Companies like
        </p>

        <PartnerLogo />
      </div>
      {/* Webninar highlights */}
      <div className="container  mt-12 m-auto px-16">
        <span>
          <p className="text-[64px] text-gray-400">
            <strong className="text-white"> Webinar Highlights </strong>- What
            will Be Covered?
          </p>{" "}
        </span>
        <p className="font-left text-2xl text-gray-400 pt-4">
          Learn the secrents sauce of how professional institutional traders
          leverage the power of artificial intelligencce and algo trading for
          breakthrough results
        </p>

        {/* webinar cards */}
        <HighLightCard />

        {/* CTA buttons */}
        <div className="flex justify-center gap-8 mt-8">
          <div className="">
            <CtaButtons
              from="#4C73FF"
              to="#00A2B7"
              bg={"white"}
              childText={"(Limited Seats Only)"}
            >
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
            <CtaButtons
              from="#4C73FF"
              to="#00A2B7"
              bg={"black"}
              childText={"(Limited Seats Only)"}
            >
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

        {/* timer cards */}

        <Timer />

        {/* Webinar board timer */}
        <Webinar />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
