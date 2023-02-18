import { Html, useProgress } from "@react-three/drei";
import React from "react";

export const Loading = () => {
	const { active, progress, errors, item, loaded, total } = useProgress();
	return (
		<Html>
			<h1>One Moment....</h1>
			{progress} %
		</Html>
	);
};
