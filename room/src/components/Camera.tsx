import { useGLTF } from "@react-three/drei";
import { GLTFResult } from "../typings";
// import { useControls } from "leva";
import { useSpring, a, config } from "@react-spring/three";
import { useEffect, useState } from "react";

export const Camera = () => {
	const { nodes, materials } = useGLTF("./room.glb") as GLTFResult;
	const [spring, api] = useSpring(
		() => ({ "rotation-z": 0, config: { friction: 40 } }),
		[]
	);

	useEffect(() => {
		let timeout = 0;
		const wander = () => {
			api.start({ "rotation-z": Math.random() });
			timeout = window.setTimeout(wander, (1 + Math.random() * 5) * 1000);
		};
		wander();
		return () => window.clearTimeout(timeout);
	}, []);

	// debug
	// const { position, rotation } = useControls({
	// 	position: {
	// 		value: { x: -0.59, y: 83, z: -0.04 },
	// 		step: 0.01,
	// 	},
	// 	rotation: {
	// 		value: { x: 1.6, y: 0.06, z: 1.06 },
	// 		step: 0.01,
	// 	},
	// });

	return (
		<a.group
			position={[-0.58, 0.83, -0.03]}
			rotation={[Math.PI / 2, 0, 0.47]}
			{...spring}
		>
			<mesh
				geometry={nodes.Camera.geometry}
				material={nodes.Camera.material}
			/>
			<mesh
				geometry={nodes.Camera_1.geometry}
				material={materials.Lens}
			/>
		</a.group>
	);
};
