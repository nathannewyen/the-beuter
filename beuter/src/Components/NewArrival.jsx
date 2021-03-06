import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import axios from 'axios';
import media from '../Styles/media';

// Styling
const NewArrivalWrapper = styled.div`
	margin: 50px 0;
	margin-left: 400px;
`;

const ListItems = styled.ul``;

const Item = styled.li`
	list-type: none;
	display: inline-block;
	margin: 20px 60px;
	text-align: center;
`;

const ItemLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const ItemImage = styled.img`
	src: url(${(props) => props.src});
	width: 500px;

	@media ${media.laptop} {
		width: 300px;
	}
`;

const ItemTitle = styled.p`
	font-size: 12px;
	font-weight: 500;
`;

const ItemPrice = styled.p`
	font-size: 11px;
	font-weight: 500;
`;

const NewArrival = (props) => {
	var nf = new Intl.NumberFormat();

	const [ products, setProducts ] = useState([]);
	const getProductsAPI = () => {
		axios
			.get('http://localhost:8000/api/products')
			.then((res) => {
				setProducts(res.data);
				getProductsAPI();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(
		() => {
			// eslint-disable-next-line
			getProductsAPI();
		},
		[ props ]
	);

	return (
		<NewArrivalWrapper>
			<ListItems>
				{products.map((product, i) => (
					<Item key={i}>
						<ItemLink to={`/product/${product.title_url}`}>
							<ItemImage src={product.img_url1} />
							<ItemTitle>{product.title}</ItemTitle>
							<ItemPrice> {nf.format(product.price)} vnd</ItemPrice>
						</ItemLink>
					</Item>
				))}
			</ListItems>
		</NewArrivalWrapper>
	);
};

export default NewArrival;
