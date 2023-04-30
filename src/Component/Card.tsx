import React from "react";
import { FaPlaystation, FaXbox } from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";
import { RiComputerLine } from "react-icons/ri";
import { AiFillApple, AiFillAndroid, AiFillChrome } from "react-icons/ai";
import { FaAppStoreIos } from "react-icons/fa";
import { DiLinux } from "react-icons/di";

type Props = {
  id: number;
  name: string;
  image: string;
  metas: number;
  rating: number;
  platform: any;
  genre: any;
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
  return (
    <>
      <div
        key={id}
        className="bg-primary-500 group text-primary-400 mb-5 w-[350px] md:w-[435px] h-fit rounded-xl lg:hover:transition lg:hover:ease-in-out  lg:hover:-translate-y-1 lg:hover:scale-110 duration-300"
      >
        <div className="mb-5">
          <img src={image} loading="lazy" className="rounded-t-xl" alt="" />
        </div>
        <div className="pb-5 px-5">
          <div className="flex justify-between">
            <div className="flex gap-3 pt-3.5">
              {platform?.map((index: any) => (
                <span>
                  {index.platform.name == "PC" ? (
                    <RiComputerLine size={20} className="mb-5" />
                  ) : index.platform.name === "Xbox" ? (
                    <FaXbox size={20} className="mb-5" />
                  ) : index.platform.name === "PlayStation" ? (
                    <FaPlaystation
                      size={20}
                      className="mb-5 align-middle my-auto"
                    />
                  ) : index.platform.name === "Apple Macintosh" ? (
                    <AiFillApple
                      size={20}
                      className="mb-5 align-middle my-auto"
                    />
                  ) : index.platform.name === "Linux" ? (
                    <DiLinux size={20} className="mb-5 align-middle my-auto" />
                  ) : index.platform.name === "Android" ? (
                    <AiFillAndroid
                      size={20}
                      className="mb-5 align-middle my-auto"
                    />
                  ) : index.platform.name === "Nintendo" ? (
                    <SiNintendoswitch
                      size={20}
                      className="mb-5 align-middle my-auto"
                    />
                  ) : index.platform.name == "iOS" ? (
                    <FaAppStoreIos
                      size={20}
                      className="mb-5 align-middle my-auto"
                    />
                  ) : index.platform.name == "Web" ? (
                    <AiFillChrome
                      size={23}
                      className="mb-5 align-middle my-auto text-primary-400"
                    />
                  ) : (
                    "Others"
                  )}
                </span>
              ))}
            </div>
            <div className="bg-primary-300 h-fit p-3 rounded-lg">
              <span
                className={`font-bold ${
                  metas < 75 && metas > 50
                    ? "text-primary-700"
                    : metas > 75
                    ? "text-primary-800"
                    : metas < 50
                    ? "text-primary-900"
                    : ""
                }`}
              >
                {metas}
              </span>
            </div>
          </div>

          <p className="text-3xl font-bold cursor-pointer hover:text-primary-300">
            {name}
          </p>
          <div className="w-fit h-fit bg-primary-300 text-primary-400 rounded-lg p-2 mt-5">
            <span>{rating}</span>
          </div>
        </div>

        <div className="hidden w-[350px] md:w-[435px] text-sm px-5 pb-5 md:group-hover:block md:group-hover:absolute bg-primary-500 text-primary-600 h-fit mt-[-10px] rounded-b-xl ">
          <div className="flex justify-between text-sm">
            <p>Rating</p>
            <div className="flex gap-2 ml-[30%]">
              <p key={id} className="text-primary-400 underline">
                {esrb?.name}
              </p>
            </div>
          </div>
          <div className="h-[1px] w-full bg-primary-600 my-2"></div>
          <div className="flex justify-between">
            <p>Genres</p>
            <div className="flex gap-2">
              {genre.map((data: any) => (
                <>
                  <p key={id} className="text-primary-400 underline">
                    {data.name}
                  </p>
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
