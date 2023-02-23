import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type RobotGLTF = GLTF & {
	nodes: {
		RootNode: THREE.Mesh;
		Scene: THREE.Mesh;
		Sketchfab_model: THREE.Mesh;
		body: THREE.Mesh;
		RootNode: THREE.Mesh;
		body001: THREE.Mesh;
		c6cc6f69c5314c6fac811c366eeb0cb2fbx: THREE.Mesh;
		head: THREE.Mesh;
		head001: THREE.Mesh;
		stripe: THREE.Mesh;
		stripe001: THREE.Mesh;
	};
	materials: {
		Body: THREE.MeshStandardMaterial;
		Head: THREE.MeshStandardMaterial;
		Stripe: THREE.MeshStandardMaterial;
	};
};
