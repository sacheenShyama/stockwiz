import { AiOutlineBook } from "react-icons/ai";
import { SiSpeedtest } from "react-icons/si";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoTrophyOutline } from "react-icons/io5";
import { Award, Form } from "./highLightComp/FormAward";
const HighLightCard = () => {
  const hightlightArr = [
    {
      bg: "#000E2E",
      icons: <AiOutlineBook className="w-full h-full" />,
      header: (
        <>
          Everything You Need To Learn{" "}
          <strong className="text-white">About AI & Algo Trading</strong>
        </>
      ),
      details:
        "The world of trading is moving fast - extremely fast, and in this era of algo trading and artificial intelligence, we will give you a sneak peek into how this new form of trading can significantly increase the odds of being profitable in the market. You'll learn how big professional trading desks are hunting retail stop losses, exploiting big market movements - all on autopilot. ",
      rightSide: <Form />,
    },
    {
      bg: "#002323",
      icons: <SiSpeedtest className="w-full h-full" />,
      header: (
        <>
          Learn To Create, Back Test and Deploy Trading Bots Using{" "}
          <strong className="text-white">Our Secret Strategies</strong>
        </>
      ),
      details:
        " Unleash the power of algorithmic trading tools which lets you create, test, deploy your strategies spanning across price action, smart money concepts, institutional price action, indicators, volume, open interest and much more in a few clicks without the need of any coding or programming skills. Additionally, you will get access to few of our secret algo strategies – which are ready to deploy in the live markets.",
      rightSide: <Form />,
    },
    {
      bg: "#002419",
      icons: <IoDocumentTextOutline className="w-full h-full" />,
      header: (
        <>
          <strong className="text-white">
            Detailed Verified Profit / Loss Statement
          </strong>{" "}
          & Algo Trade History
        </>
      ),
      details:
        "- Get access to detailed case studies of verified real trades executed on autopilot from our proprietary custom algo trading robots which seamlessly scan, analyse, deploy and manage trades in equity, futures and options segment for intraday as well as swing trading styles. Discover a wide variety of directional and non-directional trading strategies, which will make you top dollar even when you sleep.",
      rightSide: <Award />,
    },
    {
      bg: "#001B26",
      icons: <IoTrophyOutline className="w-full h-full" />,
      header: (
        <>
          How Tools Like Chat GPT, Trading View & StrykeX Can Get You To The{" "}
          <strong className="text-white">Top 1% Elite Traders</strong>
        </>
      ),
      details:
        "Gone are the days where traders were glued to their screen from 9:15 am till 3:30pm - scanning, executing, managing their trades manually. This is ineffective and a perfect recipe for increasing losses. BUT, with A.I trading tools and platforms such as Trading View & StrykeX combined with Chat GPT, you can do all this on complete automation with 5X better results, without even clicking a button or writing a single line of code. That's the power of artificial intelligence - that's the future of retail trading.",
      rightSide: <Form />,
    },
  ];
  return (
    <div className="">
      {hightlightArr.map((item, index) => {
        return (
          <div
            className={"mt-8 w-full rounded-3xl p-8 "}
            style={{
              backgroundColor: item.bg,
            }}
            key={index}
          >
            <div className="w-full flex">
              <div className="w-1/2 pr-2">
                <div className="w-[40px] h-[42px]">{item.icons}</div>
                <p className="mt-6 text-[32px] text-gray-400">{item.header}</p>
                <p className="mt-6 text-gray-400 text-left">{item.details}</p>
              </div>
              <div
                className="w-1/2 rounded-3xl pl-11 pt-10"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.06)",
                }}
              >
                {item.rightSide}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HighLightCard;
