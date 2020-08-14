import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from '@reach/router';
import media from '../../../Styles/media';
import theme from '../../../Styles/theme';
const { fontSizes } = theme;

const InfoWrapper = styled.div`
	margin: 50px;
	padding: 0px 50px;
	width: 100%;
	${media.tablet`
  margin: 0;
  padding: 0;
  `};
`;

const ListItems = styled.ul`
	margin-left: 50px;
	${media.tablet`margin: 0;`};
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
	width: 550px;
	${media.desktop`width: 400px`};
	${media.laptop`width: 250px`};
	${media.tablet`width: 300px;`};
	${media.mobileL`width: 150px;`};
`;

const ItemTitle = styled.p`
	font-size: ${fontSizes.xs};
	font-weight: 500;
	width: 200px;
	margin: 10px auto;
`;

const ItemPrice = styled.p`
	font-size: 11px;
	font-weight: 500;
`;

const Coats = (props) => {
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
			document.title = `Shirts - The Beuter`;
		},
		[ props ]
	);

	const jacket = 'jacket';

	return (
		<InfoWrapper>
			<ListItems>
				{products.filter((product) => product.title.includes(jacket.toUpperCase())).map((filteredItem, i) => (
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

export default Coats;
