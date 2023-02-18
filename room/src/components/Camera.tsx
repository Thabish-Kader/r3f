import { useGLTF } from "@react-three/drei";
import { GLTFResult } from "../typings";
import { useControls } from "leva";
export const Camera = () => {
	const { nodes, materials } = useGLTF("../../public/room.glb") as GLTFResult;
	const { position, rotation } = useControls({
		position: {
			value: { x: -0.59, y: 83, z: -0.04 },
			step: 0.01,
		},
		rotation: {
			value: { x: 1.6, y: 0.06, z: 1.06 },
			step: 0.01,
		},
	});
	return (
		<group
			position={[position.x, position.y, position.z]}
			rotation={[rotation.x, rotation.y, rotation.z]}
		>
			<mesh
				geometry={nodes.Camera.geometry}
				material={nodes.Camera.material}
			/>
			<mesh
				geometry={nodes.Camera_1.geometry}
				material={materials.Lens}
			/>
		</group>
	);
};
