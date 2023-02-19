import { useGLTF } from "@react-three/drei";
import { GLTFSpaceship } from "../typings";
import { useLayoutEffect, useRef } from "react";
import * as THREE from "three";

export const Spaceship = () => {
	const bodyRef = useRef<THREE.Mesh>(null!);
	const { nodes, materials } = useGLTF(
		"./models/spaceship.gltf"
	) as GLTFSpaceship;

	useLayoutEffect(() => {
		Object.values(materials).forEach(
			(material) => (material.metalness = 1)
		);
	});
	return (
		<group>
			<mesh geometry={nodes.Cube005.geometry} />
			<mesh
				geometry={nodes.Cube005_1.geometry}
				material={materials.Mat0}
				material-color={"purple"}
			/>
			<mesh
				geometry={nodes.Cube005_2.geometry}
				material={materials.Mat1}
				material-color={"black"}
			/>

			<mesh
				geometry={nodes.Cube005_3.geometry}
				material={materials.Mat3}
			/>
			<mesh geometry={nodes.Cube005_4.geometry} />
			<mesh
				geometry={nodes.Cube005_5.geometry}
				material={materials.Window}
				material-color={"purple"}
			/>
		</group>
	);
};
