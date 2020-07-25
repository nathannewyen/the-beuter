import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import axios from "axios";

const ProductWrapper = styled.div`
  margin: 50px 0;
  margin-left: 400px;
`;

const Product = (props) => {
  return (
    <ProductWrapper>
      <h1>Hello</h1>
    </ProductWrapper>
  );
};

export default Product;
