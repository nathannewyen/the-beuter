import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
const SearchInfo = (props) => {
	const [ response, setResponse ] = useState([]);
	useEffect(
		() => {
			getProductsAPI();
			console.log(props);
		},
		[ props ]
	);

	const getProductsAPI = () => {
		axios
			.get('http://localhost:8000/api/products')
			.then((res) => {
				setResponse(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const InfoWrapper = styled.div`text-align: center;`;

	return (
		<div>
			{response.map((product, i) => (
				<p key={i}>
					<h1> {product.title} </h1>
				</p>
			))}
			<InfoWrapper>Test {props == 'beuter' ? <h1> Hello World </h1> : <h1>Null</h1>} </InfoWrapper>{' '}
		</div>
	);
};

export default SearchInfo;
