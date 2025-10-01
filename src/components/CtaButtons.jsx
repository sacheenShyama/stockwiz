import React from "react";

const CtaButtons = ({
  children,
  bg,
  childText,

  from = "#0DB50B",
  to = "#FFCB15",
}) => {
  return (
    <div class="mx-auto w-full">
      <div class="relative group cursor-pointer">
        <div
          class=" absolute -inset-1 blur rounded-tr-[70px] rounded-bl-[70px] opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
          style={{
            backgroundImage: `linear-gradient(to right, ${from}, ${to})`,
          }}
        ></div>
        <div
          class="relative rounded-[90px] pl-6 pr-1 py-2   ring-1 ring-gray-900/5  leading-none flex items-top justify-start space-x-6"
          style={{
            backgroundColor: bg,
          }}
        >
          <div class="flex space-y-2 w-full">{children}</div>
        </div>
      </div>
      {childText && <p className="text-base text-center mt-2">{childText}</p>}
    </div>
  );
};

export default CtaButtons;
