import { useGLTF } from "@react-three/drei";
import React from "react";
import { RobotGLTF } from "../typings";

// Source: https://sketchfab.com/3d-models/s2wt-kamdo-industrial-divinities-f503b70ac05e49a38c81100d71599a1b
export const Drone = () => {
	const { nodes, materials } = useGLTF("/robot.glb") as RobotGLTF;

	return (
		<group position-y={-2.5}>
			<mesh geometry={nodes.body001.geometry} material={materials.Body} />
			<mesh geometry={nodes.head001.geometry} material={materials.Head} />
			<mesh
				geometry={nodes.stripe001.geometry}
				material={materials.Stripe}
			/>
		</group>
	);
};
