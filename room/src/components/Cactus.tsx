import { useGLTF, MeshWobbleMaterial } from "@react-three/drei";
import { GLTFResult } from "../typings";

export const Cactus = () => {
	const { nodes, materials } = useGLTF("../../public/room.glb") as GLTFResult;

	return (
		<mesh
			geometry={nodes.Cactus.geometry}
			position={[-0.42, 0.51, -0.62]}
			rotation={[Math.PI / 2, 0, 0]}
		>
			<MeshWobbleMaterial factor={0.4} map={materials.Cactus.map} />
		</mesh>
	);
};
