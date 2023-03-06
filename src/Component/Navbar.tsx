import { useState } from "react";

import SideNav from "./SideNav";

import { AiFillLinkedin, AiFillGithub, AiOutlineSearch } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../features/searchSlice";
import { PayloadAction } from "@reduxjs/toolkit";

type Props = {
  state: PayloadAction;
  gameFilter: string;
  filter: string;
};

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);

  const filter = useSelector((state: Props) => state.gameFilter.filter);
  const dispatch = useDispatch();

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
    }
  };

  return (
    <div className="max-w-[1920] px-[30px] mx-auto h-[100px] bg-primary-100 grid grid-cols-3">
      <div className="flex">
        <RxHamburgerMenu
          onClick={() => setNav(!nav)}
          size={30}
          className="text-primary-400 w-fit h-fit pt-9 md:mr-10 cursor-pointer"
        />
        {/* Side Nav */}
        <SideNav nav={nav} setNav={setNav} />
        {/* Side Nav */}
        <h1 className="text-xl hidden md:flex lg:text-3xl align-middle my-auto w-fit h-fit py-4 text-primary-400 font-bold">
          A K A R A S H I
        </h1>
      </div>
      <div className="my-auto ml-[-55px] md:ml-0">
        <div className="relative ml-5">
          <div className="absolute top-4 left-4 ">
            <AiOutlineSearch size={20} className="text-primary-400" />
          </div>
          <input
            onChange={(e) => dispatch(setFilter(e.target.value))}
            value={filter}
            type="text"
            className="w-[230px] md:w-[350px] lg:w-[400px] xl:w-[500px] 2xl:w-[700px] h-[50px] bg-primary-200 text-primary-400 rounded-xl pl-10 justify-center"
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
