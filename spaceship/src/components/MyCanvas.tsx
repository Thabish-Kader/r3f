import { Canvas } from "@react-three/fiber";
import {
	Environment,
	OrbitControls,
	QuadraticBezierLine,
	useGLTF,
} from "@react-three/drei";
import { GLTFSpaceship } from "../typings";
import { Spaceship } from "./Spaceship";
import { Astraunaut } from "./Astraunaut";
import { useRef } from "react";
import * as THREE from "three";
import { Cable } from "./Cable";

export const MyCanvas = () => {
	const spaceshipRef = useRef<THREE.Group>(null!);
	const astraunautRef = useRef<THREE.Mesh>(null!);
	// console.log(spaceshipRef.current.position);
	return (
		<Canvas>
			<color args={["black"]} attach="background" />
			<Environment preset="city" />
			<OrbitControls />
			<ambientLight />
			<pointLight position={[1, 2, 3]} intensity={10} />
			<Spaceship ref={spaceshipRef} />
			<Astraunaut ref={astraunautRef} />

			<Cable start={spaceshipRef} end={astraunautRef} />
		</Canvas>
	);
};
