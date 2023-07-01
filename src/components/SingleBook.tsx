import { Book } from "../types";
import { styled } from "styled-components";

const SingleBook = ({ book }: { book: Book }) => {
  return (
    <BookWrapper>
      <h1>
        {book.book_title} by {book.book_author}
      </h1>
      <h2>
        Published in {book.book_publication_city},{" "}
        {book.book_publication_country} ({book.book_publication_year})
      </h2>
      <h3>{book.book_pages} pages</h3>
    </BookWrapper>
  );
};

const BookWrapper = styled.section`
  width: 280px;
  height: 420px;
  background: #ff4d4d;
  border-radius: 20px 16px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export default SingleBook;
