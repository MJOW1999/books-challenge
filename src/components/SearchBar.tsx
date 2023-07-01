const SearchBar = () => {
  return (
    <>
      <input
        type="text"
        id="searchInput"
        placeholder="Enter your search term"
      />
      <button onClick={() => console.log("Hello")}>Search</button>
    </>
  );
};

export default SearchBar;
