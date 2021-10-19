import "./Home.css";

import Product from "./Product";
import React from "react";
import { v4 as uuidv4 } from "uuid";

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
						key={uuidv4()}
						id={uuidv4()}
						title="Casio G-Shock Analog-Digital Red Dial Men's Watch-GBA-400-4ADR (G559)"
						price={6996.0}
						image="https://m.media-amazon.com/images/I/71mv-swdxsL._UX522_.jpg"
						rating={4.5}
					/>
					<Product
						key={uuidv4()}
						id={uuidv4()}
						title="boAt Rockerz 550"
						price={1499}
						image="https://m.media-amazon.com/images/I/61F5SXdi9jL._SX522_.jpg"
						rating={4}
					/>
					<Product
						key={uuidv4()}
						id={uuidv4()}
						title="10.or Crafted for Amazon Cosmos Smartwatch"
						image="https://m.media-amazon.com/images/I/51i302mhUBL._SX522_.jpg"
						price={1799}
						rating={3.5}
					/>
					<Product
						key={uuidv4()}
						id={uuidv4()}
						title="Hyper X Cloud Stinger Core"
						image="https://m.media-amazon.com/images/I/512qH+i8PLS._SX522_.jpg"
						price={2790}
						rating={4}
					/>
				</div>
				<div className="home__row">
					<Product
						key={uuidv4()}
						id={uuidv4()}
						title="Hyper X Cloud Stinger Core"
						image="https://m.media-amazon.com/images/I/61bVcEoMx3L._SX522_.jpg"
						price={2790}
						rating={4}
					/>
					<Product
						key={uuidv4()}
						id={uuidv4()}
						title="Hyper X Cloud Stinger Core"
						image="https://m.media-amazon.com/images/I/61bVcEoMx3L._SX522_.jpg"
						price={2790}
						rating={4}
					/>
					<Product
						key={uuidv4()}
						id={uuidv4()}
						title="Hyper X Cloud Stinger Core"
						image="https://m.media-amazon.com/images/I/61bVcEoMx3L._SX522_.jpg"
						price={2790}
						rating={4}
					/>
				</div>
				<div className="home__row">
					<Product
						key={uuidv4()}
						id={uuidv4()}
						title="Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED, Thunderbolt 3 Port- LC34J791WTWXXL, Gray "
						image="https://m.media-amazon.com/images/I/91pi34PiUPL._SX522_.jpg"
						price={25999}
						rating={4}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
