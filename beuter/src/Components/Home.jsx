import React from 'react';
import { Router, Link } from '@reach/router';
import styled from 'styled-components';

const Navbar = styled.div`padding: 30px 40px;`;

const LogoNav = styled.img`
	src: url(${(props) => props.src});
	width: 180px;
	position: fixed;
`;

const Utilities = styled.div`
	font-size: 10px;
	position: fixed;
`;

const Item = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 10px;
  margin: 50px 0px;
  padding-right: 30px;
  font-weight: 500;
  display: inline-block;
`;

const Home = (props) => {
	return (
		<Navbar>
			<LogoNav src="https://thebeuter.com/wp-content/uploads/2020/04/logo-black.png" />
			<Utilities>
				<Item to="/shop">WEBSTORE</Item>
				<Item to="/shop">CAMPAIGN</Item>
				<Item to="/shop">ABOUT US</Item>
				<Item to="/shop">CONTACT</Item>
			</Utilities>
		</Navbar>
	);
};

export default Home;
