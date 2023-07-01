import React, { useCallback } from "react";
import { styled } from "styled-components";

const Pagination = () => {
  return (
    <PaginationContainer>
      <button name="first-page">First</button>
      <button name="page-one">Previous</button>
      <p>Current</p>
      <button name="page-one">Next</button>
      <button name="last page">Last</button>
    </PaginationContainer>
  );
};

const PaginationContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export default Pagination;
