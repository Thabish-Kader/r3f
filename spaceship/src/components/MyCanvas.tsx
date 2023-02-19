import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { GLTFSpaceship } from "../typings";
import { Spaceship } from "./Spaceship";
import { Astraunaut } from "./Astraunaut";

export const MyCanvas = () => {
	return (
		<Canvas>
			<color args={["black"]} attach="background" />
			<Environment preset="city" />
			<OrbitControls />
			<ambientLight />
			<pointLight position={[1, 2, 3]} intensity={10} />
			<Spaceship />
			<Astraunaut />
		</Canvas>
	);
};
