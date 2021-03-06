import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import theme from '../Styles/theme';
import media from '../Styles/media';
import mediaMin from '../Styles/mediaMin';
const { fontSizes } = theme;

const Wrapper = styled.div`
	margin: 50px 0;
	width: 100%;
	text-align: center;
	${media.tablet`
  text-align: left;
  `};
	${mediaMin.laptop`
  margin-left: 200px;
  `};
`;

const Container = styled.div`
	width: 500px;
	margin-right: 40px;
	padding: 0 30px;
	display: inline-block;
	${media.laptop`margin: 0px; width: 400px;`};
	${media.mobileL`width: 100%;`};
`;

const SideNav = styled.div`
	display: inline-block;
	position: fixed;
	height: 100%;
	width: 350px;
	text-align: left;
	margin: 50px 0px 0px 50px;

	${media.laptop`
  width: 250px;
  margin-left: 15px;
  `};

	${media.tablet`width: 300px;`};

	${media.mobileL`
  visibility: hidden;
  `};
`;

const ContactInfo = styled.p`
	font-size: ${fontSizes.s};
	text-align: left;
`;
const ShippingDetails = styled.div`font-size: ${fontSizes.s};`;

const CheckOutForm = styled.form``;
const ShippingForm = styled.div`
	margin-top: 40px;
	text-align: left;
`;

const FormInput = styled.input`
	width: 100%;
	margin-top: 10px;
	padding: 5px;
	font-family: system-ui;
	font-size: ${fontSizes.s};
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
	font-family: system-ui;
	font-size: ${fontSizes.s};
`;

const FormTextarea = styled.textarea`
	display: block;
	resize: none;
	height: 150px;
	margin-top: 10px;
	padding: 5px;
	width: 100%;
	font-family: system-ui;
	font-size: ${fontSizes.s};
`;

const PlaceOrderButton = styled.button`
	width: 100%;
	padding: 10px 0;
	margin-top: 30px;
	background-color: black;
	border: 0;
	font-size: ${fontSizes.md};
	letter-spacing: 2px;
	cursor: pointer;
	color: white;
	font-weight: 500;
`;

const CartInfo = styled.p`font-size: ${fontSizes.s};`;

const ProductTitle = styled.p`
	font-size: ${fontSizes.xs};
	padding-left: 20px;
	width: 280px;
	font-weight: 500;
	${media.laptop`width: 200px;`};
	${media.tablet`width: 250px;`};
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
	margin-top: 1rem;
`;
const PriceInfo = styled.span`
	font-size: ${fontSizes.xs};
	float: right;
`;

const PaymentDiv = styled.div`
	margin-top: 2rem;
	font-size: ${fontSizes.md};
	text-align: left;
`;

const PaymentMethod = styled.input`
	width: 10px;
	height: 10px;
`;
const PaymentTitle = styled.label`
	font-size: ${fontSizes.sm};
	font-weight: 500;
`;

const PaymentDetails = styled.p`
	font-size: ${fontSizes.sm};
	text-align: justify;
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

	useEffect(() => {
		document.title = `Checkout - The Beuter`;
	});
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
				<PaymentDiv>Payment Method</PaymentDiv>
				<PaymentDiv>
					<PaymentMethod type="radio" defaultChecked /> <PaymentTitle>Direct bank transfer:</PaymentTitle>
					<PaymentDetails>
						Make your payment directly into our bank account. Please use your Order ID – phone number as the
						payment reference. Your order will not be shipped until the funds have cleared in our account.
					</PaymentDetails>
				</PaymentDiv>
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
					<PriceInfo style={{ fontWeight: '600' }}>
						{nf.format(basketProps.cartCost + shippingFee)} vnd
					</PriceInfo>
				</Info>
			</SideNav>
		</Wrapper>
	);
};

const mapStateToProps = (state) => ({
	basketProps: state.basketState
});

export default connect(mapStateToProps)(Checkout);
