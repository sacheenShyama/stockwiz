import React from "react";
import StockWilogo from "../../assets/StockWilogo.png";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-[#0000005c] flex justify-between h-[66.84px] rounded-xl px-6 ">
      <div>
        <img src={StockWilogo} className="w-[159px] h-[48.4px]" />
      </div>
      <div className="flex justify-between p-1.5 gap-2">
        <div className="border-gray-600 border p-3 m-auto rounded-lg ">
          <FaWhatsapp className="text-[24px]" />
        </div>
        <div className="border-gray-600 py-3 px-6 text-[15.63px] font-semibold border rounded-lg m-auto">
          <p>Sign Up</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
