import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

type Props = {};

const Navbar = (props: Props) => {
	return (
		<div className="w-[100%] px-[30px] mx-auto h-[100px] bg-primary-100 grid grid-cols-3">
			<h1 className="text-4xl align-middle my-auto w-fit h-fit py-4 text-primary-400 font-bold">
				A K A R A S H I
			</h1>
			<div className="mx-auto my-auto">
				<input
					type="text"
					className="w-[300px] h-[40px]  bg-third rounded-xl text-white pl-4 justify-center"
					placeholder="Search A Game"
				/>
			</div>
			<div className="flex justify-evenly my-auto">
				<a
					href="https://www.linkedin.com/in/ethaniel-ravanello-a60810251/"
					target="_blank"
				>
					<AiFillLinkedin className="text-primary-400 my-auto" size={50} />
				</a>
				<a href="https://github.com/FE10-Ethaniel-Ravanello" target="_blank">
					<AiFillGithub className="text-primary-400 my-auto" size={50} />
				</a>
			</div>
		</div>
	);
};

export default Navbar;
