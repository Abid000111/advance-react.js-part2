import { MyContext } from "@/Helper/Context";
import React, { useContext } from "react";

const Header = () => {
	const user = useContext(MyContext);
	return <div className="text-3xl font-bold h-20 w-screen bg-green-400 flex justify-center items-center">{user}</div>;
};

export default Header;
