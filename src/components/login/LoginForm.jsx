import React from "react";
import StrykeX from "../../assets/StrykeX.png";
import { Link } from "react-router-dom";
const LoginForm = () => {
  return (
    <div className="bg-black rounded-2xl text-white py-4 px-4 w-[409px]">
      <div className="flex justify-center mt-2">
        {" "}
        <span>
          <img src={StrykeX} alt="" />
        </span>
      </div>
      <div className="flex mt-3">
        <p className="text-[28px] font-bold text-center">Get &nbsp;</p>
        <p className="text-[28px] font-bold bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent">
          2 Months Extra Access
        </p>
      </div>
      <div>
        <p className="text-[28px] font-bold text-center">
          + Special Discount Code
        </p>
      </div>
      <div>
        <form action="" className="space-y-3 w-full mt-10">
          <input
            className="border-gray-400 border-[1.24px] w-full rounded-lg p-3"
            type="text"
            name="name"
            placeholder="name"
            required={false}
          />
          <input
            className="border-gray-400 border-[1.24px] w-full rounded-lg p-3"
            type="text"
            name="email"
            placeholder="email"
            required={false}
          />
          <input
            className="border-gray-400 border-[1.24px] w-full rounded-lg p-3"
            type="text"
            name="phone"
            placeholder="Phone no."
            required={false}
          />
          <button className="text-[16px] font-bold w-full py-3 rounded-lg mt-2 bg-gradient-to-r from-green-500 to-yellow-500">
            <Link to={"/home"}>Submit</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
