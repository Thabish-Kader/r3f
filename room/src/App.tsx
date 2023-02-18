import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";

import { Loader, OrbitControls, PresentationControls } from "@react-three/drei";
import { Level } from "./components/Level";
import { Cactus } from "./components/Cactus";
import { Camera } from "./components/Camera";
import { ShowPiece } from "./components/ShowPiece";
import { Pyramid } from "./components/Pyramid";
import { Dog } from "./components/Dog";

function App() {
	return (
		<div className="App">
			<Canvas flat dpr={[1, 2]} camera={{ fov: 75, position: [2, 1, 3] }}>
				<color attach="background" args={["#e0b7ff"]} />
				<PresentationControls
					snap={true}
					rotation={[0, 0, 0]}
					polar={[0, Math.PI * 0.125]}
					azimuth={[-Math.PI / 4, Math.PI / 4]}
				>
					<group position-y={-0.75}>
						<Suspense>
							<Level />
							<Cactus />
							<Camera />
							<ShowPiece />
							<Pyramid />
							<Dog />
						</Suspense>
					</group>
				</PresentationControls>
			</Canvas>
			<Loader />
		</div>
	);
}

export default App;
