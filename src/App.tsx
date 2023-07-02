import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";
import BookShelf from "./components/BookShelf";
import { Book, Filters } from "./types";
import styled from "styled-components";

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [count, setCount] = useState<number>(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [itemsPerPage, setItemsPerPage] = useState<number>(20);

  // Pagination
  const [pageTotal, setPageTotal] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Search
  const [filters, setFilters] = useState<Filters[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  async function getBooks(
    page: number,
    itemsPerPage: number,
    filters: Filters[]
  ) {
    const url = "http://nyx.vima.ekt.gr:3000/api/books";
    try {
      const response = await fetch(url, {
        method: "post",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          page: page,
          itemsPerPage: itemsPerPage,
          filters: filters,
        }),
      });
      const data = await response.json();
      setBooks(data.books);
      setCount(data.count);
      const pageTotalCalc = Math.ceil(data.count / itemsPerPage);
      setPageTotal(pageTotalCalc);
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getBooks(currentPage, itemsPerPage, filters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, itemsPerPage, filters]);

  return (
    <div className="App">
      <Content>
        <section>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <SearchButton
            onClick={() => {
              setFilters([{ type: "all", values: [searchTerm] }]);
              setCurrentPage(1);
              getBooks(currentPage, itemsPerPage, filters);
            }}
          >
            Search
          </SearchButton>
        </section>
        {itemsPerPage <= count && (
          <BooksDisplayed>
            Showing {itemsPerPage} of {count} books
          </BooksDisplayed>
        )}
        {count > 0 && itemsPerPage > count && (
          <BooksDisplayed>
            Showing {count} of {count} books
          </BooksDisplayed>
        )}
        {!count && (
          <NoBooks>No books available. Try a different search term</NoBooks>
        )}
        <BookShelf bookList={books} />
        <Pagination
          pageTotal={pageTotal}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Content>
    </div>
  );
}

const Content = styled.main`
  max-width: 860px;
  margin-top: 4rem;
  width: 100%;

  @media (min-width: 1024px) {
    margin: 4rem auto 0 auto;
  }
`;

const SearchButton = styled.button`
  font-size: 18px;
`;

const BooksDisplayed = styled.p`
  font-style: italic;
  font-size: 18px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const NoBooks = styled.p`
  margin-top: 4rem;
`;

export default App;
