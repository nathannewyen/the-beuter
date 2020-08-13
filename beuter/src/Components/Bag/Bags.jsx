import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import media from '../../Styles/media';
import BagProducts from './BagProducts';
import Pagination from '../Pagination';

const Wrapper = styled.div`
	margin: 50px 0;
	${media.tablet`
  margin: 10px 0;
  `};
`;

const Bags = (props) => {
	const [ loading, setLoading ] = useState(false);
	const [ currentPage, setCurrentPage ] = useState(1);
	const [ itemsPerPage ] = useState(9);

	const [ products, setProducts ] = useState([]);
	useEffect(
		() => {
			const fetchItems = async () => {
				setLoading(true);
				const res = await axios.get('/api/products');
				setProducts(res.data);
				console.log(res.data);
				setLoading(false);
			};
			document.title = `Shop - The Beuter`;
			fetchItems();
		},
		[ props ]
	);

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<Wrapper>
			<BagProducts products={currentItems} loading={loading} />{' '}
			<Pagination itemsPerPage={itemsPerPage} totalItems={products.length} paginate={paginate} />{' '}
		</Wrapper>
	);
};

export default Bags;
