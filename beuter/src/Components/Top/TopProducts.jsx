import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import media from '../../Styles/media';
import theme from '../../Styles/theme';

const { fontSizes } = theme;

// Styling
const ShopWrapper = styled.div`
	margin: 50px 0;
	${media.tablet`margin: 10px 0;`};
`;

const ListItems = styled.ul`
	margin-left: 200px;
	text-align: left;
	${media.tablet`
		margin-left: 0px;
		text-align: left;
	`};
`;

const Item = styled.li`
	margin: 10px 0;
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
	width: 600px;
	${media.desktop`width: 400px`};
	${media.laptop`width: 250px`};
	${media.tablet`width: 300px;`};
	${media.mobileL`width: 150px;`};
`;

const ItemTitle = styled.p`
	font-size: ${fontSizes.sm};
	margin: 10px 20px;
	font-weight: 500;
	${media.laptop`
  width: 230px;
  `};

	${media.tablet`
  font-size: 12px;
  width: 300px;
  `};

	${media.mobileL`
  width: 120px; 
  font-size: 9px;`};
`;

const ItemPrice = styled.p`
	font-size: 11px;
	font-weight: 500;
`;

const TopProducts = ({ products, loading }) => {
	const nf = new Intl.NumberFormat();

	if (loading) {
		return null;
	}

	return (
		<ShopWrapper>
			<ListItems>
				{products.map((product, i) => (
					<Item key={i}>
						{product.category === 'top' ? (
							<ItemLink to={`/product/${product.title_url}`}>
								<ItemImage src={product.img_url1} /> <ItemTitle> {product.title} </ItemTitle>{' '}
								<ItemPrice>
									{nf.format(product.price)}
									vnd
								</ItemPrice>
							</ItemLink>
						) : null}
					</Item>
				))}
			</ListItems>
		</ShopWrapper>
	);
};
export default TopProducts;
