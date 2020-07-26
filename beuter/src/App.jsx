import React from 'react';
import { Router } from '@reach/router';
import styled from 'styled-components';
import Home from './Components/Home';
import SideNav from './Components/SideNav';
import TopNav from './Components/TopNav';
import ShopAllProducts from './Components/ShopAllProducts';
import NewArrival from './Components/NewArrival';
import Product from './Components/Product';
import ContactForm from './Components/ContactForm';
import SizeChart from './Components/SizeChart';
import ShippingAndReturn from './Components/ShippingAndReturn';
import PrivacyAndPolicy from './Components/PrivacyAndPolicy';
import AboutUs from './Components/AboutUs';
import Tops from './Components/Tops';
import Footer from './Components/Footer';
import GlobalStyle from './Styles/GlobalStyle';

const RouterStyle = styled.div`
  display: inline-block,
  margin-left: 350px;
`;

function App() {
	return (
		<div>
			<GlobalStyle />
			<TopNav />
			<SideNav />
			<RouterStyle>
				<Router>
					<ContactForm path="/contact" />
					<SizeChart path="/size-chart" />
					<ShippingAndReturn path="/shipping-return" />
					<PrivacyAndPolicy path="/privacy-policy" />
					<AboutUs path="/about-us" />
					<ShopAllProducts path="/" />
					<NewArrival path="/shop/new-arrival" />
					<Tops path="/product-category/top" />
					<Product path="/product/:title_url" />
				</Router>
			</RouterStyle>
			<Footer />
		</div>
	);
}

export default App;
