import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";
import { sampleShelf } from "./testData";
import BookShelf from "./components/BookShelf";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <BookShelf bookList={sampleShelf} />
      <Pagination />
    </div>
  );
}

export default App;
