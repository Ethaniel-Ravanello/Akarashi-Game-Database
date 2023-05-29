import { useNavigate } from "react-router";

import {
  AiFillApple,
  AiFillAndroid,
  AiFillChrome,
  AiOutlinePlus,
} from "react-icons/ai";
import { FaPlaystation, FaXbox } from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";
import { RiComputerLine } from "react-icons/ri";
import { FaAppStoreIos } from "react-icons/fa";
import { DiLinux } from "react-icons/di";

type Props = {
  id: number;
  name: string;
  slug: string;
  image: string;
  metas: number;
  rating: number;
  platform: any;
  genre: any;
  esrb: any;
  realese: string;
  added: number;
};

const Card = ({
  id,
  name,
  slug,
  image,
  metas,
  rating,
  platform,
  genre,
  esrb,
  realese,
  added,
}: Props) => {
  const navigate = useNavigate();
  console.log(slug);
  return (
    <div
      key={id}
      className="bg-primary-500 group text-primary-400 mb-5 w-[350px] md:w-[435px] h-fit rounded-xl lg:hover:transition lg:hover:ease-in-out  lg:hover:-translate-y-1 lg:hover:scale-110 duration-300"
    >
      <div className="mb-5">
        <img
          src={image}
          loading="lazy"
          className="rounded-t-xl"
          alt="Game Card"
        />
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

        <p
          onClick={() =>
            navigate(`/games/${slug}`, {
              state: {
                name: name,
                id: id,
                slug: slug,
              },
            })
          }
          className="w-fit text-3xl font-bold cursor-pointer hover:text-primary-300"
        >
          {name}
        </p>
        <div className="w-full h-fit flex justify-between text-primary-400 rounded-lg p-2 mt-5">
          <span className="bg-primary-300 py-2 px-3 font-semibold rounded-lg">
            {rating}
          </span>
          <div className="flex bg-primary-300 py-2 px-3 font-semibold rounded-lg">
            <AiOutlinePlus
              size={22}
              fontWeight={30}
              className="font-bold mr-3"
            />
            <p className="">{added.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div className="hidden w-[350px] md:w-[435px] text-sm px-5 pb-5 md:group-hover:block md:group-hover:absolute bg-primary-500 text-primary-600 h-fit mt-[-10px] rounded-b-xl ">
        <div className="flex justify-between text-sm">
          <p>Rating</p>
          <div className="flex gap-2 ml-[30%]">
            <p
              key={id}
              className="text-primary-400 underline cursor-pointer hover:text-primary-600"
            >
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
                <p
                  key={id}
                  className="text-primary-400 underline cursor-pointer hover:text-primary-600"
                >
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
  );
};

export default Card;
