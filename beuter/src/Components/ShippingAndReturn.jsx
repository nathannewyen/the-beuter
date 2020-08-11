import React from 'react';
import styled from 'styled-components';
import theme from '../Styles/theme';
import mediaMin from '../Styles/mediaMin';
const { fontSizes } = theme;

const ShippingAndReturnWrapper = styled.div`
	margin: 50px 0 0;
	width: 100%;
	${mediaMin.desktop`margin-left: 400px;`};
`;

const ShippingContainer = styled.div`
	width: 400px;
	margin: 0 auto;
`;

const Label = styled.div`
	text-align: center;
	font-weight: 600;
	font-size: ${fontSizes.lg};
`;

const ListTitle = styled.p`
	font-size: ${fontSizes.s};
	font-weight: 600;
`;

const ListInfo = styled.ol``;

const Info = styled.li`
	font-size: ${fontSizes.sm};
	font-weight: 500;
`;
const Details = styled.p`
	font-size: ${fontSizes.sm};
	font-weight: 300;
`;

const ShippingAndReturn = (props) => {
	return (
		<ShippingAndReturnWrapper>
			<ShippingContainer>
				<Label>SHIPING AND RETURN</Label>
				<ListTitle>SHIPPING</ListTitle>
				<ListInfo>
					<Info>
						Delivery information
						<Details>Beuter takes delivery nationwide.</Details>
						<Details>
							Once your order has been shipped, you will receive a status update email with delivery
							details along with tracking number to track delivery status. You can click the link in the
							email to check the status of your order.
						</Details>
					</Info>
					<Info>
						Delivery Fee and Delivery Time
						<Details>
							Shipping charges will vary based on the size, weight and destination of the order.
						</Details>
						<Details>For orders paid on delivery, please pay an additional COD fee of 15,000 VND.</Details>
						<Details>
							Domestic delivery time will be from 2 to 5 working days, delivery time is from 10AM to 6PM.
						</Details>
						<Details>
							In the event of a force majeure event affecting the goods or delivery time, we will notify
							customers and cooperate with the shipping unit to process orders as soon as possible.
						</Details>
					</Info>
				</ListInfo>
				<ListTitle>RETURN</ListTitle>
				<ListInfo>
					<Info>
						Products without manufacturing defect can be exchanged for another new product according to
						customer needs when fully meeting the following conditions:
						<Details>
							-Only to be redeemed within 7 (seven) days from the date of purchase indicated on the
							purchase receipt;
						</Details>
						<Details>-The original product and the purchase receipt need to be returned; and</Details>
						<Details>
							-The exchanged product must be new, in its original condition, with full price labels,
							product labels and other labels (if any).
						</Details>
					</Info>
					<Info>(Refund)</Info>
					<Details>-Products without manufacturing defects are not paid and refunded.</Details>
					<Details>-Product can only be exchanged in stores where it was previously purchased.</Details>
					<Details>
						-For products purchased online, customers can exchange via courier service by returning the
						information and address we provide.
					</Details>
					<Details>
						-In the event that the customer changes the air due to Beuter’s reasons, please pay all return
						delivery costs and new shipping costs.
					</Details>
					<Info>
						(Product is exchanged)
						<Details>
							- Only exchange products for other products with the same price or price higher than the
							original purchase price (if the price is higher, the customer must pay the difference).
						</Details>
					</Info>
					<Info>
						BEUTER does not accept returns of products without manufacturing defects if one of the following
						occurs:
						<Details>-The product has been purchased more than 7 days earlier;</Details>
						<Details>-The product does not have the original purchase receipt;</Details>
						<Details>-The product has been repaired;</Details>
						<Details>-The product does not have full price label, product label and other labels;</Details>
						<Details>-Products sold in a discount promotion program have a no return policy;</Details>
						<Details>
							-Products such as underwear, underpants, socks, mixed products not packaged; or
						</Details>
						<Details>
							-The product is in unsold condition (such as dirty, damaged, used, torn, repaired, or
							washed).
						</Details>
						<Details>-(In case the product has a manufacturing defect)</Details>
						<Details>
							-The product can be exchanged for another new product or paid for a refund within 06 (six)
							months from the date of purchase as stated on the purchase receipt if the product has a
							manufacturing defect. Purchase conditions need to be provided.The conditions that apply to
							exchange or return in this case will only apply to products in new conditions, as originally
							with full price, product and other labels.
						</Details>
						<Details>
							-(Packing costs and expenses other than the product price may not be refunded.)
						</Details>
						<Details>
							-BEUTER reserves the right to make the final decision regarding the exchange, return and
							adjustment of this Policy at any time without notice.
						</Details>
					</Info>
				</ListInfo>
			</ShippingContainer>
		</ShippingAndReturnWrapper>
	);
};

export default ShippingAndReturn;
