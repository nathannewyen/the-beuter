import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from '@reach/router';
import theme from '../../Styles/theme';
import media from '../../Styles/media';
import mediaMin from '../../Styles/mediaMin';
const { fontSizes } = theme;

const ShopWrapper = styled.div`
	margin: 50px 0;
	${media.tablet`margin: 10px 0;`};
`;

const ListItems = styled.ul`
	margin-left: 200px;
	text-align: left;
	${mediaMin.laptop`margin-left: 140px;`};
	${media.tablet`margin-left: 0px;`};
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

const BagProducts = (props) => {
	const nf = new Intl.NumberFormat();
	const [ products, setProducts ] = useState([]);
	useEffect(
		() => {
			const fetchItems = async () => {
				const res = await axios.get('/api/products');
				setProducts(res.data);
			};
			document.title = `Shop - The Beuter`;
			fetchItems();
		},
		[ props ]
	);

	return (
		<ShopWrapper>
			<ListItems>
				{products.map((product, i) => (
					<Item key={i}>
						{product.category === 'bag' ? (
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
export default BagProducts;
