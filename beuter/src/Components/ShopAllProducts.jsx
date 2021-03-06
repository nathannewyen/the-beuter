import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import media from '../Styles/media';
import Pagination from './Pagination';
import AllProducts from './AllProducts';

const Wrapper = styled.div`
	margin: 50px 0;
	${media.tablet`
margin: 10px 0;
`};
`;

const ShopAllProducts = (props) => {
	const [ loading, setLoading ] = useState(false);
	const [ currentPage, setCurrentPage ] = useState(1);
	const [ itemsPerPage ] = useState(12);

	const [ products, setProducts ] = useState([]);

	useEffect(
		() => {
			const fetchItems = async () => {
				setLoading(true);
				const res = await axios.get('/api/products');
				setProducts(res.data);
				setLoading(false);
			};
			document.title = `Shop - The Beuter`;
			fetchItems();
		},
		[ props.products ]
	);

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

	//   Change Page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<Wrapper>
			<AllProducts products={currentItems} loading={loading} />
			<Pagination itemsPerPage={itemsPerPage} totalItems={products.length} paginate={paginate} />
		</Wrapper>
	);
};

export default ShopAllProducts;
