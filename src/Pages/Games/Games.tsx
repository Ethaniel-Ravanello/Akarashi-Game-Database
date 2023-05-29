import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { Data } from "../../Utils/data";
import axios from "axios";

import Card from "../../Component/Card";
import Spinner from "../../Component/Spinner";

import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Games = () => {
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
  }, [fetching]);

  function goToTop() {
    window.scrollTo({ top: 700, behavior: "smooth" });
  }
  return (
    <div className="w-[100%] h-[100%] mx-auto px-[30px] mt-[150px]">
      <div className="text-primary-400 mt-[20px] text-4xl font-bold mb-8">
        All Games
      </div>

      <div className="flex justify-center flex-wrap mx-auto mb-2 gap-x-8 ">
        {data && loading === false ? (
          data.map((data: Data) => (
            <Card
              key={data.id}
              slug={data.slug}
              id={data.id}
              name={data.name}
              image={data.background_image}
              metas={data.metacritic}
              rating={data.rating}
              platform={data.parent_platforms}
              genre={data.genres}
              esrb={data.esrb_rating}
              realese={data.released}
              added={data.added}
            />
          ))
        ) : (
          <Spinner />
        )}
      </div>

      <div className=" flex w-fit h-[100px] mx-auto mt-20 pt-10">
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
  );
};

export default Games;
