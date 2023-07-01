import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";
import BookShelf from "./components/BookShelf";
import { Book, Filters } from "./types";

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
      console.log(data);
      console.log(currentPage);
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
      <div>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <button
          onClick={() => {
            setFilters([{ type: "all", values: [searchTerm] }]);
            getBooks(currentPage, itemsPerPage, filters);
          }}
        >
          Search
        </button>
      </div>
      {itemsPerPage <= count && (
        <p>
          Showing {itemsPerPage} of {count} books
        </p>
      )}
      {count > 0 && itemsPerPage > count && (
        <p>
          Showing {count} of {count} books
        </p>
      )}
      {!count && <p>No books available. Try a different search term</p>}
      <BookShelf bookList={books} />
      <Pagination
        pageTotal={pageTotal}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
