import React from "react";
import styled from "styled-components";
import theme from "../Styles/theme";
const { fontSizes } = theme;

const Wrapper = styled.div``;

const PageNumbers = styled.ul`
  text-align: right;
  margin-right: 50px;
`;

const Page = styled.li`
  display: inline-block;
  width: 25px;
  height: 25px;
  margin: 3px;
  border: 1.3px solid black;
  cursor: pointer;
`;

const Numb = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  min-width: 30px;
  height: 30px;
  color: black;
  font-size: ${fontSizes.s};
  font-weight: 500;
  line-height: 5px;
  padding: 8px;
  :hover {
    color: black;
  }
`;

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Wrapper>
      <PageNumbers>
        {pageNumbers.map((number) => (
          <Page key={number}>
            <Numb onClick={() => paginate(number)} href="#!">
              {number}
            </Numb>
          </Page>
        ))}
      </PageNumbers>
    </Wrapper>
  );
};

export default Pagination;
