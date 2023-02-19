import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

export type GLTFSpaceship = GLTF & {
	nodes: {
		Cube003: THREE.Mesh;
		Cube005: THREE.Mesh;
		Cube005_1: THREE.Mesh;
		Cube005_2: THREE.Mesh;
		Cube005_3: THREE.Mesh;
		Cube005_4: THREE.Mesh;
		Cube005_5: THREE.Mesh;
		Cube005_6: THREE.Mesh;
		Scene: THREE.Mesh;
	};
	materials: {
		Mat0: THREE.MeshStandardMaterial;
		Mat1: THREE.MeshStandardMaterial;
		Mat2: THREE.MeshStandardMaterial;
		Mat3: THREE.MeshStandardMaterial;
		Mat4: THREE.MeshStandardMaterial;
		Window: THREE.MeshStandardMaterial;
		Window_Frame: THREE.MeshStandardMaterial;
	};
};

export type GLTFAstraunaut = GLTF & {
	nodes: {
		Astronaut_mesh: THREE.Mesh;
	};
};
