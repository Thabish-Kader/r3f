import React from "react";

export const Overlay = () => {
	return (
		<div
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				pointerEvents: "none",
			}}
		>
			<p
				style={{
					position: "absolute",
					bottom: 40,
					left: 90,
					fontSize: "13px",
					width: "500px",
				}}
			>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				Possimus hic qui, sit repellendus, minima a quam aspernatur
				maiores laborum ipsum ducimus expedita sed nostrum. Placeat sint
				id itaque nisi reprehenderit.
				<br />
				Texh
			</p>
			<div
				style={{
					position: "absolute",
					top: 40,
					left: 40,
					fontSize: "13px",
					fontFamily: "Meslo",
					lineHeight: "1.6em",
					whiteSpace: "pre",
				}}
			>
				<p
					style={{
						width: "50px",
					}}
				>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Dolore expedita ducimus modi consectetur tempora nam
					officiis
				</p>
			</div>
			<div
				style={{
					position: "absolute",
					top: 40,
					right: 90,
					fontSize: "13px",
					fontFamily: "Meslo",
					lineHeight: "1.6em",
					whiteSpace: "pre",
				}}
			>
				<h1>Juggernauts</h1>
			</div>
			<div
				style={{
					position: "absolute",
					bottom: 40,
					right: 40,
					fontSize: "13px",
				}}
			>
				<h1>Texh</h1>
			</div>
		</div>
	);
};
