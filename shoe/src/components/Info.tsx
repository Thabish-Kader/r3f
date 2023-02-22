import React from "react";
import { store } from "../App";
import { ColorPicker } from "./ColorPicker";

export const Info = () => {
	return (
		<section className="relative hidden lg:inline">
			<div className="absolute top-[30%] left-32">
				<h1 className="text-5xl font-bold text-white tracking-widest">
					LOREM IPSUM
				</h1>
				<p className="text-sm text-gray-500 mt-2 hidden sm:block w-[500px]">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Laborum impedit a repellat recusandae ullam quibusdam eius
					quam in cumque, vero esse amet exercitationem nulla
				</p>{" "}
				<h1 className="text-4xl text-yellow-500 font-bold mt-10 uppercase">
					Customize Color
				</h1>
				<ColorPicker shoePart={"Lace"} />
				<ColorPicker shoePart={"Mesh"} />
				<ColorPicker shoePart={"Caps"} />
				<ColorPicker shoePart={"Inner"} />
				<ColorPicker shoePart={"Sole"} />
				<ColorPicker shoePart={"Stripes"} />
				<ColorPicker shoePart={"Band"} />
				<ColorPicker shoePart={"Patch"} />
			</div>
		</section>
	);
};
