import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

import GameCard from "../../Component/GameCard";
import Spinner from "../../Component/Spinner";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Developer = () => {
  const [developer, setdeveloper] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNum, setPageNum] = useState(1);

  const navigate = useNavigate();

  const getDeveloper = (pageNum: number) => {
    setLoading(true);
    axios
      .get(
        `https://api.rawg.io/api/developers?key=3d27cad6bbee4c88bbdbe0f255aad396&page=${pageNum}`
      )
      .then((res) => {
        setdeveloper(res.data.results);
        console.log(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDeveloper(pageNum);
  }, []);

  return (
    <div className="w-full h-full mt-[120px] px-8">
      <div className="text-primary-400">
        <h1 className="text-3xl md:text-4xl lg:text-7xl font-semibold mb-5">
          Developer
        </h1>
        <div className="flex justify-center gap-x-5 flex-wrap">
          {developer && loading === false ? (
            developer.map((data: any) => (
              <GameCard
                platform={data.name}
                image={data.image_background}
                popular_items={data.games_count}
                id={data.id}
                games={data.games}
                key={data.id}
                onClick={() => {
                  navigate(`/developer/${data.slug}`, {
                    state: {
                      id: data.id,
                      name: data.name,
                    },
                  });
                }}
              />
            ))
          ) : (
            <Spinner />
          )}
        </div>
        <div className=" flex w-fit h-[100px] mx-auto mt-2 pt-2">
          <MdKeyboardArrowLeft
            onClick={() => {
              setPageNum(pageNum - 1);
              getDeveloper(pageNum - 1);
            }}
            className="bg-primary-300 active:bg-primary-200 w-fit h-fit mr-5 text-primary-400 rounded-xl cursor-pointer"
            size={50}
          />

          <p className="text-primary-400 font-bold text-xl pt-[11px]">
            {pageNum}
          </p>

          <MdKeyboardArrowRight
            onClick={() => {
              setPageNum(pageNum + 1);
              getDeveloper(pageNum + 1);
            }}
            className="bg-primary-300 active:bg-primary-200 w-fit h-fit ml-5 text-primary-400 rounded-xl cursor-pointer"
            size={50}
          />
        </div>
      </div>
    </div>
  );
};

export default Developer;
