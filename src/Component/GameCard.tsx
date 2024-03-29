import { PropsBrowse } from "../Utils/browse";

import { BsPerson } from "react-icons/bs";

interface GameCard {
  platform: string;
  image: string;
  popular_items: string;
  games: any;
  onClick: any;
  id: number;
}

const GameCard = ({
  platform,
  image,
  popular_items,
  games,
  onClick,
  id,
}: GameCard) => {
  return (
    <div>
      <div className="relative w-[300px] md:w-[440px] h-fit pb-3 rounded-lg mb-10">
        <>
          <img
            src={image}
            className="w-full h-full object-cover absolute -z-10 inset-0 rounded-lg"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-transparent via-primary-100 to-primary-100 opacity-90 rounded-b-lg"></div>

          <div className="z-20 relative">
            <div className="w-fit mx-auto">
              <h1
                onClick={onClick}
                className="text-2xl font-bold flex justify-center pt-[3em] mb-1 cursor-pointer hover:text-primary-600"
              >
                {platform}
              </h1>
              <div className="w-full h-[2px] bg-primary-400 mb-3"></div>
            </div>

            <button className="flex justify-center bg-primary-400/30 hover:bg-primary-400 hover:text-primary-100 backdrop-blur-xl py-3 px-8 w-fit h-fit mx-auto rounded-lg mb-5">
              Follow
            </button>

            <div className="px-3">
              <div className="flex justify-between mb-2">
                <p>Popular Items</p>
                <p>{popular_items}</p>
              </div>

              <div className="w-full h-[2px] bg-primary-600 mb-3"></div>

              {games.slice(0, 3).map((data: any) => (
                <div key={data.id} className="flex justify-between my-2">
                  <p className="hover:text-primary-600 underline underline-offset-4 cursor-pointer max-w-[180px] md:max-w-[250px]">
                    {data.name}
                  </p>
                  <div className="flex w-[80px] justify-between">
                    <BsPerson className="mt-1 mr-2" />
                    <p>{data.added}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default GameCard;
