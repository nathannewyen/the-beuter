import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import axios from 'axios';
import theme from '../Styles/theme';
import media from '../Styles/media';
const { fontSizes } = theme;

const ProductWrapper = styled.div`
	margin: 50px 0;
	margin-left: 400px;
	width: 100%;
	text-align: center;
	@media ${media.laptopL} {
		margin-left: 300px;
	}
`;

const ProductImage = styled.div`
	width: 100%;
	margin-top: 20px;
`;

const Image = styled.img`
	src: url(${(props) => props.src});
	@media ${media.laptopL} {
		width: 600px;
	}
`;

const Product = (props) => {
	const [ title, setTitle ] = useState(props.title);
	const [ price, setPrice ] = useState(props.price);
	const [ description1, setDescription1 ] = useState(props.description1);
	const [ description2, setDescription2 ] = useState(props.description2);
	const [ description3, setDescription3 ] = useState(props.description3);
	const [ img_url1, setImageUrl1 ] = useState(props.img_url1);
	const [ img_url2, setImageUrl2 ] = useState(props.img_url2);
	const [ img_url3, setImageUrl3 ] = useState(props.img_url3);
	const [ img_url4, setImageUrl4 ] = useState(props.img_url4);

	// eslint-disable-next-line
	const [ errors, setErrors ] = useState({});

	useEffect(() => {
		getOneProduct();
	});

	const getOneProduct = () => {
		axios
			.get(`http://localhost:8000/api/products/${props.title_url}`)
			.then((res) => {
				setTitle(res.data.title);
				setPrice(res.data.price);
				setDescription1(res.data.description1);
				setDescription2(res.data.description2);
				setDescription3(res.data.description3);
				setImageUrl1(res.data.img_url1);
				setImageUrl2(res.data.img_url2);
				setImageUrl3(res.data.img_url3);
				setImageUrl4(res.data.img_url4);
			})
			.catch((err) => console.log(err));
	};
	return (
		<ProductWrapper>
			<ProductImage>
				<Image src={img_url1} />
			</ProductImage>
			<ProductImage>
				<Image src={img_url2} />
			</ProductImage>
			<ProductImage>
				<Image src={img_url3} />
			</ProductImage>
			<ProductImage>
				<Image src={img_url4} />
			</ProductImage>
		</ProductWrapper>
	);
};

export default Product;
