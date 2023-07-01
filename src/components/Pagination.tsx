import React, { useCallback } from "react";
import { styled } from "styled-components";

interface PaginationProps {
  pageTotal: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Pagination = ({
  pageTotal,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  const goBack = useCallback(() => {
    setCurrentPage(currentPage - 1);
  }, [currentPage, setCurrentPage]);

  const goForward = useCallback(() => {
    setCurrentPage(currentPage + 1);
  }, [currentPage, setCurrentPage]);

  return (
    <PaginationContainer>
      <MemoLimitButton
        name="first-page"
        data-testid="first-btn"
        onClick={() => setCurrentPage(1)}
        disabled={currentPage === 1}
      >
        First
      </MemoLimitButton>
      <MemoLimitButton
        name="previous page"
        data-testid="prev-btn"
        onClick={goBack}
        disabled={currentPage === 1}
      >
        Previous
      </MemoLimitButton>
      {pageTotal > 0 ? (
        <p>
          Page {currentPage} of {pageTotal}
        </p>
      ) : (
        <p>{pageTotal}</p>
      )}

      <MemoLimitButton
        name="next page"
        data-testid="next-btn"
        onClick={goForward}
        disabled={currentPage === pageTotal}
      >
        Next
      </MemoLimitButton>
      <MemoLimitButton
        name="last page"
        data-testid="last-btn"
        onClick={() => setCurrentPage(pageTotal)}
        disabled={currentPage === pageTotal}
      >
        Last
      </MemoLimitButton>
    </PaginationContainer>
  );
};

const PaginationContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const LimitButton = styled.button<{ disabled: boolean }>`
  box-sizing: content-box;
  display: inline-block;
  border-width: 0px;
  border-color: #34ace0;
  height: 30px;
  border-radius: 1px;
  margin: 0rem 1rem;
  background: ${(props) => (props.disabled ? "#dddddd" : "#34ace0")};
  color: white;
  margin-left: 4px;
  margin-right: 4px;
  font-weight: 100;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "auto")};

  :hover {
    background: #227093;
    cursor: pointer;
  }
`;

const MemoLimitButton = React.memo(LimitButton);

export default Pagination;
