import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import theme from '../Styles/theme';
import media from '../Styles/media';
import mediaMin from '../Styles/mediaMin';
const { fontSizes } = theme;

const FooterWrapper = styled.div`
	padding: 0 0 10px;
	font-size: ${fontSizes.sm};
	font-weight: 500;
	width: 100w;
`;

const FooterContainer = styled.div`
	justify-content: space-between;
	display: flex;
	${media.mobileL`
  	display: block;
  	text-align: center;
  `};
`;

const LinkFooter = styled(Link)`
  text-decoration: none;
  color: black;
  display: inline-block;
  padding: 0 40px;
  ${media.mobileL`
  display: block;
  margin: 10px 0;
  font-weight: 300;
  `};
`;

const Beuter2020 = styled.span`
	display: inline-block;
	${media.mobileL`
  	display: block;
  	`};
`;

const Footer = (props) => {
	return (
		<FooterWrapper>
			<FooterContainer>
				<LinkFooter to="/privacy-policy"> Privacy & Policy </LinkFooter>{' '}
				<Beuter2020> ©2020 THE BEUTER </Beuter2020>
				<LinkFooter to="/"> Facebook </LinkFooter>
			</FooterContainer>
		</FooterWrapper>
	);
};

export default Footer;
