import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import media from '../Styles/media';
import theme from '../Styles/theme';
const { fontSizes } = theme;

// Styling
const ShopWrapper = styled.div`margin: 50px 0;`;

const ListItems = styled.ul`margin-left: 200px;`;

const Item = styled.li`
	list-type: none;
	text-align: center;
	display: inline-block;
`;

const ItemLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const ItemImage = styled.img`
  src: url(${(props) => props.src});
  width: 450px;
`;

const ItemTitle = styled.p`
  font-size: ${fontSizes.sm};
  margin-top: 10px;
	font-weight: 500;
`;

const ItemPrice = styled.p`
	font-size: 11px;
	font-weight: 500;
`;

const AllProducts = ({ products, loading }) => {
	const nf = new Intl.NumberFormat();

	if (loading) {
		return <h2>Loading...</h2>;
	}

	return (
		<ShopWrapper>
			<ListItems>
				{products.map((product, i) => (
					<Item key={i}>
						<ItemLink to={`/product/${product.title_url}`}>
							<ItemImage src={product.img_url1} />
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
export default AllProducts;
