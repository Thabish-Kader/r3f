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
import { Cable } from "./Cable";

const position = { x: -1, y: 0, z: 1 };
const target = { x: -1, y: 0, z: 1 };

export const MyCanvas = () => {
	const spaceshipRef = useRef<THREE.Group>(null!);
	const astraunautRef = useRef<THREE.Mesh>(null!);
	const cameraControlsRef = useRef<CameraControls | null>(null);

	// console.log(spaceshipRef.current.position);
	return (
		<>
			<Canvas
				camera={{
					position: [
						4.917552923138996, 0.78516727106426, 0.4485371830479772,
					],
					fov: 60,
				}}
			>
				<CameraControls ref={cameraControlsRef} />
				<color args={["black"]} attach="background" />
				<Environment preset="city" />
				<OrbitControls enableZoom={false} />
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
				<Cable
					spaceshipRef={spaceshipRef}
					astraunautRef={astraunautRef}
				/>
			</Canvas>
			<div className="absolute top-1">
				<button
					className="text-green-500 p-2 border"
					onClick={() => {
						cameraControlsRef.current?.setLookAt(
							position.x,
							position.y,
							position.z,
							target.x,
							target.y,
							target.z,
							true
						);
					}}
				>
					Look
				</button>
				<button
					className="text-green-500 p-2 border"
					onClick={() => {
						cameraControlsRef.current?.moveTo(
							4.917552923138996,
							0.78516727106426,
							0.4485371830479772,
							true
						);
					}}
				>
					Reset
				</button>
			</div>
		</>
	);
};
