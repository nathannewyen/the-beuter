import React from 'react';
import { Router } from '@reach/router';
import Home from './Components/Home';
import SideNav from './Components/SideNav';
import TopNav from './Components/TopNav';
import ShopAllProducts from './Components/ShopAllProducts';
import NewArrival from './Components/NewArrival';
import Product from './Components/Product';
import GlobalStyle from './Styles/GlobalStyle';

function App() {
	return (
		<div>
			<GlobalStyle />
			<TopNav />
			<SideNav />
			<Router style={{ display: 'inline-block' }}>
				<ShopAllProducts path="/shop" />
				<NewArrival path="/shop/new-arrival" />
				<Product path="/product/:title_url" />
			</Router>
		</div>
	);
}

export default App;
