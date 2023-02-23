import { Canvas, useFrame, useThree } from "@react-three/fiber";

import { Drone } from "./Drone";
import {
	AccumulativeShadows,
	Environment,
	Grid,
	OrbitControls,
	RandomizedLight,
	Stage,
} from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

export const MyCanvas = () => {
	return (
		<Canvas
			shadows
			camera={{
				position: [
					3.4777692809742304, -0.68957799629561, 6.220390193324989,
				],
			}}
		>
			<OrbitControls
				enableZoom={false}
				minPolarAngle={-Math.PI * 0.5}
				maxPolarAngle={Math.PI * 0.5}
				minAzimuthAngle={0}
				maxAzimuthAngle={Math.PI}
			/>
			<Stage
				intensity={0.5}
				environment="city"
				shadows={{ type: "accumulative", bias: -0.001 }}
				adjustCamera={false}
			>
				<Drone />
			</Stage>
			<EffectComposer>
				<Bloom luminanceThreshold={1} mipmapBlur />
			</EffectComposer>
			<Grid
				receiveShadow
				position={[0, -1.7, 0]}
				args={[10.5, 10.5]}
				cellSize={0.9}
				fadeDistance={25}
				// fadeStrength={1}
				sectionColor={"#6d70e5"}
				infiniteGrid={true}
				sectionSize={2.7}
				sectionThickness={1.4}
			/>
			<Environment background preset="sunset" blur={1} />
		</Canvas>
	);
};
