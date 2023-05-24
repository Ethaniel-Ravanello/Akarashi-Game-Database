import { useState } from "react";

import Genres from "../Dummy/Genres";
import Developer from "../Dummy/Developer";
import Platform from "../Dummy/Platform";
import Publisher from "../Dummy/Publisher";
import Store from "../Dummy/Stores";
import Tags from "../Dummy/Tags";
import type { PropsBrowse } from "../Utils/browse";

import BrowseCard from "../Component/BrowseCard";
import Spinner from "../Component/Spinner";

const Browse = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <div className="text-primary-400 w-[100%] h-[100%] pl-8">
        <h1 className="text-6xl font-bold mt-[120px] mb-10">Browse</h1>

        <div>
          <h2 className="text-4xl font-bold mb-5">Genres</h2>
          <div className="flex gap-x-5 justify-around flex-wrap mb-2 pr-3">
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

        <div>
          <h2 className="text-4xl font-bold mb-5">Developer</h2>
          <div className="flex gap-x-5 justify-around flex-wrap mb-2 pr-3">
            {Developer && loading === false ? (
              Developer.map((data: PropsBrowse) => (
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

        <div>
          <h2 className="text-4xl font-bold mb-5">Platform</h2>
          <div className="flex gap-x-5 justify-around flex-wrap mb-2 pr-3">
            {Platform && loading === false ? (
              Platform.map((data: PropsBrowse) => (
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

        <div>
          <h2 className="text-4xl font-bold mb-5">Publisher</h2>
          <div className="flex gap-x-5 justify-around flex-wrap mb-2 pr-3">
            {Publisher && loading === false ? (
              Publisher.map((data: PropsBrowse) => (
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

        <div>
          <h2 className="text-4xl font-bold mb-5">Store</h2>
          <div className="flex gap-x-5 justify-around flex-wrap mb-2 pr-3">
            {Store && loading === false ? (
              Store.map((data: PropsBrowse) => (
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

        <div>
          <h2 className="text-4xl font-bold mb-5">Tags</h2>
          <div className="flex gap-x-5 justify-around flex-wrap mb-2 pr-3">
            {Tags && loading === false ? (
              Tags.map((data: PropsBrowse) => (
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
      </div>
    </>
  );
};

export default Browse;
