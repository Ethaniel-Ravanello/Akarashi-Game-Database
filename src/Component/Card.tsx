import React from "react";
import { FaPlaystation, FaXbox } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";

type Props = {
  id: number;
  name: string;
  image: string;
  metas: number;
  rating: number;
  platform: Array<Object>;
  genre: Array<Object>;
  esrb: any;
  realese: string;
};

const Card = ({
  id,
  name,
  image,
  metas,
  rating,
  platform,
  genre,
  esrb,
  realese,
}: Props) => {
  let ratings = esrb.name;
  return (
    <>
      <div
        key={id}
        className="bg-primary-500 mx-auto group text-primary-400 mb-5 w-[300px] md:w-[400px] rounded-xl h-fit lg:hover:transition lg:hover:ease-in-out  lg:hover:-translate-y-1 lg:hover:scale-110 duration-300"
      >
        <div className="mb-5">
          <img src={image} className="rounded-t-xl" alt="" />
        </div>
        <div className="pb-5 px-5">
          <div className="flex justify-between">
            <div className="flex gap-3 pt-3.5">
              <FaPlaystation size={20} className="mb-5 align-middle my-auto" />
              <FaXbox size={20} className="mb-5" />
              <RiComputerLine size={20} className="mb-5" />
            </div>
            <div className="bg-primary-300 h-fit p-3 rounded-lg">
              <span className="font-bold">{metas}</span>
            </div>
          </div>

          <p className="text-3xl font-bold cursor-pointer hover:text-primary-300">
            {name}
          </p>
          <div className="w-fit h-fit bg-primary-300 text-primary-400 rounded-lg p-2 mt-5">
            <span>{rating}</span>
          </div>
        </div>

        <div className="hidden w-[315px] md:w-[400px] text-sm px-5 pb-5 md:group-hover:block md:group-hover:absolute bg-primary-500 text-primary-600 h-fit mt-[-10px] rounded-b-xl ">
          <div className="flex justify-between text-sm">
            <p>Rating</p>
            <div className="flex gap-2 ml-[30%]">
              <p key={id} className="text-primary-400 underline">
                {ratings}
              </p>
            </div>
          </div>
          <div className="h-[1px] w-full bg-primary-600 my-2"></div>
          <div className="flex justify-between">
            <p>Genres</p>
            <div className="flex gap-2">
              {genre.map((data) => (
                <>
                  <p className="text-primary-400 underline">{data.name}</p>
                </>
              ))}
            </div>
          </div>
          <div className="h-[1px] w-full bg-primary-600 my-2"></div>
          <div className="flex justify-between">
            <p>Realesd Date</p>
            <div className="flex gap-2">
              <p className="text-primary-400">{realese} </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
