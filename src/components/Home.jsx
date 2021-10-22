import "./Home.css";

import Product from "./Product";
import React from "react";

// import { v4 as uuidv4 } from "uuid";

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
						key={"12345600"}
						id={"12345600"}
						title="Casio G-Shock Analog-Digital Red Dial Men's Watch-GBA-400-4ADR (G559)"
						price={6996.0}
						image="https://m.media-amazon.com/images/I/71mv-swdxsL._UX522_.jpg"
						rating={4.5}
					/>
					<Product
						key={"12345601"}
						id={"12345601"}
						title="boAt Rockerz 550"
						price={1499}
						image="https://m.media-amazon.com/images/I/61F5SXdi9jL._SX522_.jpg"
						rating={4}
					/>
					<Product
						key={"12345602"}
						id={"12345602"}
						title="10.or Crafted for Amazon Cosmos Smartwatch"
						image="https://m.media-amazon.com/images/I/51i302mhUBL._SX522_.jpg"
						price={1799}
						rating={3.5}
					/>
					<Product
						key={"12345603"}
						id={"12345603"}
						title="Hyper X Cloud Stinger Core"
						image="https://m.media-amazon.com/images/I/512qH+i8PLS._SX522_.jpg"
						price={2790}
						rating={4}
					/>
				</div>
				<div className="home__row">
					<Product
						key={"12345604"}
						id={"12345604"}
						title="OnePlus Nord CE 5G (Blue Void, 8GB RAM, 128GB Storage) "
						image="https://m.media-amazon.com/images/I/61iy2Ru9KdS._SX679_.jpg"
						price={24999}
						rating={4}
					/>
					<Product
						key={"12345605"}
						id={"12345605"}
						title="CORSAIR K60 RGB PRO SE Mechanical Gaming Keyboard - Cherry Mechanical Keyswitches - Durable Aluminum Frame - Customizable Per-Key RGB Backlighting - PBT Double-Shot Keycaps - Detachable Palm Rest"
						image="https://m.media-amazon.com/images/I/81hNDJU2QML._SX522_.jpg"
						price={2790}
						rating={4}
					/>
					<Product
						key={"12345606"}
						id={"12345606"}
						title='Lenovo Legion M200 RGB Gaming Wired USB Mouse GX30P93886, Ambidextrous, 5-buttons, upto 2400 DPI with 4 levels DPI switch, 7-colour RGB backlight, 500fps frame rate, upto 30" per second movement speed '
						image="https://m.media-amazon.com/images/I/61ROx1hBZyL._SX522_.jpg"
						price={2790}
						rating={4.5}
					/>
				</div>
				<div className="home__row">
					<Product
						key={"12345607"}
						id={"12345607"}
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
