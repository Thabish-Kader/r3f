import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

export type GLTFShoe = GLTF & {
	nodes: {
		Scene: THREE.Mesh;
		Shoe: THREE.Mesh;
		shoe: THREE.Mesh;
		shoe_1: THREE.Mesh;
		shoe_2: THREE.Mesh;
		shoe_3: THREE.Mesh;
		shoe_4: THREE.Mesh;
		shoe_5: THREE.Mesh;
		shoe_6: THREE.Mesh;
		shoe_7: THREE.Mesh;
	};
	materials: {
		band: THREE.MeshStandardMaterial;
		caps: THREE.MeshStandardMaterial;
		inner: THREE.MeshStandardMaterial;
		laces: THREE.MeshStandardMaterial;
		mesh: THREE.MeshStandardMaterial;
		patch: THREE.MeshStandardMaterial;
		sole: THREE.MeshStandardMaterial;
		stripes: THREE.MeshStandardMaterial;
	};
};
