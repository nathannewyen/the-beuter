import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const NavBar = styled.div`
  padding: 30px 40px;
`;
const LogoNav = styled.img`
  src: url(${(props) => props.src});
  width: 180px;
`;

const Utilities = styled.ul`
  font-size: 10px;
  float: right;
`;

const UlityItem = styled.li`
  display: inline-block;
  margin: 0 30px;
`;

const SearchProduct = styled(Link)`
  font-weight: 600;
  text-decoration: none;
  color: black;
`;

const SearchIcon = styled.span`
  font-size: 10px;
  font-weight: 500;
`;

const ShoppingBag = styled(Link)`
  font-size: 10px;
  font-weight: 600;
  text-decoration: none;
  color: black;
`;

const TopNav = (props) => {
  return (
    <NavBar>
      <LogoNav src="https://thebeuter.com/wp-content/uploads/2020/04/logo-black.png" />
      <Utilities>
        <UlityItem>
          <SearchProduct to="/">
            SEARCH A PRODUCT
            <SearchIcon className="fal fa-search fa-rotate-90" />
          </SearchProduct>
        </UlityItem>
        <UlityItem>
          <ShoppingBag to="/"> SHOPPING BAG</ShoppingBag>
        </UlityItem>
      </Utilities>
    </NavBar>
  );
};

export default TopNav;
