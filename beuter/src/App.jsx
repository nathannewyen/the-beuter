import React, { useState, useEffect, Fragment } from 'react';
import { CSSTransition, Transition } from 'react-transition-group';
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
import Tops from './Components/Top/Tops';
import Bottoms from './Components/Bottom/Bottoms';
import Bags from './Components/Bag/Bags';

import TShirt from './Components/Top/TShirt/TShirt';
import Shirts from './Components/Top/Shirts/Shirts';
import Hoodies from './Components/Top/Hoodies/Hoodies';
import Coats from './Components/Top/Coats/Coats';

import Shorts from './Components/Bottom/Shorts/Shorts';
import Pants from './Components/Bottom/Pants/Pants';

import Checkout from './Components/Checkout';
import Footer from './Components/Footer';

import Form from './Components/Form';

import GlobalStyle from './Styles/GlobalStyle';
import { Router, Link, navigate } from '@reach/router';
import { connect } from 'react-redux';
import { getNumbers } from './actions/getAction';

import styled from 'styled-components';
import theme from './Styles/theme';
import media from './Styles/media';
import mediaMin from './Styles/mediaMin';
const { fontSizes, loaderDelay } = theme;

const NavBar = styled.nav`
	padding: 30px 70px;
	${media.tablet`visibility: hidden;`};
`;

const Container = styled.div`
	min-height: 90vh;
	width: 100%;
	${media.laptop`min-height: 110vh;`};
	${media.tablet`min-height: 90vh;`};
	${media.mobileL`min-height: 82vh;`};
`;

const UlityItem = styled.li`
	display: inline-block;
	margin: 0 30px;
`;

const FormSearch = styled.form`${media.mobileL`width: 345px;`};`;

const SearchProduct = styled.span`
	font-size: ${fontSizes.xs};
	font-weight: 500;
	letter-spacing: 0.3px;
	display: inline-block;
	cursor: pointer;
`;

const Icon = styled.span`
	font-size: ${fontSizes.sm};
	font-weight: 500;
	${media.tablet`font-size: 14px`};
`;

const CartNumb = styled.span`
	font-size: ${fontSizes.xs};
	vertical-align: top;
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
	font-family: system-ui;
	font-size: ${fontSizes.s};
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

const RouterStyle = styled.div`display: inline-block;`;

// Hamburger NavBar

const HamburgerNav = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	padding: 1.7rem 5.5rem 1.7rem;
	height: 53px;
	width: 100%;
	${mediaMin.tablet`visibility: hidden;`};
	${media.tablet`visibility: visible;`};
	${media.mobileL`padding: 0 2rem;`};
`;

const HamburgerNavContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	color: #231f20;
	font-weight: 500;
	font-size: 1rem;
	text-transform: uppercase;
	line-height: 1;
	align-items: center;
	transition: all 0.9s ease;
`;

const HamburgerUtilities = styled.div`
	display: flex;
	margin-top: 14px;
`;

const HamburgerUlityItem = styled.li`
	list-style-type: none;
	padding: 0 10px;
`;

const HamburgerSearch = styled.div`
	${mediaMin.tablet`visibility: hidden;`};
	${media.tablet`visibility: visible;`};
`;

const HamburgerLine = styled.div`
	position: relative;
	cursor: pointer;
	margin: 10px;
	width: 100%;
	height: 0.3px;
	background-color: black;
	display: flex;
	align-items: center;
	justify-content: center;
	transition-duration: 0.22s;
	transition-property: transform;
	transition-delay: ${(props) => (props.menuOpen ? `0.12s` : `0s`)};
	transform: rotate(${(props) => (props.menuOpen ? `225deg` : `0deg`)});
	transition-timing-function: cubic-bezier(
		${(props) => (props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)}
	);
	&:before,
	&:after {
		content: "";
		position: absolute;
		z-index: 1;
		top: -6px;
		width: 100%;
		background-color: inherit;
		height: 0.3px;
		transition-timing-function: ease;
		transition-duration: 0.15s;
		transition-property: transform;
		border-radius: 4px;
	}
	&:after {
		top: 6px;
	}
`;

const InputNavbar = styled.input`
	z-index: 2;
	position: absolute;
	margin-left: -10px;
	cursor: pointer;
	width: 20px;
	height: 20px;
	opacity: 0;
	&:checked + ${HamburgerLine} {
		transform: rotate(135deg);
	}
	&:checked + ${HamburgerLine}:before {
		top: 0;
		transform: rotate(90deg);
	}
	&:checked + ${HamburgerLine}:after {
		top: 0;
		transform: rotate(90deg);
	}
`;

const App = (props) => {
	function refreshPage() {
		window.location.reload(false);
	}

	const [ inProp, setInProp ] = useState(false);
	const [ menuOpen, setMenuOpen ] = useState(false);
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

	const Wrapper = styled.div`
		opacity: ${(isShowing) => (isShowing ? opacity : null)};
		transition: opacity 5s ease-in;
		-moz-transition: opacity 5s ease-in;
		-webkit-transition: opacity 5s ease-in;
		-o-transition: opacity 5s ease-in;
	`;

	const LogoNav = styled.img`
		src: url(${(props) => props.src});
		width: 180px;
		position: fixed;
		opacity: ${(isShowing) => (isShowing ? opacity : null)};
		transition: opacity 5s ease-in;
		-moz-transition: opacity 5s ease-in;
		-webkit-transition: opacity 5s ease-in;
		-o-transition: opacity 5s ease-in;
		${media.tablet`width: 140px;`};
		${media.mobileL`vertical-align: middle`};
	`;

	const LogoLinkStyled = styled(Link)`
    vertical-align: middle;
  `;

	const Utilities = styled.ul`
		font-size: 10px;
		right: 30px;
		position: fixed;
		opacity: ${opacity};
	`;

	return (
		<Fragment>
			<GlobalStyle />
			{/* Hamburger Navbar */}
			<HamburgerNav>
				<HamburgerNavContainer>
					<LogoLinkStyled to="/">
						<LogoNav src="https://thebeuter.com/wp-content/uploads/2020/04/logo-black.png" />
					</LogoLinkStyled>
					<HamburgerUtilities>
						<HamburgerUlityItem>
							<Icon className="fal fa-search fa-rotate-90" onClick={openModalHandler} />
						</HamburgerUlityItem>
						<HamburgerUlityItem>
							<Link to="/cart" style={{ color: 'black', textDecoration: 'none' }}>
								<Icon className="fal fa-shopping-bag" />
								<CartNumb>({props.basketProps.basketNumbers})</CartNumb>
							</Link>
						</HamburgerUlityItem>
						<HamburgerUlityItem>
							<InputNavbar type="checkbox" onClick={() => setMenuOpen(!menuOpen)} />
							<HamburgerLine />
						</HamburgerUlityItem>
					</HamburgerUtilities>
				</HamburgerNavContainer>
			</HamburgerNav>
			{/* End Hamburger Navbar */}
			<HamburgerSearch>
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
			</HamburgerSearch>
			{/* Top Navbar */}
			<NavBar>
				<Link to="/">
					<LogoNav src="https://thebeuter.com/wp-content/uploads/2020/04/logo-black.png" />
				</Link>
				<Utilities>
					<UlityItem>
						<SearchProduct type="submit" onClick={openModalHandler}>
							SEARCH A PRODUCT <Icon className="fal fa-search fa-rotate-90" />
						</SearchProduct>
					</UlityItem>
					<UlityItem>
						<ShoppingBag to="/cart"> SHOPPING BAG ( {props.basketProps.basketNumbers} )</ShoppingBag>
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
			{/* End Top Navbar */}

			<Wrapper>
				<Container>
					<SideNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} refreshPage={refreshPage} />
					<RouterStyle>
						<Router>
							<ContactForm path="/contact" menuOpen={menuOpen} />
							<SizeChart path="/size-chart" />
							<ShippingAndReturn path="/shipping-return" />
							<PrivacyAndPolicy path="/privacy-policy" />
							<AboutUs path="/about-us" />
							<ShopAllProducts path="/" />
							<NewArrival path="/shop/new-arrival" />
							<Tops path="/product-category/top" />
							{/*  */}
							<TShirt path="product-category/top/t-shirt" />
							<Shirts path="product-category/top/shirts" />
							<Hoodies path="product-category/top/hoodies" />
							<Coats path="product-category/top/coats" />

							<Shorts path="product-category/bottom/shorts" />
							<Pants path="product-category/bottom/pants" />
							{/*  */}
							<Bottoms path="/product-category/bottom" />
							<Bags path="/product-category/bag" />
							<Product path="/product/:title_url" />
							<SearchInfo path="/search/:title" searchTerm={searchTerm} title="Profile" />
							<Cart path="/cart" />
							<Checkout path="/checkout" />
							<Form path="/add/form" />
						</Router>
					</RouterStyle>
				</Container>
				<Footer />
			</Wrapper>
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	basketProps: state.basketState
});

export default connect(mapStateToProps, { getNumbers })(App);
