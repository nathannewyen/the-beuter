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

import { Router, Link, navigate } from "@reach/router";
import styled from "styled-components";
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

// Info Search
const Info = (props) => {
  const [allproducts, setAllProducts] = useState([]);
  const getProductsAPI = () => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        setAllProducts(res.data);
        getProductsAPI();
        console.log(setAllProducts);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProductsAPI();
  }, [props]);

  const InfoWrapper = styled.div`
    text-align: center;
  `;

  return (
    <div>
      <InfoWrapper>
        {allproducts
          .filter((product) => product.title.includes("SHIRT"))
          .map((filteredName, i) => (
            <li key={i}>{filteredName.title}</li>
          ))}
      </InfoWrapper>
    </div>
  );
};

//   App
function App(props) {
  const [isShowing, setIsShowing] = useState(false);
  const [opacity, setOpacity] = useState(1);

  const [searchTitle, setSearchTitle] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTitle}`);
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
    opacity: ${opacity};
  `;

  const Container = styled.div`
    min-height: 85vh;
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
          <FormSearch onSubmit={onSubmit}>
            <SearchInput
              type="text"
              placeholder="Type something to search"
              onChange={(e) => setSearchTitle(e.target.value)}
              value={searchTitle}
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
              <Info path="/search/:title " setSearchTitle={setSearchTitle} />
            </Router>
          </RouterStyle>
        </Container>
        <Footer />
      </Wrapper>
    </div>
  );
}

export default App;
