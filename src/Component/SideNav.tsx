import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

import { AiOutlineClose, AiFillApple, AiFillAndroid } from "react-icons/ai";
import { BiGame } from "react-icons/bi";
import { SiNintendoswitch } from "react-icons/si";
import { MdPublish } from "react-icons/md";
import { FaStore, FaHashtag, FaPlaystation, FaXbox } from "react-icons/fa";
import { BsPeopleFill, BsWindows } from "react-icons/bs";
import { IoGameController, IoCodeSlashSharp } from "react-icons/io5";

type Props = {
  nav: boolean;
  setNav: Dispatch<SetStateAction<boolean>>;
};

const SideNav = ({ nav, setNav }: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className={
          nav ? "bg-primary-100/80 fixed w-full h-screen z-20 inset-0" : ""
        }
      ></div>
      <div
        className={
          nav
            ? "bg-primary-200 text-primary-400 pl-10  fixed inset-0 z-50 h-screen w-[300px] duration-300 overflow-y-scroll scrollbar-thin scrollbar-thumb-primary-400"
            : "bg-primary-200 text-primary-400 pl-10  fixed left-[-300px] z-50 h-screen w-[300px] duration-300 overflow-y-scroll scrollbar-thin scrollbar-thumb-primary-400"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="text-primary-400 absolute top-4 font-bold right-4 cursor-pointer"
        />
        <h2 className="mt-4 font-semibold text-2xl">AKARASHI</h2>
        <aside className="">
          <h3
            onClick={() => navigate("/")}
            className="w-fit font-bold text-2xl mt-10 hover:text-primary-600 cursor-pointer"
          >
            Home
          </h3>
          <h3
            onClick={() => navigate("/")}
            className="w-fit font-bold text-2xl mt-10 hover:text-primary-600 cursor-pointer"
          >
            Following
          </h3>
          <h3 className="w-fit font-bold text-2xl mt-10 hover:text-primary-600 cursor-pointer">
            All Games
          </h3>
          <h4
            onClick={() => navigate("/browse")}
            className="w-fit font-bold text-xl mt-7 hover:text-primary-600 cursor-pointer"
          >
            Browse
          </h4>
          <ul>
            <li className="text-xl group flex font-medium my-4 cursor-pointer">
              <IoGameController
                className="text-primary-400 group-hover:bg-primary-400 group-hover:text-primary-100 w-fit h-fit bg-primary-300 p-1.5 rounded-lg"
                size={25}
              />
              <p className="pt-1.5 ml-2">Platforms</p>
            </li>
            <li className="text-xl group flex font-medium my-4 cursor-pointer">
              <BiGame
                className="text-primary-400 group-hover:bg-primary-400 group-hover:text-primary-100 w-fit h-fit bg-primary-300 p-1.5 rounded-lg"
                size={25}
              />
              <p onClick={() => navigate("/genres")} className="pt-1.5 ml-2">
                Genres
              </p>
            </li>
            <li className="text-xl group flex font-medium my-4 cursor-pointer">
              <IoCodeSlashSharp
                className="text-primary-400 group-hover:bg-primary-400 group-hover:text-primary-100 w-fit h-fit bg-primary-300 p-1.5 rounded-lg"
                size={25}
              />
              <p className="pt-1.5 ml-2">Developers</p>
            </li>
            <li className="text-xl group flex font-medium my-4 cursor-pointer">
              <MdPublish
                className="text-primary-400 group-hover:bg-primary-400 group-hover:text-primary-100 w-fit h-fit bg-primary-300 p-1.5 rounded-lg"
                size={25}
              />
              <p className="pt-1.5 ml-2">Publishers</p>
            </li>
            <li className="text-xl group flex font-medium my-4 cursor-pointer">
              <FaStore
                className="text-primary-400 group-hover:bg-primary-400 group-hover:text-primary-100 w-fit h-fit bg-primary-300 p-1.5 rounded-lg"
                size={25}
              />
              <p className="pt-1.5 ml-2">Stores</p>
            </li>
            <li className="text-xl group flex font-medium my-4 cursor-pointer">
              <FaHashtag
                className="text-primary-400 group-hover:bg-primary-400 group-hover:text-primary-100 w-fit h-fit bg-primary-300 p-1.5 rounded-lg"
                size={25}
              />
              <p className="pt-1.5 ml-2">Tags</p>
            </li>
          </ul>
          <h4 className="w-fit font-bold text-xl mt-10">Platforms</h4>
          <ul>
            <li className="text-xl group flex font-medium my-4 cursor-pointer">
              <BsWindows
                className="text-primary-400 group-hover:bg-primary-400 group-hover:text-primary-100 w-fit h-fit bg-primary-300 p-1.5 rounded-lg"
                size={25}
              />
              <p className="pt-1.5 ml-2">PC</p>
            </li>
            <li className="text-xl group flex font-medium my-4 cursor-pointer">
              <FaPlaystation
                className="text-primary-400 group-hover:bg-primary-400 group-hover:text-primary-100 w-fit h-fit bg-primary-300 p-1.5 rounded-lg"
                size={25}
              />
              <p className="pt-1.5 ml-2">Playstation 4</p>
            </li>
            <li className="text-xl group flex font-medium my-4 cursor-pointer">
              <FaXbox
                className="text-primary-400 group-hover:bg-primary-400 group-hover:text-primary-100 w-fit h-fit bg-primary-300 p-1.5 rounded-lg"
                size={25}
              />
              <p className="pt-1.5 ml-2">Xbox One</p>
            </li>
            <li className="text-xl group flex font-medium my-4 cursor-pointer">
              <SiNintendoswitch
                className="text-primary-400 group-hover:bg-primary-400 group-hover:text-primary-100 w-fit h-fit bg-primary-300 p-1.5 rounded-lg"
                size={25}
              />
              <p className="pt-1.5 ml-2 w-full">Nintendo Switch</p>
            </li>
            <li className="text-xl group flex font-medium my-4 cursor-pointer">
              <AiFillApple
                className="text-primary-400 group-hover:bg-primary-400 group-hover:text-primary-100 w-fit h-fit bg-primary-300 p-1.5 rounded-lg"
                size={25}
              />
              <p className="pt-1.5 ml-2">iOS</p>
            </li>
            <li className="text-xl group flex font-medium my-4 cursor-pointer">
              <AiFillAndroid
                className="text-primary-400 group-hover:bg-primary-400 group-hover:text-primary-100 w-fit h-fit bg-primary-300 p-1.5 rounded-lg"
                size={25}
              />
              <p className="pt-1.5 ml-2">Android</p>
            </li>
          </ul>
          <h4 className="w-fit font-bold text-xl mt-10">Genre</h4>
          <ul>
            <li className="text-xl group flex font-medium my-4 cursor-pointer">
              <BsWindows
                className="text-primary-400 group-hover:bg-primary-400 group-hover:text-primary-100 w-fit h-fit bg-primary-300 p-1.5 rounded-lg"
                size={25}
              />
              <p className="pt-1.5 ml-2">PC</p>
            </li>
            <li className="text-xl group flex font-medium my-4 cursor-pointer">
              <FaPlaystation
                className="text-primary-400 group-hover:bg-primary-400 group-hover:text-primary-100 w-fit h-fit bg-primary-300 p-1.5 rounded-lg"
                size={25}
              />
              <p className="pt-1.5 ml-2">Playstation 4</p>
            </li>
            <li className="text-xl group flex font-medium my-4 cursor-pointer">
              <FaXbox
                className="text-primary-400 group-hover:bg-primary-400 group-hover:text-primary-100 w-fit h-fit bg-primary-300 p-1.5 rounded-lg"
                size={25}
              />
              <p className="pt-1.5 ml-2">Xbox One</p>
            </li>
            <li className="text-xl group flex font-medium my-4 cursor-pointer">
              <SiNintendoswitch
                className="text-primary-400 group-hover:bg-primary-400 group-hover:text-primary-100 w-fit h-fit bg-primary-300 p-1.5 rounded-lg"
                size={25}
              />
              <p className="pt-1.5 ml-2">Nintendo Switch</p>
            </li>
            <li className="text-xl group flex font-medium my-4 cursor-pointer">
              <AiFillApple
                className="text-primary-400 group-hover:bg-primary-400 group-hover:text-primary-100 w-fit h-fit bg-primary-300 p-1.5 rounded-lg"
                size={25}
              />
              <p className="pt-1.5 ml-2">iOS</p>
            </li>
            <li className="text-xl group flex font-medium my-4 cursor-pointer">
              <AiFillAndroid
                className="text-primary-400 group-hover:bg-primary-400 group-hover:text-primary-100 w-fit h-fit bg-primary-300 p-1.5 rounded-lg"
                size={25}
              />
              <p className="pt-1.5 ml-2">Android</p>
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
};

export default SideNav;
