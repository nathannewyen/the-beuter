import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import theme from '../Styles/theme';
import media from '../Styles/media';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
const { fontSizes } = theme;

const Wrapper = styled.div``;

const Sidenav = styled.nav`
	padding: 0 30px;
	margin-top: 50px;
	vertical-align: top;
	display: inline-block;
	position: fixed;
	z-index: 1;
	overflow-x: hidden;
	width: 300px;

	${media.laptop`
  width: 200px;
  padding: 0 10px;
  `};

	${media.tablet`visibility: hidden;`};
`;

const AllItems = styled.ul`
	${media.tablet`
  margin-top: 50px;
  position: fixed;
  top: 0;
  right: 0;
  background: #fff;
  z-index: 1;
  width: 50%;
  max-width: none;
  height: 100vh;
  overflow: auto;
  transition: all .2s ease-in-out;
  `};

	${media.mobileL`
  width: 100%;
  `};
`;

const ListItems = styled(Link)`
  font-size: ${fontSizes.xs};
  font-weight: 500;
  color: black;
  margin-top: 18px;
  text-decoration: none;
  display: block;
`;

const Item = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: ${fontSizes.xs};
  margin-top: 8px;
  font-weight: 350;
  display: block;
`;

const HamburgerSize = styled.nav``;

const SideNav = (props) => {
	return (
		<Wrapper>
			{props.menuOpen ? (
				<HamburgerSize onClick={props.refreshPage}>
					<AllItems
						onClick={() => {
							props.setMenuOpen(!props.menuOpen);
						}}
					>
						<ListItems to="/product-category/top"> TOPS </ListItems>
						<Item to="/product-category/top/t-shirt"> T - Shirts </Item>
						<Item to="product-category/top/shirts"> Shirts </Item>
						<Item to="product-category/top/hoodies"> Hoodies </Item>
						<Item to="product-category/top/coats"> Jackets & Coats </Item>
						<ListItems to="/product-category/bottom"> BOTTOMS </ListItems>
						<Item to="product-category/bottom/pants"> Pants </Item>
						<Item to="product-category/bottom/shorts"> Shorts </Item>
						<ListItems to="/product-category/bag"> BAGS & BACKPACKS </ListItems>
						<ListItems to="/about-us"> ABOUT US </ListItems> <ListItems to="/contact"> CONTACT </ListItems>
					</AllItems>
				</HamburgerSize>
			) : null}
			<Sidenav>
				<AllItems>
					<ListItems to="/product-category/top"> TOPS </ListItems>
					<Item to="/product-category/top/t-shirt"> T-Shirts </Item>
					<Item to="product-category/top/shirts"> Shirts </Item>
					<Item to="product-category/top/hoodies"> Hoodies </Item>
					<Item to="product-category/top/coats"> Jackets & Coats </Item>
					<ListItems to="/product-category/bottom">BOTTOMS</ListItems>
					<Item to="product-category/bottom/pants"> Pants </Item>
					<Item to="product-category/bottom/shorts"> Shorts </Item>
					<ListItems to="/product-category/bag"> BAGS & BACKPACKS </ListItems>
					<ListItems to="/about-us"> ABOUT US </ListItems> <ListItems to="/contact"> CONTACT </ListItems>
				</AllItems>
			</Sidenav>
		</Wrapper>
	);
};

export default SideNav;
