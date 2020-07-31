import React, { useState, useEffect } from 'react';
import SideNav from './Components/SideNav';
import SearchBox from './Components/SearchBox.jsx';
import SearchInfo from './Components/SearchInfo';
import ShopAllProducts from './Components/ShopAllProducts';
import NewArrival from './Components/NewArrival';
import Product from './Components/Product';
import ContactForm from './Components/ContactForm';
import SizeChart from './Components/SizeChart';
import ShippingAndReturn from './Components/ShippingAndReturn';
import PrivacyAndPolicy from './Components/PrivacyAndPolicy';
import AboutUs from './Components/AboutUs';
import Cart from './Components/Cart';
import Tops from './Components/Tops';
import Bottoms from './Components/Bottoms';
import Footer from './Components/Footer';
import GlobalStyle from './Styles/GlobalStyle';

import { Router, Link, navigate } from '@reach/router';
import { connect } from 'react-redux';
import { addBasket } from './actions/addAction';
import { getNumbers } from './actions/getAction';
import styled from 'styled-components';
import theme from './Styles/theme';
const { fontSizes } = theme;

const NavBar = styled.div`padding: 30px 70px;`;

const Container = styled.div`
	min-height: 85vh;
	width: 100%;
`;

const UlityItem = styled.li`
	display: inline-block;
	margin: 0 30px;
`;

const FormSearch = styled.form``;

const SearchProduct = styled.span`
	font-size: ${fontSizes.xs};
	font-weight: 500;
	letter-spacing: 0.3px;
	display: inline-block;
	cursor: pointer;
`;

const SearchIcon = styled.span`
	font-size: ${fontSizes.sm};
	font-weight: 500;
`;

const ShoppingBag = styled(Link)`
  font-size: ${fontSizes.xs};
  font-weight: 500;
  display: inline-block;
  letter-spacing: 0.3px;
  text-decoration: none;
  color: black;
`;

const SearchBoxModal = styled.div``;

const SearchTitle = styled.p`
	font-size: ${fontSizes.sm};
	text-align: center;
	font-weight: 500;
`;
const SearchInput = styled.input`
	font-size: ${fontSizes.sm};
	font-weight: 500;
	letter-spacing: 1px;
	width: 100%;
	padding: 10px;
	::placeholder {
		color: #b0b0b0;
	}
`;

const SearchButton = styled.input`
	margin-left: -80px;
	border: 0;
	background-color: transparent;
	cursor: pointer;
	-webkit-appearance: none;
	font-weight: 600;
	font-size: ${fontSizes.md};
	letter-spacing: 0.5px;
`;

const RouterStyle = styled.div`
  display: inline-block,
  margin-left: 350px;
`;

function App(props) {
	useEffect(() => {
		getNumbers();
	}, []);

	const [ isShowing, setIsShowing ] = useState(false);
	const [ opacity, setOpacity ] = useState(1);

	const [ searchTerm, setSearchTerm ] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		navigate(`/search/${searchTerm}`);
		setIsShowing(false);
		setOpacity(1);
	};

	const openModalHandler = (e) => {
		e.preventDefault();
		setIsShowing(true);
		setOpacity(0);
	};

	const closeModalHandler = (e) => {
		e.preventDefault();
		setIsShowing(false);
		setOpacity(1);
	};

	const Wrapper = styled.div`opacity: ${opacity};`;

	const LogoNav = styled.img`
		src: url(${(props) => props.src});
		width: 180px;
		position: fixed;
		opacity: ${opacity};
	`;

	const Utilities = styled.ul`
		font-size: 10px;
		right: 30px;
		position: fixed;
		opacity: ${opacity};
	`;

	return (
		<div>
			<GlobalStyle />
			<NavBar>
				<Link to="/">
					<LogoNav src="https://thebeuter.com/wp-content/uploads/2020/04/logo-black.png" />
				</Link>
				<Utilities>
					<UlityItem>
						<SearchProduct type="submit" onClick={openModalHandler}>
							SEARCH A PRODUCT
							<SearchIcon className="fal fa-search fa-rotate-90" />
						</SearchProduct>
					</UlityItem>
					<UlityItem>
						<ShoppingBag to="/cart"> SHOPPING BAG ({props.basketProps.basketNumbers})</ShoppingBag>
					</UlityItem>
				</Utilities>
				{isShowing ? <SearchBoxModal onClick={closeModalHandler} /> : null}
				<SearchBox show={isShowing} close={closeModalHandler}>
					<SearchTitle>What are you looking for?</SearchTitle>
					<FormSearch onSubmit={onSubmit}>
						<SearchInput
							type="text"
							placeholder="Type something to search"
							onChange={(e) => setSearchTerm(e.target.value)}
							defaultValue={searchTerm}
						/>
						<SearchButton type="submit" value="Search" />
					</FormSearch>
				</SearchBox>
			</NavBar>
			<Wrapper>
				<Container>
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
							<Bottoms path="/product-category/bottom" />
							<Product path="/product/:title_url" />
							<SearchInfo path="/search/:title" searchTerm={searchTerm} title="Profile" />
							<Cart path="/cart" />
						</Router>
					</RouterStyle>
				</Container>
				<Footer />
			</Wrapper>
		</div>
	);
}

const mapStateToProps = (state) => ({
	basketProps: state.basketState
});

export default connect(mapStateToProps, { getNumbers })(App);
