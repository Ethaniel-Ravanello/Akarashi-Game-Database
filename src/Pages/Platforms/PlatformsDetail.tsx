import { useLocation } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";

import Card from "../../Component/Card";
import Spinner from "../../Component/Spinner";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const PlatformsDetail = () => {
  const { state } = useLocation();
  const { name, id } = state;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const getData = (pageNum: number) => {
    setLoading(true);
    axios
      .get(
        `https://api.rawg.io/api/games?key=3d27cad6bbee4c88bbdbe0f255aad396&page=${pageNum}&platforms=${id}`
      )
      .then((res) => {
        setData(res.data.results);
        console.log(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData(page);
  }, [id, name]);
  return (
    <div className="text-primary-400  mt-[130px] px-[1.5em]">
      <h1 className="text-5xl mb-10">Games for {name}</h1>
      <div className="flex justify-around flex-wrap gapx-x-5">
        {data && loading === false ? (
          data.map((data: any) => (
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
          }}
          className="bg-primary-300 active:bg-primary-200 w-fit h-fit mr-5 text-primary-400 rounded-xl cursor-pointer"
          size={50}
        />

        <p className="text-primary-400 font-bold text-xl pt-[11px]">{page}</p>

        <MdKeyboardArrowRight
          onClick={() => {
            setPage(page + 1);
            getData(page + 1);
          }}
          className="bg-primary-300 active:bg-primary-200 w-fit h-fit ml-5 text-primary-400 rounded-xl cursor-pointer"
          size={50}
        />
      </div>
    </div>
  );
};

export default PlatformsDetail;
