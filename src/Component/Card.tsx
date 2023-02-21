import React from "react";
import { FaPlaystation, FaXbox } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";

type Props = {};

const Card = (props: Props) => {
  return (
    <div className="bg-primary-500 group text-primary-400 w-[420px] rounded-xl h-fit cursor-pointer  transition duration-500 group-hover:scale-12 transform">
      <div className="mb-5">
        <img src="./Testing.jpg" className="rounded-t-xl" alt="" />
      </div>
      <div className="pb-8 px-5">
        <div className="flex gap-3">
          <FaPlaystation size={20} className="mb-5" />
          <FaXbox size={20} className="mb-5" />
          <RiComputerLine size={20} className="mb-5" />
        </div>

        <p className="text-2xl font-bold">Grant Thef Auto V</p>
      </div>
      <div className="hidden group-hover:block">
        <p>info</p>
        <p>info</p>
        <p>info</p>
        <p>info</p>
      </div>
    </div>
  );
};

export default Card;
