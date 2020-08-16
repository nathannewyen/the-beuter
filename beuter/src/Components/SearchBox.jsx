import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from '@reach/router';
import theme from '../Styles/theme';
import media from '../Styles/media';
const { fontSizes } = theme;

const Wrapper = styled.div`
	position: fixed;
	width: 100%;
	z-index: 1;
	height: 100%;
`;

const Container = styled.div`
	width: 600px;
	margin: 10% auto;

	${media.laptop`
  	width: 500px;
  	margin: 20%;
  	`};

	${media.mobileL`
   margin: 50% 0;
   width: 100%;
   padding: 1rem;`};
`;

const CloseButton = styled(Link)`
  border: 0px;
  display: block;
  color: black;
  font-size: ${fontSizes.sm};
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 0.5px;
  font-size: ${fontSizes.s};

  ${media.mobileL`margin-bottom: 15px;`}
`;

const Children = styled.div``;

const SearchBox = (props) => {
	return (
		<Wrapper
			style={{
				transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
				opacity: props.show ? '1' : '0'
			}}
		>
			<Container>
				<CloseButton to="#" onClick={props.close}>
					CLOSE SEARCH {' '}
					<svg width="8" height="9" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M4.707 4.5l3.147 3.146a.5.5 0 1 1-.708.708L4 5.207.854 8.354a.5.5 0 1 1-.708-.708L3.293 4.5.146 1.354A.5.5 0 1 1 .854.646L4 3.793 7.146.646a.5.5 0 1 1 .708.708L4.707 4.5z"
							fill="#1F1E1E"
							fillRule="nonzero"
						/>
					</svg>
				</CloseButton>
				<Children> {props.children} </Children>
			</Container>
		</Wrapper>
	);
};

export default SearchBox;
