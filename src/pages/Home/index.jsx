import React from 'react';
import './style.css';
import logoDesktop from '../../img/logo-desktop.svg';
import cupCoffee from '../../img/rocket-coffee.png';
import blur1 from '../../img/blur-1.png';
import blur2 from '../../img/blur-2.png';

export function Home() {

	return(
		<div id="container">
			<img src={blur1} id="blur1" />

			<aside id="leftAside">
				<img id="logoMenu" src={logoDesktop} alt="Logo RocketSeat" />
			</aside>

			<header>
				<nav>
					<a href="">Home</a>
					<a href="">Menu</a>
					<a href="">Recompensas</a>
					<a href="">GiftCards</a>
					<a href="">Lojas</a>
				</nav>
			</header>

			<aside id="rigthAside">
				<button>PEGAR MEU CAFÉ</button>
			</aside>
		
			<main>
				<div>
					<h1>Great Coffee</h1>
					<h2 id="txt-modified">&lt; Great Code/ &gt;</h2>
				</div>
			
				<img id="copo-coffee" src={cupCoffee} alt="Rocket Coffee" />
			</main>

			<img src={blur2} id="blur2" />
		</div>
	)
}
