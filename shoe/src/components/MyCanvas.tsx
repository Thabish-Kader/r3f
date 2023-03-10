import { Canvas, useThree } from "@react-three/fiber";
import { Shoe } from "./Shoe";
import {
	ContactShadows,
	Environment,
	Loader,
	OrbitControls,
} from "@react-three/drei";
import { Suspense } from "react";
import { Loading } from "./Loading";

export const MyCanvas = () => {
	return (
		<Canvas shadows camera={{ position: [1, 1, 1] }}>
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
			<Suspense fallback={<Loading />}>
				<Shoe />
			</Suspense>
		</Canvas>
	);
};
