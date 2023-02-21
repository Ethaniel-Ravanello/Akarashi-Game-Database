import React from "react";
import { AiFillLinkedin, AiFillGithub, AiOutlineSearch } from "react-icons/ai";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="max-w-[1920] px-[30px] mx-auto h-[100px] bg-primary-100 grid grid-cols-3">
      <h1 className="text-xl lg:text-3xl align-middle my-auto w-fit h-fit py-4 text-primary-400 font-bold">
        A K A R A S H I
      </h1>
      <div className="mx-auto my-auto">
        <div className="relative ml-5">
          <div className="absolute top-3 left-4 ">
            <AiOutlineSearch size={18} className="text-primary-400" />
          </div>
          <input
            type="text"
            className="w-[50vw] max-w-[600px] h-[40px] bg-primary-200 text-primary-400 rounded-xl pl-10 justify-center"
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
