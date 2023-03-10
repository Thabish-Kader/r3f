import { QuadraticBezierLine } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

type Props = {
	spaceshipRef: React.MutableRefObject<THREE.Group>;
	astraunautRef: React.MutableRefObject<THREE.Mesh>;
	v1?: THREE.Vector3;
	v2?: THREE.Vector3;
};

export function Cable({
	spaceshipRef,
	astraunautRef,
	v1 = new THREE.Vector3(0, 0, 0),
	v2 = new THREE.Vector3(1, 1, 1),
}: Props) {
	const ref = useRef<any>(null!);

	useFrame(() =>
		ref.current.setPoints(
			spaceshipRef.current.getWorldPosition(v1),
			astraunautRef.current.getWorldPosition(v2)
		)
	);

	return (
		<QuadraticBezierLine
			ref={ref}
			start={v1}
			end={v2}
			color={"purple"}
			lineWidth={3}
		/>
	);
}
