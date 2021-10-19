import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import { v4 as uuidv4 } from "uuid";

export default function Rating(x) {
	if (typeof x === "undefined")
		// return 0 star rating
		return (
			<>
				<EmptyStar key={uuidv4()} className="product__rating__star" />
				<EmptyStar key={uuidv4()} className="product__rating__star" />
				<EmptyStar key={uuidv4()} className="product__rating__star" />
				<EmptyStar key={uuidv4()} className="product__rating__star" />
				<EmptyStar key={uuidv4()} className="product__rating__star" />
			</>
		);
	let components = [];
	for (let i = 0; i < Math.floor(x); i++) {
		components.push(
			<FullStar key={uuidv4()} className="product__rating__star" />
		);
	}
	if (x !== Math.floor(x))
		components.push(
			<HalfStar key={uuidv4()} className="product__rating__star" />
		);
	for (let i = 0; i < 5 - Math.ceil(x); i++)
		components.push(
			<EmptyStar key={uuidv4()} className="product__rating__star" />
		);
	return components;
}
function FullStar(p) {
	return (
		<SvgIcon className={p.className}>
			<path
				stroke="#e1812d"
				d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
				strokeWidth="1"
			/>
		</SvgIcon>
	);
}

function HalfStar(p) {
	return (
		<SvgIcon className={p.className}>
			<path
				stroke="#e1812d"
				d="m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
				// strokeWidth="1"
			/>
		</SvgIcon>
	);
}
function EmptyStar(p) {
	return (
		<SvgIcon className={p.className}>
			<path
				// stroke="#e1812d"
				d="m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
				// strokeWidth="1"
				fill="#e1812d"
			/>
		</SvgIcon>
	);
}
export { FullStar, HalfStar, EmptyStar };
