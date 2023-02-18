import { useState } from "react";
import { Canvas } from "@react-three/fiber";

import { OrbitControls } from "@react-three/drei";
import { Level } from "./components/Level";
import { Cactus } from "./components/Cactus";
import { Camera } from "./components/Camera";
import { ShowPiece } from "./components/ShowPiece";
import { Pyramid } from "./components/Pyramid";

function App() {
	return (
		<div className="App">
			<Canvas>
				<color args={["#030202"]} attach="background" />
				<OrbitControls />
				<Level />
				<Cactus />
				<Camera />
				<ShowPiece />
				<Pyramid />
			</Canvas>
		</div>
	);
}

export default App;
