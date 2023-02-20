import { QuadraticBezierLine } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

type Props = {
	start: React.MutableRefObject<THREE.Group>;
	end: React.MutableRefObject<THREE.Mesh>;
	v1: THREE.Vector3;
	v2: THREE.Vector3;
};
export function Cable({
	start,
	end,
	v1 = new THREE.Vector3(),
	v2 = new THREE.Vector3(),
}: Props) {
	const ref = useRef<any>(null!);
	useFrame(
		() =>
			ref.current.setPoints(
				start.current.getWorldPosition(v1),
				end.current.getWorldPosition(v2)
			),
		[]
	);
	return <QuadraticBezierLine ref={ref} lineWidth={3} color="#ff2060" />;
}
