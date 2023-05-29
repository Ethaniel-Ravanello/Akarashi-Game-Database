import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

import GameCard from "../../Component/GameCard";
import Spinner from "../../Component/Spinner";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const tags = () => {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNum, setPageNum] = useState(1);

  const navigate = useNavigate();

  const getTags = (pageNum: number) => {
    setLoading(true);
    axios
      .get(
        `https://api.rawg.io/api/tags?key=3d27cad6bbee4c88bbdbe0f255aad396&page=${pageNum}`
      )
      .then((res) => {
        setTags(res.data.results);
        console.log(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTags(pageNum);
  }, []);

  return (
    <div className="w-full h-full mt-[100px] px-10">
      <div className="text-primary-400">
        <h1 className="text-3xl md:text-4xl lg:text-7xl font-semibold mb-5">
          Tags
        </h1>
        <div className="flex justify-center flex-wrap gap-x-5">
          {tags && loading === false ? (
            tags.map((data: any) => (
              <GameCard
                platform={data.name}
                image={data.image_background}
                popular_items={data.games_count}
                id={data.id}
                games={data.games}
                key={data.id}
                onClick={() => {
                  navigate(`/tags/${data.slug}`, {
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
      </div>
      <div className=" flex w-fit h-[100px] mx-auto mt-2 pt-2">
        <MdKeyboardArrowLeft
          onClick={() => {
            setPageNum(pageNum - 1);
            getTags(pageNum - 1);
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
            getTags(pageNum + 1);
          }}
          className="bg-primary-300 active:bg-primary-200 w-fit h-fit ml-5 text-primary-400 rounded-xl cursor-pointer"
          size={50}
        />
      </div>
    </div>
  );
};

export default tags;
