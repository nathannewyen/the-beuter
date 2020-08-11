import React from 'react';
import styled from 'styled-components';
import theme from '../Styles/theme';
import mediaMin from '../Styles/mediaMin';
import media from '../Styles/media';
const { fontSizes } = theme;

const Wrapper = styled.div`
	margin: 50px 0 0;
	width: 100%;
	${mediaMin.desktop`margin-left: 400px;`};
`;

const Container = styled.div`
	width: 400px;
	margin: 0 auto;
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
				<Img src="https://thebeuter.com/wp-content/uploads/2020/04/ABOUT-US-EN222-1442x2048.jpg" />
			</Container>
		</Wrapper>
	);
};

export default AboutUs;
