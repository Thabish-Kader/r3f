import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

export type GLTFResult = GLTF & {
	nodes: {
		Cactus: THREE.Mesh;
		Camera: THREE.Mesh;
		Camera001: THREE.Mesh;
		Camera_1: THREE.Mesh;
		Level: THREE.Mesh;
		Pyramid: THREE.Mesh;
		React: THREE.Mesh;
		Scene: THREE.Mesh;
		Sudo: THREE.Mesh;
		SudoHead: THREE.Mesh;
	};
	materials: {
		Cactus: THREE.MeshStandardMaterial;
		Cube: THREE.MeshStandardMaterial;
		Lens: THREE.MeshStandardMaterial;
		Level: THREE.MeshStandardMaterial;
		Pyramid: THREE.MeshStandardMaterial;
	};
};
