import { Canvas } from "@react-three/fiber";

export const MyCanvas = () => {
	return (
		<Canvas>
			<mesh>
				<boxGeometry />
				<meshBasicMaterial />
			</mesh>
		</Canvas>
	);
};
