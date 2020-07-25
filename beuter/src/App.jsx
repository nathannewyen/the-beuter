import React from "react";
import { Router } from "@reach/router";
import SideNav from "./Components/SideNav";
import TopNav from "./Components/TopNav";
import NewArrival from "./Components/NewArrival";
import Product from "./Components/Product";
import GlobalStyle from "./Styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <TopNav />
      <SideNav />
      <Router style={{ display: "inline-block" }}>
        <NewArrival path="/new-arrival" />
        <Product path="/product/:title" />
      </Router>
    </>
  );
}

export default App;
