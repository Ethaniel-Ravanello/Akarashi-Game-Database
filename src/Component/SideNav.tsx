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
            onClick={() => navigate("/games")}
            className="w-fit font-bold text-2xl mt-10 hover:text-primary-600 cursor-pointer"
          >
            All Games
          </h3>
          <h3
            onClick={() => navigate("/")}
            className="w-fit font-bold text-2xl mt-10 hover:text-primary-600 cursor-pointer"
          >
            Following
          </h3>
          <h4
            onClick={() => {
              navigate("/browse");
              setNav(!nav);
            }}
            className="w-fit font-bold text-xl mt-7 hover:text-primary-600 cursor-pointer"
          >
            Browse
          </h4>
          <ul>
            <li
              onClick={() => {
                navigate("/platforms");
                setNav(!nav);
              }}
              className="text-xl group flex font-medium my-4 cursor-pointer"
            >
              <IoGameController
                className="text-primary-400 group-hover:bg-primary-400 group-hover:text-primary-100 w-fit h-fit bg-primary-300 p-1.5 rounded-lg"
                size={25}
              />
              <p className="pt-1.5 ml-2">Platforms</p>
            </li>
            <li
              onClick={() => {
                navigate("/genres");
                setNav(!nav);
              }}
              className="text-xl group flex font-medium my-4 cursor-pointer"
            >
              <BiGame
                className="text-primary-400 group-hover:bg-primary-400 group-hover:text-primary-100 w-fit h-fit bg-primary-300 p-1.5 rounded-lg"
                size={25}
              />
              <p className="pt-1.5 ml-2">Genres</p>
            </li>
            <li
              onClick={() => {
                navigate("/developers");
                setNav(!nav);
              }}
              className="text-xl group flex font-medium my-4 cursor-pointer"
            >
              <IoCodeSlashSharp
                className="text-primary-400 group-hover:bg-primary-400 group-hover:text-primary-100 w-fit h-fit bg-primary-300 p-1.5 rounded-lg"
                size={25}
              />
              <p className="pt-1.5 ml-2">Developers</p>
            </li>
            <li
              onClick={() => {
                navigate("/publishers");
                setNav(!nav);
              }}
              className="text-xl group flex font-medium my-4 cursor-pointer"
            >
              <MdPublish
                className="text-primary-400 group-hover:bg-primary-400 group-hover:text-primary-100 w-fit h-fit bg-primary-300 p-1.5 rounded-lg"
                size={25}
              />
              <p className="pt-1.5 ml-2">Publishers</p>
            </li>
            <li
              onClick={() => {
                navigate("/stores");
                setNav(!nav);
              }}
              className="text-xl group flex font-medium my-4 cursor-pointer"
            >
              <FaStore
                className="text-primary-400 group-hover:bg-primary-400 group-hover:text-primary-100 w-fit h-fit bg-primary-300 p-1.5 rounded-lg"
                size={25}
              />
              <p className="pt-1.5 ml-2">Stores</p>
            </li>
            <li
              onClick={() => {
                navigate("/tags");
                setNav(!nav);
              }}
              className="text-xl group flex font-medium my-4 cursor-pointer"
            >
              <FaHashtag
                className="text-primary-400 group-hover:bg-primary-400 group-hover:text-primary-100 w-fit h-fit bg-primary-300 p-1.5 rounded-lg"
                size={25}
              />
              <p className="pt-1.5 ml-2">Tags</p>
            </li>
          </ul>

          <h4 className="w-fit font-bold text-xl mt-10">Platforms</h4>

          <ul>
            <li
              onClick={() => {
                navigate("/platforms/pc", {
                  state: {
                    id: 4,
                    name: "Pc",
                  },
                });
              }}
              className="text-xl group flex font-medium my-4 cursor-pointer"
            >
              <BsWindows
                className="text-primary-400 group-hover:bg-primary-400 group-hover:text-primary-100 w-fit h-fit bg-primary-300 p-1.5 rounded-lg"
                size={25}
              />
              <p className="pt-1.5 ml-2">PC</p>
            </li>

            <li
              onClick={() => {
                navigate("/platforms/playstation4", {
                  state: {
                    id: 18,
                    name: "Playstation 4",
                  },
                });
                setNav(!nav);
              }}
              className="text-xl group flex font-medium my-4 cursor-pointer"
            >
              <FaPlaystation
                className="text-primary-400 group-hover:bg-primary-400 group-hover:text-primary-100 w-fit h-fit bg-primary-300 p-1.5 rounded-lg"
                size={25}
              />
              <p className="pt-1.5 ml-2">Playstation 4</p>
            </li>

            <li
              onClick={() => {
                navigate("/platforms/xbox-one", {
                  state: {
                    id: 1,
                    name: "Xbox One",
                  },
                });
                setNav(!nav);
              }}
              className="text-xl group flex font-medium my-4 cursor-pointer"
            >
              <FaXbox
                className="text-primary-400 group-hover:bg-primary-400 group-hover:text-primary-100 w-fit h-fit bg-primary-300 p-1.5 rounded-lg"
                size={25}
              />
              <p className="pt-1.5 ml-2">Xbox One</p>
            </li>

            <li
              onClick={() => {
                navigate("/platforms/nintendo-switch", {
                  state: {
                    id: 7,
                    name: "Nintendo Switch",
                  },
                });
                setNav(!nav);
              }}
              className="text-xl group flex font-medium my-4 cursor-pointer"
            >
              <SiNintendoswitch
                className="text-primary-400 group-hover:bg-primary-400 group-hover:text-primary-100 w-fit h-fit bg-primary-300 p-1.5 rounded-lg"
                size={25}
              />
              <p className="pt-1.5 ml-2 w-full">Nintendo Switch</p>
            </li>

            <li
              onClick={() =>
                navigate("/platforms/ios", {
                  state: {
                    id: 3,
                    name: "iOs",
                  },
                })
              }
              className="text-xl group flex font-medium my-4 cursor-pointer"
            >
              <AiFillApple
                className="text-primary-400 group-hover:bg-primary-400 group-hover:text-primary-100 w-fit h-fit bg-primary-300 p-1.5 rounded-lg"
                size={25}
              />
              <p className="pt-1.5 ml-2">iOS</p>
            </li>

            <li
              onClick={() => {
                navigate("/platforms/android", {
                  state: {
                    id: 21,
                    name: "Android",
                  },
                });
                setNav(!nav);
              }}
              className="text-xl group flex font-medium my-4 cursor-pointer"
            >
              <AiFillAndroid
                className="text-primary-400 group-hover:bg-primary-400 group-hover:text-primary-100 w-fit h-fit bg-primary-300 p-1.5 rounded-lg"
                size={25}
              />
              <p className="pt-1.5 ml-2">Android</p>
            </li>
          </ul>

          <h4 className="w-fit font-bold text-xl mt-10">Genre</h4>
          <ul>
            <li
              onClick={() => {
                navigate("/genres/action", {
                  state: {
                    id: 4,
                    name: "Action",
                  },
                });
                setNav(!nav);
              }}
              className="text-xl group flex font-medium my-4 cursor-pointer"
            >
              <img
                src="https://d2.alternativeto.net/dist/s/nier-automata_527481_full.jpg?format=jpg&width=1200&height=1200&mode=crop"
                className="w-[35px] h-[35px] rounded-lg object-cover"
              />
              <p className="pt-1 ml-2">Action</p>
            </li>
            <li
              onClick={() => {
                navigate("/genres/strategy", {
                  state: {
                    id: 10,
                    name: "Strategy",
                  },
                });
                setNav(!nav);
              }}
              className="text-xl group flex font-medium my-4 cursor-pointer"
            >
              <img
                src="https://i2.wp.com/www.pcgamespunch.com/wp-content/uploads/2013/08/Arma-3.jpg?fit=1920%2C1080https://i2.wp.com/www.pcgamespunch.com/wp-content/uploads/2013/08/Arma-3.jpg?fit=1920%2C1080"
                className="w-[35px] h-[35px] rounded-lg object-cover"
              />
              <p className="pt-1 ml-2">Strategy</p>
            </li>
            <li
              onClick={() => {
                navigate("/genres/rpg", {
                  state: {
                    id: 5,
                    name: "RPG",
                  },
                });
                setNav(!nav);
              }}
              className="text-xl group flex font-medium my-4 cursor-pointer"
            >
              <img
                src="https://images4.alphacoders.com/608/608644.png"
                className="w-[35px] h-[35px] rounded-lg object-cover"
              />
              <p className="pt-1.5 ml-2">RPG</p>
            </li>
            <li className="text-xl group flex font-medium my-4 cursor-pointer">
              <img
                src="https://wallpaperaccess.com/full/152246.jpg"
                className="w-[35px] h-[35px] rounded-lg object-cover"
              />
              <p className="pt-1.5 ml-2">Shooter</p>
            </li>
            <li
              onClick={() => {
                navigate("/genres/adventure", {
                  state: {
                    id: 3,
                    name: "Adventure",
                  },
                });
                setNav(!nav);
              }}
              className="text-xl group flex font-medium my-4 cursor-pointer"
            >
              <img
                src="https://static3.srcdn.com/wordpress/wp-content/uploads/2020/09/Horizon-Zero-Dawn-PC-Aloy-scratching-her-head.jpg"
                className="w-[35px] h-[35px] rounded-lg object-cover"
              />
              <p className="pt-1.5 ml-2">Adventure</p>
            </li>
            <li
              onClick={() => {
                navigate("/genres/puzzle", {
                  state: {
                    id: 7,
                    name: "Puzzle",
                  },
                });
                setNav(!nav);
              }}
              className="text-xl group flex font-medium my-4 cursor-pointer"
            >
              <img
                src="https://www.gameshub.com/wp-content/uploads/sites/5/2022/09/legend-of-zelda-tears-of-the-kingdom.jpeg"
                className="w-[35px] h-[35px] rounded-lg object-cover"
              />
              <p className="pt-1.5 ml-2">Puzzle</p>
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
};

export default SideNav;
