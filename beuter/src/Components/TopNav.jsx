import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox.jsx";
import styled from "styled-components";
import { Link } from "@reach/router";
import theme from "../Styles/theme";
const { fontSizes } = theme;

const NavBar = styled.div`
  padding: 30px 70px;
`;
const LogoNav = styled.img`
  src: url(${(props) => props.src});
  width: 180px;
  position: fixed;
`;

const Utilities = styled.ul`
  font-size: 10px;
  right: 30px;
  position: fixed;
`;

const UlityItem = styled.li`
  display: inline-block;
  margin: 0 30px;
`;

const SearchProduct = styled(Link)`
  font-weight: 500;
  text-decoration: none;
  display: inline-block;
  color: black;
`;

const SearchIcon = styled.span`
  font-size: ${fontSizes.xs};
  font-weight: 500;
`;

const ShoppingBag = styled(Link)`
  font-size: 10px;
  font-weight: 500;
  display: inline-block;
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
  color: #b0b0b0;
  font-size: ${fontSizes.sm};
  font-weight: 500;
  width: 100%;
  padding: 10px;
`;

const TopNav = (props) => {
  const [isShowing, setIsShowing] = useState(false);

  const openModalHandler = (e) => {
    e.preventDefault();
    setIsShowing(true);
  };

  const closeModalHandler = (e) => {
    e.preventDefault();
    setIsShowing(false);
  };

  return (
    <NavBar>
      <Link to="/">
        <LogoNav src="https://thebeuter.com/wp-content/uploads/2020/04/logo-black.png" />
      </Link>
      <Utilities>
        <UlityItem>
          <SearchProduct to="/search" onClick={openModalHandler}>
            SEARCH A PRODUCT
            <SearchIcon className="fal fa-search fa-rotate-90" />
          </SearchProduct>
        </UlityItem>
        <UlityItem>
          <ShoppingBag to="/"> SHOPPING BAG</ShoppingBag>
        </UlityItem>
      </Utilities>
      {isShowing ? (
        <SearchBoxModal onClick={closeModalHandler}></SearchBoxModal>
      ) : null}
      <SearchBox className="modal" show={isShowing} close={closeModalHandler}>
        <SearchTitle>What are you looking for?</SearchTitle>
        <SearchInput type="text" placeholder="Type something to search" />
      </SearchBox>
    </NavBar>
  );
};

export default TopNav;
