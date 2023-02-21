import { Canvas } from "@react-three/fiber";
import {
	Environment,
	Float,
	OrbitControls,
	CameraControls,
	Stars,
	Loader,
} from "@react-three/drei";
import { Spaceship } from "./Spaceship";
import { Astraunaut } from "./Astraunaut";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import { Cable } from "./Cable";
// import { folder, useControls, button } from "leva";

type Props = {
	cameraRef: React.MutableRefObject<CameraControls | null>;
};

export const MyCanvas = ({ cameraRef }: Props) => {
	const spaceshipRef = useRef<THREE.Group>(null!);
	const astraunautRef = useRef<THREE.Mesh>(null!);
	// debug
	// const cameraControlsRef = useRef<CameraControls | null>(null);
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
				<CameraControls ref={cameraRef} />
				{/* <color args={["black"]} attach="background" /> */}
				<Environment preset="city" />
				<OrbitControls enableZoom={false} />
				<ambientLight />
				<Stars />
				<pointLight position={[1, 2, 3]} intensity={10} />
				<Suspense>
					<Spaceship ref={spaceshipRef} />
					<Astraunaut ref={astraunautRef} />
				</Suspense>

				<Cable
					spaceshipRef={spaceshipRef}
					astraunautRef={astraunautRef}
				/>
			</Canvas>
			<Loader />
		</>
	);
};
