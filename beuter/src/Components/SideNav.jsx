import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import theme from "../Styles/theme";
const { fontSizes } = theme;

const Sidenav = styled.div`
  width: 350px;
  height: 100%;
  margin-top: 50px;
  vertical-align: top;
  display: inline-block;
  position: fixed;
  z-index: 1;
  overflow-x: hidden;
`;

const AllItems = styled.ul``;

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

const SideNav = (props) => {
  return (
    <Sidenav>
      <AllItems>
        <ListItems to="/new-arrival">NEW ARRIVAL</ListItems>
        <ListItems to="#">
          TOPS
          <Item to="/">T-Shirts</Item>
          <Item to="/">Shirts</Item>
          <Item to="/">Hoodies</Item>
          <Item to="/">Sweaters</Item>
          <Item to="/">Jackets & Coats</Item>
        </ListItems>
        <ListItems to="#">
          BOTTOMS
          <Item to="/"> Pants </Item>
          <Item to="/"> Shorts </Item>
          <Item to="/"> Jeans </Item>
        </ListItems>

        <ListItems to="#">BAGS & BACKPACKS</ListItems>
        <ListItems to="#">ACCESSORIES</ListItems>
        <ListItems to="#">
          COLLECTION
          <Item to="/"> SPRING SUMMER 2020 </Item>
          <Item to="/"> BLANKS BY BEUTER </Item>
        </ListItems>
        <ListItems to="#">CAMPAIGN</ListItems>
        <ListItems to="#">ABOUT US</ListItems>
        <ListItems to="#">CONTACT</ListItems>
      </AllItems>
    </Sidenav>
  );
};

export default SideNav;