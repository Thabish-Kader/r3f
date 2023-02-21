import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import { MyCanvas } from "./components/MyCanvas";
import { SideBar } from "./components/SideBar";
import { Header } from "./components/Header";
import { CameraControls } from "@react-three/drei";

function App() {
	const cameraControlsRef = useRef<CameraControls | null>(null);
	return (
		<div className="bg-black">
			{/* <Header /> */}
			<div className="grid grid-cols-3 h-screen ">
				<SideBar cameraRef={cameraControlsRef} />
				<div className="col-span-2">
					<MyCanvas cameraRef={cameraControlsRef} />
				</div>
			</div>
		</div>
	);
}

export default App;
