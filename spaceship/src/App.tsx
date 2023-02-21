import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { MyCanvas } from "./components/MyCanvas";
import { SideBar } from "./components/SideBar";
import { Header } from "./components/Header";

function App() {
	return (
		<div className="bg-black">
			{/* <Header /> */}
			<div className="grid grid-cols-3 h-screen ">
				<SideBar />
				<div className="col-span-2">
					<MyCanvas />
				</div>
			</div>
		</div>
	);
}

export default App;
