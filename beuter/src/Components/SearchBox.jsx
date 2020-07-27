import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import theme from "../Styles/theme";
import media from "../Styles/media";
const { fontSizes } = theme;

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1;
  height: 100%;
`;

const Container = styled.div`
  width: 500px;
  margin: 10% auto;
`;

const CloseButton = styled(Link)`
  border: 0px;
  display: block;
  color: black;
  font-size: ${fontSizes.md};
  font-weight: 600;
  text-decoration: none;
  float: right;
`;

const Children = styled.div``;

const SearchBox = (props) => {

  return (
    <Wrapper
      style={{
        transform: props.show ? "translateY(0vh)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      <Container>
        <CloseButton to="#" onClick={props.close}>
          ×
        </CloseButton>
        <Children>{props.children}</Children>
      </Container>
    </Wrapper>
  );
};

export default SearchBox;
