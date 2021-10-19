import "./Home.css";

import Product from "./Product";
import React from "react";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://m.media-amazon.com/images/I/81qDhAQH-vL._SX3000_.jpg"
					alt="banner"
				/>
				<div className="home__row">
					<Product
						title="Casio G-Shock Analog-Digital Red Dial Men's Watch-GBA-400-4ADR (G559)"
						price={6996.0}
						image="https://m.media-amazon.com/images/I/71mv-swdxsL._UX522_.jpg"
						rating={4.5}
					/>
					<Product />
					<Product />
					<Product />
				</div>
				<div className="home__row">
					<Product />
					<Product />
					<Product />
				</div>
				<div className="home__row">
					<Product />
				</div>
			</div>
		</div>
	);
}

export default Home;
