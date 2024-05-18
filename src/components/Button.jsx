import React from "react";

const Button = ({ label, iconUrl }) => {
  return (
    <button className="flex items-center justify-center gap-2 py-4 px-7 border font-montserrat leading-none text-lg rounded-full bg-coral-red text-white border-coral-red">
      {label}
      <img
        src={iconUrl}
        alt="arrow-right"
        width={24}
        height={24}
        className="ml-2 rounded-full w-5 h-5"
      />
    </button>
  );
};

export default Button;
