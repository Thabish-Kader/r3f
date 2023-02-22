import { useState } from "react";
import { MyCanvas } from "./components/MyCanvas";
import { proxy } from "valtio";
import { ColorPalete } from "./components/ColorPalete";

export const store = proxy({
	current: null,
	items: {
		laces: "#ffffff",
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
			<div className="grid grid-cols-3 h-screen hero-section">
				<ColorPalete />
				<div className="col-span-2">
					<MyCanvas />
				</div>
			</div>
		</div>
	);
}

export default App;
