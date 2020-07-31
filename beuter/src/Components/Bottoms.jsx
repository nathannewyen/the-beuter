import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "@reach/router";
import theme from "../Styles/theme";
import media from "../Styles/media";
const { fontSizes } = theme;

const Wrapper = styled.div`
  margin: 50px 0;
`;

const Container = styled.div``;

const ListItems = styled.ul`
  @media ${media.desktopL} {
    margin-left: 300px;
  }
`;

const Item = styled.li`
  list-type: none;
  margin-top: 30px;
  display: inline-block;
`;

const ItemImage = styled.img`
  src: url(${(props) => props.src});
  width: 400px;
`;

const ItemLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const ItemTitle = styled.p`
  text-align: center;
  font-size: ${fontSizes.xs};
  font-weight: 500;
`;

const ItemPrice = styled.p`
  font-size: 11px;
  text-align: center;
  font-weight: 500;
`;

const Bottoms = (props) => {
  const nf = new Intl.NumberFormat();
  const [products, setProducts] = useState([]);
  const getProductsAPI = () => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProductsAPI();
  }, [props]);

  return (
    <Wrapper>
      <Container>
        <ListItems>
          {products.map((product, i) => (
            <Item key={i}>
              {product.category === "bottom" ? (
                <ItemLink to={`/product/${product.title_url}`}>
                  <ItemImage src={product.img_url1} />
                  <ItemTitle> {product.title} </ItemTitle>
                  <ItemPrice>{nf.format(product.price)} vnd</ItemPrice>
                </ItemLink>
              ) : (
                <span />
              )}
            </Item>
          ))}
        </ListItems>
      </Container>
    </Wrapper>
  );
};

export default Bottoms;
