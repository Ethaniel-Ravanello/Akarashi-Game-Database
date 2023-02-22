import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineSearch,
  AiOutlineClose,
} from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

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
        <div className="bg-primary-200 text-primary-400 fixed inset-0 z-50 h-screen w-[350px] duration-300">
          <AiOutlineClose
            size={30}
            className="text-primary-400 absolute top-4 font-bold right-4"
          />
          <h2 className="mt-4 ml-5 font-semibold text-2xl">AKARASHI</h2>
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
