import { Book } from "../types";
import { styled } from "styled-components";

const SingleBook = ({ book }: { book: Book }) => {
  return (
    <BookWrapper>
      <Content>
        <BookHeader>
          {book.book_title} by {book.book_author}
        </BookHeader>
        <PublishInfo>
          Published in {book.book_publication_city},{" "}
          {book.book_publication_country} ({book.book_publication_year})
        </PublishInfo>
        <BookPages>{book.book_pages} pages</BookPages>
      </Content>
    </BookWrapper>
  );
};

const BookWrapper = styled.section`
  width: 280px;
  height: 420px;
  background: #ff7a7a;
  border-radius: 20px 16px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Content = styled.article`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;

const BookHeader = styled.h1`
  font-size: 20px;
`;
const PublishInfo = styled.h2`
  font-size: 18px;
`;
const BookPages = styled.h3`
  font-size: 16px;
`;

export default SingleBook;
