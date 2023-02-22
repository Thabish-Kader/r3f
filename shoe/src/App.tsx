import { useState } from "react";
import { MyCanvas } from "./components/MyCanvas";
import { proxy } from "valtio";

export const store = proxy({
	current: null,
	items: {
		laces: "black",
		mesh: "#ffffff",
		caps: "#ffffff",
		inner: "#ffffff",
		sole: "#ffffff",
		stripes: "#ffffff",
		band: "#ffffff",
		patch: "#ffffff",
	},
});

function App() {
	return (
		<div className="h-screen">
			<MyCanvas />
		</div>
	);
}

export default App;
