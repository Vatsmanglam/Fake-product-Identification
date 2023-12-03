import React from "react";

const Input = ({ type, placeholder,styles }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full p-2 outline-none bg-transparent border-[1px] border-x-0 border-t-0 border-[#ffffff77] ${styles}`}
    />
  );
};

export default Input;
