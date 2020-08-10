import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import theme from '../../Styles/theme';
import media from '../../Styles/media';
const { fontSizes } = theme;

// Styling
const ShopWrapper = styled.div`
	margin: 50px 0;
	${media.tablet`
  margin: 10px 0;
  `};
`;

const ListItems = styled.ul`
	margin-left: 200px;
	text-align: center;
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
	${media.desktop`width: 450px`};
	${media.laptop`width: 250px`};
	${media.tablet`width: 300px;`};
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
`;

const ItemPrice = styled.p`
	font-size: 11px;
	font-weight: 500;
`;

const BottomProducts = ({ products, loading }) => {
	const nf = new Intl.NumberFormat();

	if (loading) {
		return <ShopWrapper>Loading...</ShopWrapper>;
	}

	return (
		<ShopWrapper>
			<ListItems>
				{products.map((product, i) => (
					<Item key={i}>
						{product.category === 'bottom' ? (
							<ItemLink to={`/product/${product.title_url}`}>
								<ItemImage src={product.img_url1} /> <ItemTitle> {product.title} </ItemTitle>
								<ItemPrice>{nf.format(product.price)} vnd</ItemPrice>
							</ItemLink>
						) : null}
					</Item>
				))}
			</ListItems>
		</ShopWrapper>
	);
};
export default BottomProducts;
