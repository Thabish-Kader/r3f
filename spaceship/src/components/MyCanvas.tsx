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
import { folder, useControls, button } from "leva";

const position = { x: -3.8799999999999972, y: 2, z: 3 };
const target = { x: 1, y: 1, z: 0 };

export const MyCanvas = () => {
	const spaceshipRef = useRef<THREE.Group>(null!);
	const astraunautRef = useRef<THREE.Mesh>(null!);
	const cameraControlsRef = useRef<CameraControls | null>(null);

	// const { vec4 } = useControls({
	// 	setLookAt: folder({
	// 		vec4: { value: [1, 2, 3], label: "position" },
	// 		vec5: { value: [1, 1, 0], label: "target" },
	// 		"setLookAt(…position, …target)": button((get) =>
	// 			cameraControlsRef.current?.setLookAt(
	// 				// @ts-ignore
	// 				...get("setLookAt.vec4"),
	// 				...get("setLookAt.vec5"),
	// 				true
	// 			)
	// 		),
	// 	}),
	// });

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
				{/* <color args={["black"]} attach="background" /> */}
				<Environment preset="city" />
				<OrbitControls enableZoom={false} />
				<ambientLight />
				<pointLight position={[1, 2, 3]} intensity={10} />
				<Float>
					<Spaceship ref={spaceshipRef} />
				</Float>
				<Astraunaut ref={astraunautRef} />

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
						cameraControlsRef.current?.reset(true);
					}}
				>
					Reset
				</button>
			</div>
		</>
	);
};
