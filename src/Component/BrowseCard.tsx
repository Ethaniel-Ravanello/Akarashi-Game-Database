import React from "react";

const BrowseCard = () => {
  return (
    <div>
      <div className="relative w-[350px] md:w-[450px] h-[350px] rounded-lg">
        <div className="z-10">
          <img
            src="https://wallpapercave.com/wp/wp11520704.jpg"
            className="w-full h-full object-cover absolute -z-10 inset-0 rounded-lg"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-transparent via-primary-100 to-primary-100 opacity-90 rounded-b-lg"></div>
        </div>

        <div className="w-full h-full z-20 relative">
          <h1 className="text-5xl font-bold flex justify-center items-center">
            PC
          </h1>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default BrowseCard;
