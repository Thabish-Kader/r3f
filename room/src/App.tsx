import { useState } from "react";
import { Canvas } from "@react-three/fiber";

import { OrbitControls } from "@react-three/drei";

function App() {
	return (
		<div className="App">
			<Canvas>
				<mesh>
					<OrbitControls />
					<boxGeometry />
					<meshStandardMaterial />
				</mesh>
			</Canvas>
		</div>
	);
}

export default App;
