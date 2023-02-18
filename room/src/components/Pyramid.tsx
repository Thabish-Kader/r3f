import { useGLTF, useMatcapTexture } from "@react-three/drei";
import { GLTFResult } from "../typings";
import { useControls } from "leva";
import { a, useSpring } from "@react-spring/three";
import { useEffect } from "react";

export const Pyramid = () => {
	const { nodes } = useGLTF("../../public/room.glb") as GLTFResult;
	const [matcap] = useMatcapTexture("489B7A_A0E7D9_6DC5AC_87DAC7", 1024);
	// animation
	const [springs, api] = useSpring(() => ({
		rotation: [1.59, -0.0, 1.12],

		config: { mass: 2, tension: 200 },
	}));

	useEffect(() => {
		let timeout = 0;

		const animate = () => {
			api.start({
				rotation: [Math.random() * Math.PI, 0, Math.random() * Math.PI],
			});

			timeout = setTimeout(animate, 1.5 * 1000);
		};
		animate();
		return () => clearTimeout(timeout);
	}, []);
	return (
		<a.mesh
			geometry={nodes.Pyramid.geometry}
			position={[-0.76, 1.3, 0.15]}
			{...(springs as any)}
		>
			<meshMatcapMaterial map={matcap} />
		</a.mesh>
	);
};
