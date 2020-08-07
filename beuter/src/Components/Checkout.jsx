import React from 'react';
import styled from 'styled-components';
import theme from '../Styles/theme';
const { fontSizes } = theme;

const Wrapper = styled.div`
	margin: 50px 0;
	width: 100%;
`;

const Container = styled.div`
	width: 400px;
	margin: 0 auto;
`;

const ContactInfo = styled.p`font-size: ${fontSizes.s};`;
const ShippingDetails = styled.p`font-size: ${fontSizes.s};`;

const CheckOutForm = styled.form``;
const ShippingForm = styled.p`margin-top: 40px;`;

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

const Checkout = (props) => {
	return (
		<Wrapper>
			<Container>
				<CheckOutForm>
					<ContactInfo>Contact information [buyer]</ContactInfo>
					<FormInput placeholder="First name" />
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
		</Wrapper>
	);
};

export default Checkout;
