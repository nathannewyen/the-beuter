import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Pagination from "./Pagination";
import AllProducts from "./AllProducts";

const Wrapper = styled.div``;

const ShopAllProducts = (props) => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);

  const [products, setProducts] = useState([]);

  const getProductsAPI = () => {
    axios
      .get("/api/products")
      .then((res) => {
        setProducts(res.data);
        getProductsAPI();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setLoading(true);
    getProductsAPI();
    document.title = `Shop - The Beuter`;
    setLoading(false);
  }, [props]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  //   Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Wrapper>
      <AllProducts products={currentItems} loading={loading} />
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={products.length}
        paginate={paginate}
      />
    </Wrapper>
  );
};

export default ShopAllProducts;
