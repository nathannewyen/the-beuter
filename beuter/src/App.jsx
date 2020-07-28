import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from "./Components/Home";
import SideNav from "./Components/SideNav";
import SearchBox from "./Components/SearchBox.jsx";
import ShopAllProducts from "./Components/ShopAllProducts";
import NewArrival from "./Components/NewArrival";
import Product from "./Components/Product";
import ContactForm from "./Components/ContactForm";
import SizeChart from "./Components/SizeChart";
import ShippingAndReturn from "./Components/ShippingAndReturn";
import PrivacyAndPolicy from "./Components/PrivacyAndPolicy";
import AboutUs from "./Components/AboutUs";
import Tops from "./Components/Tops";
import Bottoms from "./Components/Bottoms";
import Footer from "./Components/Footer";
import GlobalStyle from "./Styles/GlobalStyle";

import { Router } from "@reach/router";
import styled from "styled-components";
import { Link } from "@reach/router";
import theme from "./Styles/theme";
import media from "./Styles/media";
const { fontSizes } = theme;

const NavBar = styled.div`
  padding: 30px 70px;
`;

const UlityItem = styled.li`
  display: inline-block;
  margin: 0 30px;
`;

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

function App() {
  const [isShowing, setIsShowing] = useState(false);
  const [opacity, setOpacity] = useState(1);

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
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

  const handleSearchButton = (e) => {
    e.preventDefault();
    console.log("Hello");
  };

  const Wrapper = styled.div`
    opacity: ${opacity};
  `;

  const Container = styled.div`
    min-height: 90vh;
    width: 100%;
  `;

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
            <ShoppingBag to="/"> SHOPPING BAG</ShoppingBag>
          </UlityItem>
        </Utilities>
        {isShowing ? <SearchBoxModal onClick={closeModalHandler} /> : null}
        <SearchBox show={isShowing} close={closeModalHandler}>
          <SearchTitle>What are you looking for?</SearchTitle>
          <SearchInput
            type="text"
            placeholder="Type something to search"
            onChange={handleSearch}
          />
          <SearchButton
            type="submit"
            value="Search"
            onClick={handleSearchButton}
          />
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
            </Router>
          </RouterStyle>
        </Container>
        <Footer />
      </Wrapper>
    </div>
  );
}

export default App;
