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

type DroneGLTF = GLTF & {
	nodes: {
		pCube43: THREE.Mesh;
		pCube43_BlackGlass_0: THREE.Mesh;
		pCube43_MetalShiny_0: THREE.Mesh;
		pCube43_Metal_0: THREE.Mesh;
		pCube43_Rubber_0: THREE.Mesh;
		pCube43_lambert1_0: THREE.Mesh;
		pCube43_lambert4_0: THREE.Mesh;
		pCube43_pasted__Eyes_0: THREE.Mesh;
	};
	materials: {
		BlackGlass: THREE.MeshStandardMaterial;
		Metal: THREE.MeshStandardMaterial;
		MetalShiny: THREE.MeshStandardMaterial;
		Rubber: THREE.MeshStandardMaterial;
		lambert1: THREE.MeshStandardMaterial;
		lambert4: THREE.MeshStandardMaterial;
		pasted__Eyes: THREE.MeshStandardMaterial;
	};
};
