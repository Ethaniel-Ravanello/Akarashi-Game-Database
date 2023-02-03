import React, { useEffect, useState } from "react";

type Props = {};

const Home = (props: Props) => {
	const [data, setData] = useState([]);

	// const getData = async () => {
	// 	const value = await fetch(
	// 		`https://api.rawg.io/api/games?key=3d27cad6bbee4c88bbdbe0f255aad396&page=1`
	// 	);
	// 	const datas = await value.json();
	// 	console.log(datas.results);
	// };

	// useEffect(() => {
	// 	getData();
	// }, []);

	return (
		<>
			<div className="w-[100%] h-[80vh] mx-auto relative">
				<img
					className="w-full h-full rounded-lg inset-0 aboslute object-cover object-top bg-opacity-10"
					src="./Banner.jpg"
					alt=""
				/>
				<div className=" w-full h-full inset-0 absolute bg-primary-100 bg-opacity-75"></div>
				<div className="absolute mt-[200px] inset-0 text-center">
					<h1 className=" text-6xl text-primary-400 font-semibold">
						WE ARE AKARASHI
					</h1>
					<h3 className=" text-3xl w-[500px] mt-[40px] mx-auto text-primary-400">
						A Website where you can find any information about game, game
						developer, news, upcoming Game and many more
					</h3>
				</div>
			</div>
			<div className="w-[100%] h-[80vh] mx-auto px-[30px]">
				<div className="text-primary-400 mt-[20px] text-5xl">Trending Now</div>
			</div>
		</>
	);
};

export default Home;
