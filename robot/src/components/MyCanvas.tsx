import { Canvas } from "@react-three/fiber";
import React from "react";
import { Drone } from "./Drone";
import { OrbitControls } from "@react-three/drei";

export const MyCanvas = () => {
	return (
		<Canvas>
			<ambientLight />
			<OrbitControls />
			<Drone />
		</Canvas>
	);
};
