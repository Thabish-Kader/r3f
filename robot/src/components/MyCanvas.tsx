import { Canvas, useFrame, useThree } from "@react-three/fiber";

import { Drone } from "./Drone";
import { Grid, OrbitControls } from "@react-three/drei";
import { useControls } from "leva";

export const MyCanvas = () => {
	return (
		<Canvas
			camera={{
				position: [
					2.1867405765963848, 1.420939432669608, 6.668039286119084,
				],
			}}
		>
			<ambientLight />
			<OrbitControls />
			<Drone />
			<Grid />
		</Canvas>
	);
};
