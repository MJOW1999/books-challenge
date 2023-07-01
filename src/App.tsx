import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";
import { sampleShelf } from "./testData";
import BookShelf from "./components/BookShelf";
import { Book } from "./types";

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [count, setCount] = useState<number>(0);
  //const [filters, setFilters] = useState();

  // Pagination stuff
  const [pageTotal, setPageTotal] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(1);

  async function getBooks() {
    const url = "http://nyx.vima.ekt.gr:3000/api/books";
    try {
      const response = await fetch(url, {
        method: "post",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ page: 1, itemsPerPage: 20, filters: [] }),
      });
      const data = await response.json();
      setBooks(data.books);
      setCount(data.count);
      const pageTotalCalc = Math.ceil(data.count / 20);
      setPageTotal(pageTotalCalc);
      console.log("called");
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getBooks();
  }, [currentPage]);

  return (
    <div className="App">
      <SearchBar />
      <p>Showing 20 of {count} books</p>
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
