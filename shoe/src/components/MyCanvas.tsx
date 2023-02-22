import { Canvas, useThree } from "@react-three/fiber";
import { Shoe } from "./Shoe";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";

export const MyCanvas = () => {
	console.log(window.innerWidth);
	return (
		<Canvas shadows>
			<Environment preset="city" />
			<ContactShadows
				position={[0, -0.8, 0]}
				opacity={1}
				scale={10}
				blur={0.8}
				far={0.8}
			/>
			<OrbitControls />
			{/* <pointLight position={[2, 0, 1]} /> */}
			<Shoe />
		</Canvas>
	);
};
