import React, { useEffect, useState } from "react";
import Card from "../Component/Card";

type Props = {};

const Home = (props: Props) => {
  const [data, setData] = useState([]);

  // const getData = async () => {
  //   const value = await fetch(
  //     `https://api.rawg.io/api/games?key=3d27cad6bbee4c88bbdbe0f255aad396&page=1`
  //   );
  //   const datas = await value.json();
  //   console.log(datas.results);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <>
      <div className="max-w-[1920px] h-[80vh] mx-auto relative">
        <div className="h-full rounded-xl">
          <img
            className="h-full w-full mx-auto rounded-xl inset-0 aboslute object-cover object-top bg-opacity-90 px-5"
            src="./Banner.jpg"
            alt=""
          />
          <div className=" w-full h-full inset-0 absolute rounded-xl bg-primary-100 bg-opacity-80"></div>
        </div>

        <div className="absolute mt-[200px] inset-0 text-center">
          <h1 className=" text-3xl lg:text-9xl text-primary-400 font-semibold">
            THIS IS AKARASHI
          </h1>
          <p className=" text-1xl lg:text-3xl leading-8 w-fit max-w-[550px] px-5 mt-[40px] mx-auto text-primary-400">
            A Website where you can find any information about game, game
            developer, news, upcoming Game and many more
          </p>
        </div>
      </div>
      <div className="w-[100%] h-[80vh] mx-auto px-[10px]">
        <div className="text-primary-400 mt-[20px] text-4xl font-bold mb-8">
          Popular Games
        </div>
        <div className="grid mx-auto grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Home;
