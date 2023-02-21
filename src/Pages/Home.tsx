import React, { useEffect, useState } from "react";
import Card from "../Component/Card";

type Props = {};

const Home = (props: Props) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const value = await fetch(
      `https://api.rawg.io/api/games?key=3d27cad6bbee4c88bbdbe0f255aad396&page=1`
    );
    const datas = await value.json();
    console.log(datas.results);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="max-w-[1920px] h-[80vh] mx-auto relative">
        <div className="h-full">
          <img
            className="h-full mx-auto rounded-lg inset-0 aboslute object-cover object-top bg-opacity-10"
            src="./Banner.jpg"
            alt=""
          />
          <div className=" w-full h-full inset-0 absolute bg-primary-100 bg-opacity-75"></div>
        </div>

        <div className="absolute mt-[200px] inset-0 text-center">
          <h1 className=" text-3xl text-primary-400 font-semibold">
            WE ARE AKARASHI
          </h1>
          <h3 className=" text-1xl lg:text-3xl max-w-[500px] w-fit mt-[40px] mx-auto text-primary-400">
            A Website where you can find any information about game, game
            developer, news, upcoming Game and many more
          </h3>
        </div>
      </div>
      <div className="w-[100%] h-[80vh] mx-auto px-[30px]">
        <div className="text-primary-400 mt-[20px] text-5xl font-medium mb-5">
          Popular Games
        </div>
        <Card />
      </div>
    </>
  );
};

export default Home;
