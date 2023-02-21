import React from "react";
import { FaPlaystation, FaXbox } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";

type Props = {};

const Card = (props: Props) => {
  return (
    <div className="bg-primary-500 group text-primary-400 mb-5 max-w-[420px] rounded-xl h-fit cursor-pointer hover:transition hover:ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300">
      <div className="mb-5">
        <img src="./Testing.jpg" className="rounded-t-xl" alt="" />
      </div>
      <div className="pb-10 px-5">
        <div className="flex justify-between">
          <div className="flex gap-3 pt-3.5">
            <FaPlaystation size={20} className="mb-5 align-middle my-auto" />
            <FaXbox size={20} className="mb-5" />
            <RiComputerLine size={20} className="mb-5" />
          </div>
          <div className="bg-primary-300 h-fit p-3 rounded-lg">
            <span className="font-bold">93</span>
            {/* Metacritic ^^ */}
          </div>
        </div>

        <p className="text-3xl font-bold">Grant Thef Auto V</p>
      </div>
      <div className="hidden text-sm px-5 pb-5 group-hover:block group-hover:absolute bg-primary-500 text-primary-600 w-full h-fit mt-[-10px] rounded-b-xl ">
        <div className="flex justify-between text-sm">
          <p>Rating</p>
          <div className="flex gap-2">
            <p className="text-primary-400">Mature, </p>
          </div>
        </div>
        <div className="h-[1px] w-full bg-primary-600 my-2"></div>
        <div className="flex justify-between">
          <p>Genres</p>
          <div className="flex gap-2">
            <p className="text-primary-400">Action, </p>
            <p className="text-primary-400">Adventure, </p>
            <p className="text-primary-400">Gore, </p>
          </div>
        </div>
        <div className="h-[1px] w-full bg-primary-600 my-2"></div>
        <div className="flex justify-between">
          <p>Realesd Date</p>
          <div className="flex gap-2">
            <p className="text-primary-400">2013-09-17 </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
