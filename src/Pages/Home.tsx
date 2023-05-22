import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { Data } from "../Utils/data";
import axios from "axios";

import Card from "../Component/Card";
import Spinner from "../Component/Spinner";

import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const filter = useSelector((state: any) => state.gameFilter.filter);
  const fetching = useSelector((state: any) => state.gameRefetch.refetch);

  const getData = (pageNum: number) => {
    setLoading(true);
    axios
      .get(
        `https://api.rawg.io/api/games?key=3d27cad6bbee4c88bbdbe0f255aad396&page=${pageNum}&search=${filter}`
      )
      .then((res) => {
        setData(res.data.results);
        console.log(res.data.results);
        setLoading(false);
      });
  };

  useEffect(() => {
    getData(page);
    setPage(1);
    getData(1);
  }, [fetching]);

  function goToTop() {
    window.scrollTo({ top: 700, behavior: "smooth" });
  }

  return (
    <div>
      <div className="max-w-[1920px] h-[80vh] mx-auto relative">
        <div className=" h-full rounded-xl bg-[url('./Banner.jpg')] bg-fixed">
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
      <div className="w-[100%] h-[80vh] mx-auto px-[30px]">
        <div className="text-primary-400 mt-[20px] text-4xl font-bold mb-8">
          Popular Games
        </div>

        <div className="flex justify-around flex-wrap mx-auto mb-2 gap-x-8 ">
          {data && loading === false ? (
            data.map((data: Data) => (
              <Card
                key={data.id}
                id={data.id}
                name={data.name}
                image={data.background_image}
                metas={data.metacritic}
                rating={data.rating}
                platform={data.parent_platforms}
                genre={data.genres}
                esrb={data.esrb_rating}
                realese={data.released}
              />
            ))
          ) : (
            <Spinner />
          )}
        </div>

        <div className=" flex w-fit h-[200px] mx-auto mt-20 pt-10 mb-10">
          <MdKeyboardArrowLeft
            onClick={() => {
              setPage(page - 1);
              getData(page - 1);
              goToTop();
            }}
            className="bg-primary-300 active:bg-primary-200 w-fit h-fit mr-5 text-primary-400 rounded-xl cursor-pointer"
            size={50}
          />

          <p className="text-primary-400 font-bold text-xl pt-[11px]">{page}</p>

          <MdKeyboardArrowRight
            onClick={() => {
              setPage(page + 1);
              getData(page + 1);
              goToTop();
            }}
            className="bg-primary-300 active:bg-primary-200 w-fit h-fit ml-5 text-primary-400 rounded-xl cursor-pointer"
            size={50}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
