import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import theme from "../Styles/theme";
import media from "../Styles/media";
const { fontSizes } = theme;

const Wrapper = styled.div`
  margin: 50px 0;
  width: 100%;
  text-align: center;
`;

const Container = styled.div`
  width: 400px;
  margin-right: 50px;
  display: inline-block;
`;

const SideNav = styled.div`
  display: inline-block;
  position: fixed;
  height: 100%;
  width: 350px;
  text-align: left;
  margin: 50px 0px 0px 50px;
`;

const ContactInfo = styled.p`
  font-size: ${fontSizes.s};
  text-align: left;
`;
const ShippingDetails = styled.div`
  font-size: ${fontSizes.s};
`;

const CheckOutForm = styled.form``;
const ShippingForm = styled.div`
  margin-top: 40px;
  text-align: left;
`;

const FormInput = styled.input`
  width: 100%;
  margin-top: 10px;
  padding: 5px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 10px;
`;

const ShippingFormInput = styled.input`
  padding: 5px;
  width: 100%;
  margin-top: 10px;
`;

const FormTextarea = styled.textarea`
  display: block;
  resize: none;
  height: 150px;
  margin-top: 10px;
  padding: 10px 5px;
  width: 100%;
`;

const PlaceOrderButton = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 30px;
  background-color: black;
  border: 0;
  font-size: ${fontSizes.md};
  letter-spacing: 2px;
  cursor: pointer;
  color: white;
  font-weight: 500;
`;

const CartInfo = styled.p`
  font-size: ${fontSizes.s};
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

const ProductSize = styled.p`
  font-size: ${fontSizes.xs};
  padding-left: 20px;
`;

const ProductPrice = styled.p`
  padding-left: 20px;
  font-size: ${fontSizes.xs};
  font-weight: 500;
`;

const Image = styled.img`
  padding: 10px 0;
  src: url(${(props) => props.src});
  width: 50px;
`;

const LineDivide = styled.hr`
  height: 1px;
  background-color: #b0b0b0;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #b0b0b0;
  margin-top: 1.5rem;
`;

const Infor = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Info = styled.p`
  font-size: ${fontSizes.xs};
`;
const PriceInfo = styled.span`
  font-size: ${fontSizes.xs};
  float: right;
`;

const Checkout = ({ basketProps }) => {
  const nf = new Intl.NumberFormat();
  let productsInCart = [];

  if (basketProps.inCart) {
    productsInCart = basketProps.products;
  } else {
    productsInCart = [];
  }

  let shippingFee = 25000;
  return (
    <Wrapper>
      <Container>
        <CheckOutForm>
          <ContactInfo>Contact information [buyer]</ContactInfo>
          <FormInput type="text" placeholder="First name" />
          <FormInput placeholder="Last name" />
          <FormInput placeholder="Phone number" />
          <FormInput placeholder="Email address" />
          <ShippingForm>
            <ShippingDetails>Shipping Detail [ship to]</ShippingDetails>
            <Grid>
              <ShippingFormInput placeholder="First name" />
              <ShippingFormInput placeholder="Last name" />
            </Grid>
            <ShippingFormInput placeholder="Company name" />
            <ShippingFormInput placeholder="Street address" />
            <ShippingFormInput placeholder="Apartment, suite, unit, etc. (optional)" />
            <ShippingFormInput placeholder="Phone number" />
            <ShippingFormInput placeholder="City" />
            <FormTextarea placeholder="Order notes" />
            <PlaceOrderButton type="submit"> Place order </PlaceOrderButton>
          </ShippingForm>
        </CheckOutForm>
      </Container>
      <SideNav>
        <CartInfo>Your order</CartInfo>
        {productsInCart.map((product, i) => (
          <ProductInfo key={i}>
            <Infor>
              <Image src={product.img_url1} />
            </Infor>
            <Infor>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductSize>Size: {product.pickSize}</ProductSize>
              <ProductPrice>
                <ProductQuantity>{product.quantity} x </ProductQuantity>
                {nf.format(product.price)} vnd
              </ProductPrice>
            </Infor>
          </ProductInfo>
        ))}
        {productsInCart.length < 1 ? <LineDivide /> : null}
        <Info>
          Subtotal <PriceInfo>{nf.format(basketProps.cartCost)} vnd</PriceInfo>
        </Info>
        <Info>
          Shipping <PriceInfo>{nf.format(shippingFee)} vnd</PriceInfo>
        </Info>
        <Info>
          Total
          <PriceInfo style={{ fontWeight: "600" }}>
            {nf.format(basketProps.cartCost + shippingFee)} vnd
          </PriceInfo>
        </Info>
      </SideNav>
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps)(Checkout);
