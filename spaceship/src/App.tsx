import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { MyCanvas } from "./components/MyCanvas";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="h-screen w-full">
			<MyCanvas />
		</div>
	);
}

export default App;
