import { useGLTF } from "@react-three/drei";
import { GLTFResult } from "../typings";

export const Cactus = () => {
	const { nodes, materials } = useGLTF("/room.glb") as GLTFResult;

	return (
		<mesh
			geometry={nodes.Cactus.geometry}
			position={[-0.42, 0.51, -0.62]}
			rotation={[Math.PI / 2, 0, 0]}
			material={materials.Cactus}
		></mesh>
	);
};
