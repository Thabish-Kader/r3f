import { useGLTF } from "@react-three/drei";
import { DroneGLTF } from "../typings";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

// https://sketchfab.com/3d-models/robot-cln-r-school-project-9a793a9293fb4ec89936aebfda8fc434
export const Robot = () => {
	const { nodes, materials } = useGLTF("/drone.glb") as DroneGLTF;

	const stripe = useRef<THREE.MeshBasicMaterial>(null);

	useFrame((state, delta) => {
		const t = (1 + Math.sin(state.clock.elapsedTime * 2)) / 2;
		stripe.current?.color.setRGB(1 + t * 10, 2, 20 + t * 50);
	});
	return (
		<group castShadow receiveShadow position={[0, -2.5, 6]} scale={0.6}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.pCube43_BlackGlass_0.geometry}
				material={materials.BlackGlass}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.pCube43_MetalShiny_0.geometry}
				material={materials.MetalShiny}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.pCube43_Metal_0.geometry}
				material={materials.Metal}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.pCube43_Rubber_0.geometry}
				material={materials.Rubber}
			/>
			<mesh
				geometry={nodes.pCube43_lambert1_0.geometry}
				material={materials.lambert1}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.pCube43_lambert4_0.geometry}
				material={materials.lambert4}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.pCube43_pasted__Eyes_0.geometry}
				// material={materials.pasted__Eyes}
			>
				<meshBasicMaterial
					ref={stripe}
					toneMapped={false}
					color={"#FFFF00"}
				/>
			</mesh>
		</group>
	);
};
