import { CameraControls } from "@react-three/drei";

type Props = {
	cameraRef: React.MutableRefObject<CameraControls | null>;
};
export const SideBar = ({ cameraRef }: Props) => {
	const position = { x: -3.8799999999999972, y: 2, z: 3 };
	const target = { x: 1, y: 1, z: 0 };
	return (
		<div className="relative text-white">
			<div className="absolute top-[30%] left-24">
				<h1 className="text-white text-5xl">Join the team</h1>
				<p className="pt-2 text-gray-500 hidden sm:block">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Suscipit, possimus alias! Nihil veniam molestiae aut
					provident, iure a laudantium suscipit, neque dignissimos
					alias cupiditate voluptatem impedit hic voluptate recusandae
					fuga. Nam exercitationem unde deleniti fugiat impedit
				</p>
				<div className="flex gap-2 pt-2">
					<button
						onClick={() => {
							cameraRef.current?.setLookAt(
								position.x,
								position.y,
								position.z,
								target.x,
								target.y,
								target.z,
								true
							);
						}}
						className="border p-2 rounded-lg hover:bg-white hover:text-black transition-colors duration-300"
					>
						Peak
					</button>
					<button
						onClick={() => {
							cameraRef.current?.reset(true);
						}}
						className="border p-2 rounded-lg hover:bg-white hover:text-black transition-colors duration-300"
					>
						Reset
					</button>
				</div>
			</div>
		</div>
	);
};
