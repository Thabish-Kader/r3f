import { useGLTF } from "@react-three/drei";
import { GLTFSpaceship } from "../typings";
import { useRef } from "react";
import * as THREE from "three";

export const Spaceship = () => {
	const bodyRef = useRef<THREE.Mesh>(null!);
	const { nodes, materials } = useGLTF(
		"./models/spaceship.gltf"
	) as GLTFSpaceship;

	return (
		<group>
			<mesh
				geometry={nodes.Cube005.geometry}
				material={materials.Window_Frame}
			/>
			<mesh
				ref={bodyRef}
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
			<mesh
				geometry={nodes.Cube005_4.geometry}
				material={materials.Mat4}
			/>
			<mesh
				geometry={nodes.Cube005_5.geometry}
				material={materials.Window}
			/>
		</group>
	);
};
