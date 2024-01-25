"use client";
import Header from "@/Components/Header";
import { MyContext } from "@/Helper/Context";
import React, { useContext } from "react";

const page = () => {
	const user = useContext(MyContext);
	console.log(user);

	return (
		<>
			<Header />
			<div className="text-center font-bold text-3xl w-screen mt-10">
				<h1>This is home page and the author is - {user}</h1>
			</div>
		</>
	);
};

export default page;
