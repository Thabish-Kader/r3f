import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { GLTFResult } from "../typings";

export const Level = () => {
	const { nodes, materials } = useGLTF("../../public/room.glb") as GLTFResult;

	return (
		<mesh
			geometry={nodes.Level.geometry}
			material={materials.Level}
			position={[-0.38, 0.69, 0.62]}
			rotation={[Math.PI / 2, -Math.PI / 9, 0]}
		/>
	);
};
