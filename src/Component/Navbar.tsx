import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillApple,
  AiFillAndroid,
} from "react-icons/ai";
import { BiGame } from "react-icons/bi";
import { SiNintendoswitch } from "react-icons/si";
import { MdPublish } from "react-icons/md";
import { FaStore, FaHashtag, FaPlaystation, FaXbox } from "react-icons/fa";
import { BsPeopleFill, BsWindows } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoGameController, IoCodeSlashSharp } from "react-icons/io5";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="max-w-[1920] px-[30px] mx-auto h-[100px] bg-primary-100 grid grid-cols-3">
      <div className="flex">
        <RxHamburgerMenu
          size={30}
          className="text-primary-400 w-fit h-fit pt-9 md:mr-10"
        />
        {/* Side Nav */}
        <div className="bg-primary-100/80 fixed w-full h-screen z-20 inset-0"></div>
        <div className="bg-primary-200 text-primary-400 pl-10  fixed inset-0 z-50 h-screen w-[300px] duration-300 overflow-y-scroll scrollbar-thin scrollbar-thumb-primary-400">
          <AiOutlineClose
            size={30}
            className="text-primary-400 absolute top-4 font-bold right-4"
          />
          <h2 className="mt-4 font-semibold text-2xl">AKARASHI</h2>
          <aside className="">
            <h3 className="w-fit font-bold text-2xl mt-10">Home</h3>
            <h3 className="w-fit font-bold text-2xl mt-10">All Games</h3>
            <h4 className="w-fit font-bold text-xl mt-7">Browse</h4>
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
                <p className="pt-1.5 ml-2">Genres</p>
              </li>
              <li className="text-xl group flex font-medium my-4 cursor-pointer">
                <IoCodeSlashSharp
                  className="text-primary-400 group-hover:bg-primary-400 group-hover:text-primary-100 w-fit h-fit bg-primary-300 p-1.5 rounded-lg"
                  size={25}
                />
                <p className="pt-1.5 ml-2">Developers</p>
              </li>
              <li className="text-xl group flex font-medium my-4 cursor-pointer">
                <BsPeopleFill
                  className="text-primary-400 group-hover:bg-primary-400 group-hover:text-primary-100 w-fit h-fit bg-primary-300 p-1.5 rounded-lg"
                  size={25}
                />
                <p className="pt-1.5 ml-2">Creator</p>
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
        {/* Side Nav */}
        <h1 className="text-xl hidden md:flex lg:text-3xl align-middle my-auto w-fit h-fit py-4 text-primary-400 font-bold">
          A K A R A S H I
        </h1>
      </div>
      <div className="my-auto ml-[-55px] md:ml-0">
        <div className="relative ml-5">
          <div className="absolute top-3 left-4 ">
            <AiOutlineSearch size={18} className="text-primary-400" />
          </div>
          <input
            type="text"
            className="w-[230px] md:w-[350px] lg:w-[400px] xl:w-[500px] 2xl:w-[700px] h-[40px] bg-primary-200 text-primary-400 rounded-xl pl-10 justify-center"
            placeholder="Search A Game"
          />
        </div>
      </div>
      <div className="lg:flex justify-evenly my-auto hidden">
        <a
          href="https://www.linkedin.com/in/ethaniel-ravanello-a60810251/"
          target="_blank"
        >
          <AiFillLinkedin className="text-primary-400 my-auto" size={50} />
        </a>
        <a href="https://github.com/FE10-Ethaniel-Ravanello" target="_blank">
          <AiFillGithub className="text-primary-400 my-auto" size={50} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
