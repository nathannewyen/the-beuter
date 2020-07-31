import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link, navigate } from '@reach/router';
import media from '../Styles/media';
import theme from '../Styles/theme';
const { fontSizes } = theme;

const InfoWrapper = styled.div`
	margin: 50px 0;
	padding: 0px 50px;
`;

const ListItems = styled.ul`@media ${media.desktopL} {margin-left: 200px;}`;

const Item = styled.li`
	list-type: none;
	display: inline-block;
	margin: 20px 60px;
	text-align: center;
	@media ${media.laptopL} {
		margin: 20px;
	}
`;

const ItemLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const ItemImage = styled.img`
	src: url(${(props) => props.src});

	@media ${media.giantDesktop} {
		width: 400px;
	}
`;

const ItemTitle = styled.p`
	font-size: ${fontSizes.xs};
	font-weight: 500;
	@media ${media.laptop} {
		width: 200px;
		margin: 0 auto;
	}
`;

const ItemPrice = styled.p`
	font-size: 11px;
	font-weight: 500;
`;

const FormSearch = styled.form`
	width: 80%;
	margin: 10px 60px;
`;

const SearchInput = styled.input`
	font-size: ${fontSizes.sm};
	font-weight: 500;
	letter-spacing: 1px;
	width: 100%;
	padding: 10px;
`;

const SearchButton = styled.input`
	margin-left: -80px;
	border: 0;
	background-color: transparent;
	cursor: pointer;
	-webkit-appearance: none;
	font-weight: 600;
	font-size: ${fontSizes.md};
	letter-spacing: 0.5px;
`;

const SearchInfo = (props) => {
	const [ searchTerm, setSearchTerm ] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		navigate(`/search/${searchTerm}`);
	};

	const nf = new Intl.NumberFormat();
	const [ products, setProducts ] = useState([]);
	const getProductsAPI = () => {
		axios
			.get('http://localhost:8000/api/products')
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
			document.title = `You searched for ${props.title} - The Beuter`;
		},
		[ props ]
	);

	return (
		<InfoWrapper>
			<ListItems>
				<FormSearch onSubmit={onSubmit}>
					<SearchInput
						type="text"
						placeholder={props.title}
						onChange={(e) => setSearchTerm(e.target.value)}
						defaultValue={searchTerm}
					/>
					<SearchButton type="submit" value="Search" />
				</FormSearch>
				{products
					.filter((product) => product.title.includes(props.title.toUpperCase()))
					.map((filteredItem, i) => (
						<Item key={i}>
							<ItemLink to={`/product/${filteredItem.title_url}`}>
								<ItemImage src={filteredItem.img_url1} />
								<ItemTitle> {filteredItem.title} </ItemTitle>
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

export default SearchInfo;
