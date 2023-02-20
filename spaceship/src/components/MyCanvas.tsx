import { Canvas } from "@react-three/fiber";
import {
	Environment,
	Float,
	OrbitControls,
	CameraControls,
	Stars,
} from "@react-three/drei";

import { Spaceship } from "./Spaceship";
import { Astraunaut } from "./Astraunaut";
import { useRef } from "react";
import * as THREE from "three";
const DEG45 = Math.PI / 4;
export const MyCanvas = () => {
	const spaceshipRef = useRef<THREE.Group>(null!);
	const astraunautRef = useRef<THREE.Mesh>(null!);
	const cameraControlRef = useRef<CameraControls | null>(null);
	// console.log(spaceshipRef.current.position);
	return (
		<>
			<Canvas>
				<CameraControls ref={cameraControlRef} />
				<color args={["black"]} attach="background" />
				<Environment preset="city" />
				<OrbitControls />
				<ambientLight />
				<pointLight position={[1, 2, 3]} intensity={10} />
				<Float>
					<Spaceship ref={spaceshipRef} />
				</Float>
				<Astraunaut ref={astraunautRef} />
				<Stars
					radius={100}
					depth={1}
					count={5000}
					factor={7}
					saturation={0}
					fade
					speed={3}
				/>
				{/* <Cable start={spaceshipRef} end={astraunautRef} /> */}
			</Canvas>
			<div className="absolute top-1">
				<button
					className="text-green-500 p-2 border"
					onClick={() => {
						cameraControlRef.current?.rotate(DEG45, 0, true);
					}}
				>
					Turn
				</button>
			</div>
		</>
	);
};
