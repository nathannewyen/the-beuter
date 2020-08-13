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

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const res = await axios.get("http://thebeuter.herokuapp.com/api/products");
      setProducts(res.data);
      console.log(res)
      setLoading(false);
    };
    document.title = `Shop - The Beuter`;
    fetchItems();
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
