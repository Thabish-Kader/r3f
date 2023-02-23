import { useGLTF } from "@react-three/drei";
import { RobotGLTF } from "../typings";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

// Source: https://sketchfab.com/3d-models/s2wt-kamdo-industrial-divinities-f503b70ac05e49a38c81100d71599a1b
export const Drone = () => {
	const { nodes, materials } = useGLTF("/robot.glb") as RobotGLTF;

	return (
		<group position-y={-2.5} rotation={[0, -Math.PI * 0.6, 0]}>
			<mesh geometry={nodes.body001.geometry} material={materials.Body} />
			<mesh geometry={nodes.head001.geometry} material={materials.Head} />
			<mesh
				geometry={nodes.stripe001.geometry}
				material={materials.Stripe}
			/>
		</group>
	);
};
