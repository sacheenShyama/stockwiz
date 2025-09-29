import React, { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState({
    days: 6,
    hours: 6,
    minutes: 6,
    seconds: 6,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        seconds--;

        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }

        if (minutes < 0) {
          minutes = 59;
          hours--;
        }

        if (hours < 0) {
          hours = 23;
          days--;
        }

        if (days < 0) {
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mt-16">
      <p className="text-[32px] font-bold text-center">Next Live Q&A in</p>
      <div>
        <div className="flex gap-3 mt-4 justify-center">
          <div className="w-[214px] h-[125px] rounded-3xl border-1 border-gray-500 flex flex-col items-center justify-center">
            <div className="text-5xl font-bold ">{time.days}</div>
            <div className="text-2xl font-light ">Days</div>
          </div>
          <div className="w-[214px] h-[125px] rounded-3xl border-1 border-gray-500 flex flex-col items-center justify-center">
            <div className="text-5xl font-bold ">{time.hours}</div>
            <div className="text-2xl font-light ">Hours</div>
          </div>
          <div className="w-[214px] h-[125px] rounded-3xl border-1 border-gray-500 flex flex-col items-center justify-center">
            <div className="text-5xl font-bold ">{time.minutes}</div>
            <div className="text-2xl font-light ">Minutes</div>
          </div>
          <div className="w-[214px] h-[125px] rounded-3xl border-1 border-gray-500 flex flex-col items-center justify-center">
            <div className="text-5xl font-bold ">{time.seconds}</div>
            <div className="text-2xl font-light ">Seconds</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
