import React from "react";
import { Router } from "@reach/router";
import styled from "styled-components";
import Home from "./Components/Home";
import SideNav from "./Components/SideNav";
import TopNav from "./Components/TopNav";
import ShopAllProducts from "./Components/ShopAllProducts";
import NewArrival from "./Components/NewArrival";
import Product from "./Components/Product";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
import GlobalStyle from "./Styles/GlobalStyle";

const RouterStyle = styled.div`
  display: inline-block,
  min-height: 100%;
  margin-left: 350px;
`;

const PageContainer = styled.div`
  position: relative;
  min-height: 100%;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <TopNav />
        <SideNav />
        <RouterStyle>
          <Router>
            <ContactForm path="/contact" />
            <ShopAllProducts path="/" />
            <NewArrival path="/shop/new-arrival" />
            <Product path="/product/:title_url" />
          </Router>
        </RouterStyle>
      </PageContainer>
      <Footer />
    </>
  );
}

export default App;
