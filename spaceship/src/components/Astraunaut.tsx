import { useGLTF, Float } from "@react-three/drei";

import { GLTFAstraunaut } from "../typings";
import { forwardRef, useLayoutEffect } from "react";
import { useThree } from "@react-three/fiber";

export const Astraunaut = forwardRef<THREE.Mesh>((props, ref) => {
	const { nodes, materials } = useGLTF(
		"./models/astraunaut.glb"
	) as GLTFAstraunaut;
	useLayoutEffect(() => {
		Object.values(materials).forEach((material) => {
			material.roughness = 0;
		});
	}, []);

	return (
		<>
			<Float speed={3} rotationIntensity={2} floatIntensity={1}>
				<mesh
					ref={ref}
					geometry={nodes.Astronaut_mesh.geometry}
					material={materials.Astronaut_mat}
					scale={0.1}
					position={[1, 1, 0]}
					rotation={[0.5, -0.5, -0.5]}
				/>
			</Float>
		</>
	);
});
