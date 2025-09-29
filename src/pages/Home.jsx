import React from "react";
import PartnerLogo from "../components/PartnerLogo";
import HighLightCard from "../components/HighLightCard";
import Timer from "../components/highLightComp/Timer";

const Home = () => {
  return (
    <div className="text-white ">
      <div className="min-h-screen rounded-t-xl rounded-b-3xl bg-gradient-to-b from-[rgba(34,180,0,1)] via-[rgba(14,14,14,1)] to-[rgba(253,203,21,1)] container m-auto mt-4">
        Home
      </div>
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
        <div></div>

        {/* timer cards */}

        <Timer />
      </div>
    </div>
  );
};

export default Home;
