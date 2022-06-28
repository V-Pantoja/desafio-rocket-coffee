import React from 'react'
import './style.css'
import logoDesktop from '../../img/logo-desktop.svg'
import cupCoffee from '../../img/rocket-coffee.png'

export function Home() {

	return(
		<div id="container">

			<aside>
				<img id="logo-menu" src={logoDesktop} alt="Logo RocketSeat" />
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

			<aside>
				<button>PEGAR MEU CAFÉ</button>
			</aside>
		
			<div>
				<h1>Great Coffee</h1>
				<h1 id="txt-modified">&lt; Great Code/ &gt;</h1>
			
				<img id="copo-coffee" src={cupCoffee} alt="Rocket Coffee" />
			</div>
		</div>
	)
}
