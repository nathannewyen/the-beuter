import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from '@reach/router';
import media from '../../../Styles/media';
import mediaMin from '../../../Styles/mediaMin';
import theme from '../../../Styles/theme';
const { fontSizes } = theme;

const InfoWrapper = styled.div`
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
const TShirt = (props) => {
	const nf = new Intl.NumberFormat();
	const [ products, setProducts ] = useState([]);
	const getProductsAPI = () => {
		axios
			.get('/api/products')
			.then((res) => {
				setProducts(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(
		() => {
			getProductsAPI();
			document.title = `T-Shirt - The Beuter`;
		},
		[ props ]
	);

	const tshirt = 't-shirt';

	return (
		<InfoWrapper>
			<ListItems>
				{products.filter((product) => product.title.includes(tshirt.toUpperCase())).map((filteredItem, i) => (
					<Item key={i}>
						<ItemLink to={`/product/${filteredItem.title_url}`}>
							<ItemImage src={filteredItem.img_url1} /> <ItemTitle> {filteredItem.title} </ItemTitle>{' '}
							<ItemPrice>
								{nf.format(filteredItem.price)}
								vnd
							</ItemPrice>
						</ItemLink>
					</Item>
				))}
			</ListItems>
		</InfoWrapper>
	);
};

export default TShirt;
