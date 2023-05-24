import { useState } from "react";

import Genres from "../Dummy/Genres";
import type { PropsBrowse } from "../Utils/browse";

import BrowseCard from "../Component/BrowseCard";
import Spinner from "../Component/Spinner";

const Browse = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <div className="text-primary-400 w-[100%] h-[100%] pl-8">
        <h1 className="text-6xl font-bold mt-[120px] mb-10">Browse</h1>
        <h2 className="text-4xl font-bold mb-5">Genres</h2>
        <div className="flex gap-x-5 justify-around flex-wrap mb-2">
          {Genres && loading === false ? (
            Genres.map((data: PropsBrowse) => (
              <BrowseCard
                platform={data.platform}
                popular_items={data.popular_items}
                image={data.image}
                game1={data.game1}
                game2={data.game2}
                game3={data.game3}
              />
            ))
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </>
  );
};

export default Browse;
