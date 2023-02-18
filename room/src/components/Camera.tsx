import { useGLTF } from "@react-three/drei";
import { GLTFResult } from "../typings";

export const Camera = () => {
	const { nodes, materials } = useGLTF("../../public/room.glb") as GLTFResult;
	return (
		<mesh
			geometry={nodes.Camera.geometry}
			material={nodes.Camera.material}
			position={[0, 1, 0]}
		/>
	);
};
