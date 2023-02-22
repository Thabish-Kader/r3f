import React from "react";
import { store } from "../App";

export const ColorPicker = ({ shoePart }: any) => {
	const changeColor = (color: string) => {
		switch (shoePart) {
			case "Lace":
				store.items.laces = color;
				break;
			case "Mesh":
				store.items.mesh = color;
			case "Caps":
				store.items.caps = color;
			case "Inner":
				store.items.inner = color;
			case "Sole":
				store.items.sole = color;
			case "Stripes":
				store.items.stripes = color;
			case "Band":
				store.items.band = color;
			case "Patch":
				store.items.patch = color;
		}
	};
	return (
		<div>
			<div className="flex gap-5 mt-2 items-center">
				<h1 className="text-lg text-white font-bold w-[90px]">
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
