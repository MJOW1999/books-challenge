import { Book } from "../types";
import SingleBook from "./SingleBook";
import { styled } from "styled-components";

interface BookListProps {
  bookList: Book[];
}

const BookShelf = ({ bookList }: BookListProps) => {
  return (
    <main>
      {bookList ? (
        <BooksContainer>
          {bookList.map((book: Book) => (
            <SingleBook key={book.id} book={book} />
          ))}
        </BooksContainer>
      ) : (
        <article>Loading...</article>
      )}
    </main>
  );
};

const BooksContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 4em;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export default BookShelf;
