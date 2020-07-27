import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import axios from "axios";
import media from "../Styles/media";
import theme from "../Styles/theme";
const { fontSizes } = theme;

// Styling
const ShopWrapper = styled.div`
  margin: 50px 0;
`;

const ListItems = styled.ul`
  @media ${media.desktopL} {
    margin-left: 200px;
  }
`;

const Item = styled.li`
  list-type: none;
  display: inline-block;
  margin: 20px 60px;
  text-align: center;
  @media ${media.laptopL} {
    margin: 20px;
  }
`;

const ItemLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const ItemImage = styled.img`
  src: url(${(props) => props.src});

  @media ${media.giantDesktop} {
    width: 600px;
  }
`;

const ItemTitle = styled.p`
  font-size: ${fontSizes.xs};
  font-weight: 500;
  @media ${media.laptop} {
    width: 200px;
    margin: 0 auto;
  }
`;

const ItemPrice = styled.p`
  font-size: 11px;
  font-weight: 500;
`;

const ShopAllProducts = (props) => {
  const nf = new Intl.NumberFormat();

  const [products, setProducts] = useState([]);
  const getProductsAPI = () => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        setProducts(res.data);
        getProductsAPI();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProductsAPI();
  }, [props]);

  return (
    <ShopWrapper>
      <ListItems>
        {products.map((product, i) => (
          <Item key={i}>
            <ItemLink to={`/product/${product.title_url}`}>
              <ItemImage src={product.img_url1} />{" "}
              <ItemTitle> {product.title} </ItemTitle>
              <ItemPrice>
                {nf.format(product.price)}
                vnd
              </ItemPrice>
            </ItemLink>
          </Item>
        ))}
      </ListItems>
    </ShopWrapper>
  );
};

export default ShopAllProducts;
