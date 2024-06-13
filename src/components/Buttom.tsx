import * as React from "react";
import { ReactNode } from "react";

type PropsType = {
  children: React.ReactNode;
};

const Button = ({ children }: PropsType) => {
  return (
    <button className="flex items-center min-h-screen justify-center px-4 py-2 m-auto bg-black text-white md:text-l lg:text-[10px] rounded-lg font-semibold focus:outline-none hover:scale-105 ">
      <span className="text-white animate-bounce">{children}</span>
    </button>
  );
};

export default Button;
