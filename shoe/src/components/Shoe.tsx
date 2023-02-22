import { Float, useGLTF } from "@react-three/drei";
import { GLTFShoe } from "../typings";
import { useThree } from "@react-three/fiber";
import { store } from "../App";
import { useSnapshot } from "valtio";

export const Shoe = () => {
	const { nodes, materials } = useGLTF("/model/shoe-draco.glb") as GLTFShoe;
	const { viewport } = useThree();
	const snap = useSnapshot(store);

	return (
		<group scale={viewport.width / 7}>
			<Float speed={2} rotationIntensity={1} floatingRange={[0, 0.4]}>
				<mesh
					receiveShadow
					castShadow
					geometry={nodes.shoe.geometry}
					material={materials.laces}
					material-color={snap.items.laces}
				/>
				<mesh
					receiveShadow
					castShadow
					geometry={nodes.shoe_1.geometry}
					material={materials.mesh}
					material-color={snap.items.mesh}
				/>
				<mesh
					receiveShadow
					castShadow
					geometry={nodes.shoe_2.geometry}
					material={materials.caps}
					material-color={snap.items.caps}
				/>
				<mesh
					receiveShadow
					castShadow
					geometry={nodes.shoe_3.geometry}
					material={materials.inner}
					material-color={snap.items.inner}
				/>
				<mesh
					receiveShadow
					castShadow
					geometry={nodes.shoe_4.geometry}
					material={materials.sole}
					material-color={snap.items.sole}
				/>
				<mesh
					receiveShadow
					castShadow
					geometry={nodes.shoe_5.geometry}
					material={materials.stripes}
					material-color={snap.items.stripes}
				/>
				<mesh
					receiveShadow
					castShadow
					geometry={nodes.shoe_6.geometry}
					material={materials.band}
					material-color={snap.items.band}
				/>
				<mesh
					receiveShadow
					castShadow
					geometry={nodes.shoe_7.geometry}
					material={materials.patch}
					material-color={snap.items.patch}
				/>
			</Float>
		</group>
	);
};
