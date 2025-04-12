import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClass = active
    ? "text-white border-b-2 border-purple-500"
    : "text-[#adb7be] ";
  return (
    <button onClick={selectTab}>
      <p className={`gap-2 font-semibold cursor-pointer hover:text-white ${buttonClass}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
