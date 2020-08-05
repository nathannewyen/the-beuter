import React from "react";
import { connect } from "react-redux";
import { Link } from "@reach/router";
import styled from "styled-components";
import theme from "../Styles/theme";
const { fontSizes } = theme;

const Wrapper = styled.div`
  margin: 50px 0;
`;

const Container = styled.div`
  width: 350px;
  margin: 0 auto;
`;

const Info = styled.p`
  font-size: ${fontSizes.xs};
`;

const LinkShop = styled(Link)`
  font-weight: 500;
  color: black;
  text-decoration: underline;
  display: inline-block;
`;

const LineDivide = styled.hr`
  height: 1px;
  background-color: #b0b0b0;
`;

const PriceInfo = styled.span`
  font-size: ${fontSizes.xs};
  float: right;
`;

const CheckOutButton = styled.button`
  width: 100%;
  padding: 5px;
  background-color: black;
  color: white;
  border: 0;
  font-size: ${fontSizes.s};
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.5rem;
`;

const Infor = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductTitle = styled.p`
  font-size: ${fontSizes.xs};
  padding-left: 20px;
  width: 280px;
  font-weight: 500;
`;

const ProductQuantity = styled.span`
  font-size: ${fontSizes.xs};
  font-weight: 300;
`;

const ProductPrice = styled.p`
  padding-left: 20px;
  font-size: ${fontSizes.xs};
  font-weight: 500;
`;

const Image = styled.img`
  padding: 10px 0;
  src: url(${(props) => props.src});
  width: 70px;
`;

function Cart({ basketProps }) {
  const nf = new Intl.NumberFormat();
  let productsInCart = [];

  if (basketProps.inCart) {
    productsInCart = basketProps.products;
  } else {
    productsInCart = [];
  }

  let shippingFee = 25000;
  let additionalShippingFee = 15000;
  let totalPrice = shippingFee + additionalShippingFee + basketProps.cartCost;
  let productQuantity = 1;

  console.log(productsInCart);

  return (
    <Wrapper>
      <Container>
        <Info>There are 1 items in your Shopping Bag.</Info>
        <Info>
          <LinkShop to="/">Shop more</LinkShop> or{" "}
          <LinkShop to="/">Check out now</LinkShop>
        </Info>
        {productsInCart.map((product, i) => (
          <ProductInfo key={i}>
            <Infor>
              <Image src={product.img_url1} />
            </Infor>
            <Infor>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductPrice>
                <ProductQuantity>{productQuantity} x </ProductQuantity>
                {nf.format(product.price)} vnd
              </ProductPrice>
            </Infor>

            {productsInCart.length > 1 ? <LineDivide /> : null}
          </ProductInfo>
        ))}

        {productsInCart.length <= 1 ? <LineDivide /> : null}
        <Info>
          Subtotal <PriceInfo>{nf.format(basketProps.cartCost)} vnd</PriceInfo>
        </Info>
        <Info>
          Shipping <PriceInfo>{nf.format(shippingFee)} vnd</PriceInfo>
        </Info>
        <Info>
          Additional fee <PriceInfo>{additionalShippingFee} vnd</PriceInfo>
        </Info>
        <Info>
          Total <PriceInfo>{nf.format(totalPrice)} vnd</PriceInfo>
        </Info>
        <CheckOutButton type="submit">Proceed to check out</CheckOutButton>
      </Container>
    </Wrapper>
  );
}

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps)(Cart);
