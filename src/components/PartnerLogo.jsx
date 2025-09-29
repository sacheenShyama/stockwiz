import React from "react";
import { motion } from "framer-motion";
import angelone from "../assets/partnerslogo/angelone.png";
import bankOfAmerica from "../assets/partnerslogo/bank-of-america.png";
import goldman from "../assets/partnerslogo/Goldman.png";
import icici from "../assets/partnerslogo/ICICI.png";
import indmoney from "../assets/partnerslogo/INDmoney.png";
import jp from "../assets/partnerslogo/jpmorgan.png";
import morgan from "../assets/partnerslogo/morgan.png";
import smallcase from "../assets/partnerslogo/smallcasee.png";
const PartnerLogo = () => {
  const logoArr = [
    angelone,
    bankOfAmerica,
    goldman,
    icici,
    indmoney,
    jp,
    morgan,
    smallcase,
  ];

  const allLogo = [...logoArr, ...logoArr];
  return (
    <div className="container  overflow-hidden m-auto  pt-5">
      <div className="relative">
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r  from-black to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l  from-black to-transparent z-10"></div>

        <motion.div
          className="flex gap-9"
          animate={{
            x: [0, -1200],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {allLogo.map((logo, index) => (
            <motion.div key={index} className="flex-shrink-0">
              <div className="mr-2 ml-2">
                <img
                  src={logo}
                  className="w-[250px] h-[150px] object-contain"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PartnerLogo;
