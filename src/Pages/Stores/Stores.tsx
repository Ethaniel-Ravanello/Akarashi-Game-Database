import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

import GameCard from "../../Component/GameCard";
import Spinner from "../../Component/Spinner";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const stores = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNum, setPageNum] = useState(1);

  const navigate = useNavigate();

  const getStores = (pageNum: number) => {
    setLoading(true);
    axios
      .get(
        `https://api.rawg.io/api/stores?key=3d27cad6bbee4c88bbdbe0f255aad396`
      )
      .then((res) => {
        setStores(res.data.results);
        console.log(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getStores(pageNum);
  }, []);

  return (
    <div className="w-full h-full mt-[100px] px-10">
      <div className="text-primary-400">
        <h1 className="text-3xl md:text-4xl lg:text-7xl font-semibold mb-5">
          Stores
        </h1>
        <div className="flex justify-center flex-wrap gap-x-5">
          {stores && loading === false ? (
            stores.map((data: any) => (
              <GameCard
                platform={data.name}
                image={data.image_background}
                popular_items={data.games_count}
                id={data.id}
                games={data.games}
                key={data.id}
                onClick={() => {
                  navigate(`/stores/${data.slug}`, {
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
    </div>
  );
};

export default stores;
