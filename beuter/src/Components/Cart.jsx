import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from '@reach/router';
import styled from 'styled-components';
import theme from '../Styles/theme';
import media from '../Styles/media';
import mediaMin from '../Styles/mediaMin';
import { deleteItem } from '../actions/removeItem';

const { fontSizes } = theme;

const Wrapper = styled.div`
	margin: 50px 0;
	${mediaMin.laptopL`margin-left: 35em;`};
	${media.laptop`margin-left: 240px;`};
	${media.tablet`margin: 10px 0;`};
`;

const Container = styled.div`
	width: 350px;
	margin: 0 auto;
	${media.tablet`margin: 10px 80px;`};
	${media.mobileL`margin: 1rem; `};
`;

const Info = styled.p`
	font-size: ${fontSizes.xs};
	margin-top: 1rem;
`;

const LinkShop = styled(Link)`
  font-weight: 500;
  color: black;
  text-decoration: underline;
  display: inline-block;
`;

const PriceInfo = styled.span`
	font-size: ${fontSizes.xs};
	float: right;
`;

const CheckOutButton = styled.button`
	width: 100%;
	padding: 10px 0 5px;
	background-color: black;
	border: 0;
	font-size: ${fontSizes.s};
	letter-spacing: 2px;
	cursor: pointer;
	font-weight: bold;
	color: white;
`;

const LinkStyle = styled(Link)`
  color: white;
  text-decoration: none;
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

const ProductTitle = styled.p`
	font-size: ${fontSizes.xs};
	padding-left: 20px;
	width: 280px;
	font-weight: 500;
`;

const ProductSize = styled.p`
	font-size: ${fontSizes.xs};
	padding-left: 20px;
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

const RemoveButton = styled.button`
	font-size: ${fontSizes.xs};
	font-weight: bold;
	letter-spacing: 0.7px;
	color: black;
	border: 0;
	background-color: transparent;
	cursor: pointer;
	text-decoration: underline;
	margin-left: 30px;
	display: inline-block;
`;

const ReturnButton = styled.button`
	background-color: black;
	font-size: ${fontSizes.md};
	font-weight: 500;
	letter-spacing: 2px;
	color: white;
	padding: 8px 0;
	margin: 30px 0 50px;
	border: 0;
	width: 100%;
	cursor: pointer;
`;

const Cart = ({ basketProps, deleteItem }) => {
	const nf = new Intl.NumberFormat();
	let productsInCart = [];

	if (basketProps.inCart) {
		productsInCart = basketProps.products;
	} else {
		productsInCart = [];
	}

	useEffect(() => {
		document.title = `Cart - The Beuter`;
	});

	let shippingFee = 25000;
	let additionalShippingFee = 15000;
	return (
		<Wrapper>
			{productsInCart.length >= 1 ? (
				<Container>
					<Info>There are {productsInCart.length} items in your Shopping Bag.</Info>
					<Info>
						<LinkShop to="/">Shop more</LinkShop> or <LinkShop to="/checkout">Check out now</LinkShop>
					</Info>
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
									<RemoveButton
										type="submit"
										onClick={() =>
											deleteItem({
												title: product.title,
												quantity: product.quantity,
												price: product.price
											})}
									>
										Remove
									</RemoveButton>
								</ProductPrice>
							</Infor>
						</ProductInfo>
					))}
					<Info>
						Subtotal <PriceInfo>{nf.format(basketProps.cartCost)} vnd</PriceInfo>
					</Info>
					<Info>
						Shipping <PriceInfo>{nf.format(shippingFee)} vnd</PriceInfo>
					</Info>
					<Info>
						Additional fee <PriceInfo>{nf.format(additionalShippingFee)} vnd</PriceInfo>
					</Info>
					<Info>
						Total
						<PriceInfo style={{ fontWeight: '500' }}>
							{nf.format(basketProps.cartCost + additionalShippingFee + shippingFee)} vnd
						</PriceInfo>
					</Info>
					<LinkStyle to="/checkout">
						<CheckOutButton type="submit">Proceed to check out</CheckOutButton>
					</LinkStyle>
				</Container>
			) : (
				<Container>
					<Info>Your cart is currently empty.</Info>
					<Link to="/">
						<ReturnButton>Return to shop</ReturnButton>
					</Link>
				</Container>
			)}
		</Wrapper>
	);
};

const mapStateToProps = (state) => ({
	basketProps: state.basketState
});

export default connect(mapStateToProps, { deleteItem })(Cart);
