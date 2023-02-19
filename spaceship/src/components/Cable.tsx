import { QuadraticBezierLine } from "@react-three/drei";

export const Cable = () => {
	return (
		<QuadraticBezierLine
			start={[0, 0, 0]}
			end={[0, 1, 0]}
			mid={[5, 0, 5]}
			color="red"
			lineWidth={1}
			dashed={false}
		/>
	);
};
