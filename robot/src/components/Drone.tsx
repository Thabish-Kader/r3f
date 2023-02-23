import { useGLTF } from "@react-three/drei";
import { RobotGLTF } from "../typings";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";

// Source: https://sketchfab.com/3d-models/s2wt-kamdo-industrial-divinities-f503b70ac05e49a38c81100d71599a1b
export const Drone = () => {
	const { nodes, materials } = useGLTF("/robot.glb") as RobotGLTF;
	const head = useRef<THREE.Group>(null);
	const stripe = useRef<THREE.MeshBasicMaterial>(null);
	const light = useRef<THREE.PointLight>(null!);

	useFrame((state, delta) => {
		const t = (1 + Math.sin(state.clock.elapsedTime * 2)) / 2;
		stripe.current?.color.setRGB(1 + t * 10, 2, 20 + t * 50);
		head.current?.rotation.set(0, state.mouse.x, 0);
		light.current.intensity = 1 + t * 2;
	});

	return (
		<group position-y={-2.5} rotation={[0, -Math.PI * 0.6, 0]}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.body001.geometry}
				material={materials.Body}
			/>
			<group ref={head}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.head001.geometry}
					material={materials.Head}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.stripe001.geometry}
				>
					<meshBasicMaterial
						ref={stripe}
						toneMapped={false}
						color={"#6d70e5"}
					/>
					<pointLight
						ref={light}
						intensity={1}
						color={[10, 2, 5]}
						distance={2.5}
					/>
				</mesh>
			</group>
		</group>
	);
};
