import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Overlay } from "./components/Overlay";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App />
		<Overlay />
	</React.StrictMode>
);
