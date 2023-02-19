import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { GLTFSpaceship } from "../typings";
import { Spaceship } from "./Spaceship";

export const MyCanvas = () => {
	return (
		<Canvas>
			<color args={["black"]} attach="background" />
			<OrbitControls />
			<pointLight position={[1, 2, 3]} />
			<Spaceship />
		</Canvas>
	);
};
