import { Float, useGLTF } from "@react-three/drei";
import { GLTFSpaceship } from "../typings";
import { forwardRef, useLayoutEffect, useRef } from "react";
import * as THREE from "three";
import { ThreeElements } from "@react-three/fiber";

export const Spaceship = forwardRef<THREE.Group>((props, ref) => {
	const { nodes, materials } = useGLTF(
		"./models/spaceship.gltf"
	) as GLTFSpaceship;

	useLayoutEffect(() => {
		Object.values(materials).forEach(
			(material) => (material.metalness = 1)
		);
	});
	return (
		<group ref={ref}>
			<Float>
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
			</Float>
		</group>
	);
});
