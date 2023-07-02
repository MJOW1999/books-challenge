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

  console.log({ currentPage, pageTotal });

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
        <PageNumber>
          Page {currentPage} of {pageTotal}
        </PageNumber>
      ) : (
        <p>{pageTotal}</p>
      )}

      <MemoLimitButton
        name="next page"
        data-testid="next-btn"
        onClick={goForward}
        disabled={currentPage === pageTotal || pageTotal === 0}
      >
        Next
      </MemoLimitButton>
      <MemoLimitButton
        name="last page"
        data-testid="last-btn"
        onClick={() => setCurrentPage(pageTotal)}
        disabled={currentPage === pageTotal || pageTotal === 0}
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

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const LimitButton = styled.button<{ disabled: boolean }>`
  box-sizing: content-box;
  display: inline-block;
  border-width: 0px;
  border-color: #34ace0;
  height: 30px;
  border-radius: 1px;
  margin: 0rem 1rem;
  background: ${(props) => (props.disabled ? "#dddddd" : "#ffb8b8")};
  margin-left: 4px;
  margin-right: 4px;
  font-weight: 100;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "auto")};

  &:hover {
    background: ${(props) => !props.disabled && "#ffcccc"};
    cursor: ${(props) => !props.disabled && "pointer"};
  }
`;

const MemoLimitButton = React.memo(LimitButton);

const PageNumber = styled.p`
  font-weight: 500;
`;

export default Pagination;
