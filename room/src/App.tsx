import { useState } from "react";
import { Canvas } from "@react-three/fiber";

import { OrbitControls } from "@react-three/drei";
import { Level } from "./components/Level";
import { Cactus } from "./components/Cactus";
import { Camera } from "./components/Camera";

function App() {
	return (
		<div className="App">
			<Canvas>
				<color args={["#030202"]} attach="background" />
				<OrbitControls />
				<Level />
				<Cactus />
				<Camera />
			</Canvas>
		</div>
	);
}

export default App;
