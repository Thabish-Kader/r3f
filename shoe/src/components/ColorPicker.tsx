import React from "react";
import { store } from "../App";

export const ColorPicker = ({ shoePart }: any) => {
	const changeColor = (color: string) => {
		if (shoePart === "lace") store.items.laces = color;
		switch (shoePart) {
			case "Lace":
				store.items.laces = color;
				break;
			case "Mesh":
				store.items.mesh = color;
		}
	};
	return (
		<div>
			<div className="flex gap-5 mt-2 items-center">
				<h1 className="text-2xl text-white font-bold w-[90px]">
					{shoePart}
				</h1>
				<span
					onClick={() => changeColor("red")}
					className="h-6 w-6 bg-red-500 rounded-full inline-flex cursor-pointer"
				></span>
				<span
					onClick={() => changeColor("green")}
					className="h-6 w-6 bg-green-500 rounded-full inline-flex cursor-pointer"
				></span>
				<span
					onClick={() => changeColor("yellow")}
					className="h-6 w-6 bg-yellow-500 rounded-full inline-flex cursor-pointer"
				></span>
				<span
					onClick={() => changeColor("white")}
					className="h-6 w-6 bg-white rounded-full inline-flex cursor-pointer"
				></span>
			</div>
		</div>
	);
};
