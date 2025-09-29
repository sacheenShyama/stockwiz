import { MdPercent } from "react-icons/md";

export const Form = () => {
  return (
    <div
      className=" w-full h-full rounded-t-xl rounded-br-3xl"
      style={{
        backgroundColor: "rgba(0,0,0,0.7)",
      }}
    >
      <div className=" border-b-[0.77px] border-[#2a2a2a]">
        <p className="p-4 font-semibold text-[14.66px]">
          Deploy Strategy in Live Markets
        </p>{" "}
      </div>
      <div className="p-4">
        <form action="">
          <div className="flex ">
            <div className="w-1/2 space-y-2 pr-4">
              <div>
                <label htmlFor="Strategy Name" className="text-[7.51px]">
                  Strategy Name
                </label>
              </div>

              <div className="">
                <input
                  type="text"
                  className=" w-full border-[0.77px] border-[#2a2a2a] rounded-md outline-none p-1"
                />
              </div>
            </div>
            <div className="w-1/2 space-y-2">
              <div>
                {" "}
                <label htmlFor="Order Type" className="text-[7.51px]">
                  Order Type
                </label>{" "}
              </div>{" "}
              <div className="border-[0.77px] border-[#2a2a2a] rounded-md flex justify-around h-[32.66px] ">
                <button
                  disabled
                  className="bg-gradient-to-br from-blue-500 to-purple-600 text-[8px] rounded-md w-1/2 p-1"
                >
                  Auto Trading
                </button>{" "}
                <button disabled className="p-1 text-[8px] w-1/2 rounded-md">
                  Paper Trading
                </button>
              </div>
            </div>
          </div>
          <p className="text-[11.73px] mt-4 font-semibold">
            Order Execution Details
          </p>

          <div className="mt-2">
            <div>
              <label htmlFor="" className="text-[8.8px]">
                Product Type
              </label>
            </div>
            <div className="flex gap-3 mt-1">
              <span className="flex gap-1">
                {" "}
                <input
                  type="radio"
                  id="intraday"
                  placeholder="Intraday"
                  value={"Intraday"}
                  className="border-[0.77px] border-[#2a2a2a] rounded-md outline-none p-1 bg-black"
                />
                <label className="text-[8.8px]">Intraday</label>
              </span>
              <span className="flex gap-1">
                {" "}
                <input
                  type="radio"
                  value="Delivery"
                  className="border-[0.77px] border-[#2a2a2a] rounded-md outline-none p-1 "
                />
                <label htmlFor="" className="text-[8.8px] ">
                  Delivery
                </label>
              </span>
            </div>
          </div>

          <div className="flex mt-4">
            <div className="w-1/2 space-y-2 pr-4">
              <div>
                <label htmlFor="Strategy Name" className="text-[7.51px]">
                  Entry Orders
                </label>
              </div>

              <div className="">
                <select className="w-full border-[0.77px] border-[#2a2a2a] text-[8.8px] rounded-md outline-none p-3">
                  <option value="">option 1</option>
                  <option value="">option 2</option>
                  <option value="">option 3</option>
                </select>
              </div>
            </div>
            <div className="w-1/2 space-y-2">
              <div>
                <label htmlFor="Order Type" className="text-[7.51px]">
                  Exit Orders
                </label>{" "}
              </div>{" "}
              <div className="">
                <select className="w-full border-[0.77px] border-[#2a2a2a] rounded-md outline-none text-[8.8px] p-3">
                  <option value="">option 1</option>
                  <option value="">option 2</option>
                  <option value="">option 3</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex mt-4">
            <div className="w-1/2 space-y-2 pr-4">
              <div>
                <label htmlFor="Strategy Name" className="text-[7.51px]">
                  Entry Orders
                </label>
              </div>

              <div className="">
                <div className="flex bg-gray-800 rounded-md ">
                  <input
                    type="text"
                    className="w-full border-[0.77px] border-[#2a2a2a] rounded-md outline-none p-1.5 mr-2  z-10"
                    style={{
                      backgroundColor: "rgba(0,0,0,0.7)",
                    }}
                  />
                  <MdPercent className="m-auto pr-1 w-10  " />
                </div>
              </div>
            </div>
            <div className="w-1/2 space-y-2">
              <div>
                <label htmlFor="Order Type" className="text-[7.51px]">
                  Margin Benefit
                </label>
              </div>
              <div className="">
                <select className="w-full border-[0.77px] border-[#2a2a2a] rounded-md outline-none p-3 text-[8.8px]">
                  <option value="">
                    Place Orders Sequenced for Margin Benefit
                  </option>
                  <option value="">option 2</option>
                  <option value="">option 3</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="mt-2">
              <div>
                <label htmlFor="" className="text-[8.8px]">
                  SL and TP Order Based on Price
                </label>
              </div>
              <div className="flex gap-3 mt-1">
                <span className="flex gap-1">
                  <input
                    type="radio"
                    id="intraday"
                    placeholder="Intraday"
                    value={"Intraday"}
                    className="border-[0.77px] border-[#2a2a2a] rounded-md outline-none p-1 bg-black"
                  />
                  <label className="text-[8.8px]">Traded Price</label>
                </span>
                <span className="flex gap-1">
                  {" "}
                  <input
                    type="radio"
                    value="Delivery"
                    className="border-[0.77px] border-[#2a2a2a] rounded-md outline-none p-1 "
                  />
                  <label htmlFor="" className="text-[8.8px] ">
                    Signal Price
                  </label>
                </span>
              </div>
            </div>

            <div className="mt-2">
              <div>
                <label htmlFor="" className="text-[8.8px]">
                  Square Off Transaction if any entry is failed
                </label>
              </div>
              <div className="flex gap-3 mt-1">
                <span className="flex gap-1">
                  {" "}
                  <input
                    type="radio"
                    id="intraday"
                    placeholder="Intraday"
                    value={"Intraday"}
                    className="border-[0.77px] border-[#2a2a2a] rounded-md outline-none p-1 bg-black"
                  />
                  <label className="text-[8.8px]">Yes</label>
                </span>
                <span className="flex gap-1">
                  {" "}
                  <input
                    type="radio"
                    value="Delivery"
                    className="border-[0.77px] border-[#2a2a2a] rounded-md outline-none p-1 "
                  />
                  <label htmlFor="" className="text-[8.8px] ">
                    No
                  </label>
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export const Award = () => {
  return <div>award show</div>;
};
