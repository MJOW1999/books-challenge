import { styled } from "styled-components";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {
  return (
    <>
      <Input
        type="text"
        id="searchInput"
        placeholder="Enter your search term"
        value={searchTerm}
        onChange={(e: { target: { value: string } }) =>
          setSearchTerm(e.target.value)
        }
      />
    </>
  );
};

const Input = styled.input`
  font-size: 18px;
`;

export default SearchBar;
