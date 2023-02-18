import { useGLTF } from "@react-three/drei";
import { GLTFResult } from "../typings";
import { useControls } from "leva";
import { a, useSpring } from "@react-spring/three";
import { useEffect } from "react";
import * as THREE from "three";

export const Dog = () => {
	const { nodes } = useGLTF("./room.glb") as GLTFResult;
	const [spring, api] = useSpring(
		() => ({ rotation: [Math.PI / 2, 0, 0.29], config: { friction: 40 } }),
		[]
	);
	useEffect(() => {
		let timeout = 0;
		const wander = () => {
			api.start({
				rotation: [
					Math.PI / 2 + THREE.MathUtils.randFloatSpread(2) * 0.3,
					0,
					0.29 + THREE.MathUtils.randFloatSpread(2) * 0.2,
				],
			});
			timeout = window.setTimeout(wander, (1 + Math.random() * 3) * 1000);
		};
		wander();
		return () => clearTimeout(timeout);
	}, []);
	return (
		<group>
			<mesh
				geometry={nodes.Sudo.geometry}
				material={nodes.Sudo.material}
				position={[0.68, 0.33, -0.67]}
				rotation={[Math.PI / 2, 0, 0.29]}
			/>

			<a.mesh
				geometry={nodes.SudoHead.geometry}
				material={nodes.SudoHead.material}
				position={[0.68, 0.33, -0.67]}
				{...(spring as any)}
			/>
		</group>
	);
};
