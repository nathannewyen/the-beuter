import React from 'react';
import styled from 'styled-components';
import theme from '../Styles/theme';
import media from '../Styles/media';

import AboutUsImage from '../Images/aboutus.jpg';

const { fontSizes } = theme;

const Wrapper = styled.div`
	margin-top: 50px;
	width: 100%;
	margin-left: 40vw;
	${media.tablet`margin-left: 30vw`};
	${media.mobileL`margin-left: 0;`};
`;

const Container = styled.div`
	width: 400px;
	text-align: center;
	${media.mobileL`
  	width: 100%;
  	padding: 1rem;
  `};
`;

const Title = styled.p`
	font-size: ${fontSizes.lg};
	font-weight: 600;
`;

const Img = styled.img`
	src: url(${(props) => props.src});
	width: 400px;
	${media.mobileL`width: 100%`};
`;

const AboutUs = (props) => {
	return (
		<Wrapper>
			<Container>
				<Title>ABOUT US</Title>
				<Img src={AboutUsImage} />
			</Container>
		</Wrapper>
	);
};

export default AboutUs;
