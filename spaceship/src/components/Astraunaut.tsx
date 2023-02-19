import { useGLTF, Float } from "@react-three/drei";

import { GLTFAstraunaut } from "../typings";
import { forwardRef, useLayoutEffect } from "react";

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
			<Float>
				<mesh
					ref={ref}
					geometry={nodes.Astronaut_mesh.geometry}
					material={materials.Astronaut_mat}
					scale={0.25}
					position={[1, 2, 0]}
					rotation={[0.5, -0.5, -0.5]}
				/>
			</Float>
		</>
	);
});
