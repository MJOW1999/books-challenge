import { Book } from "../types";

const SingleBook = ({ book }: { book: Book }) => {
  return (
    <section>
      <h1>
        {book.book_title} by {book.book_author}
      </h1>
      <h2>
        Published in {book.book_publication_city},{" "}
        {book.book_publication_country} ({book.book_publication_year})
      </h2>
      <h3>{book.book_pages} pages</h3>
    </section>
  );
};

export default SingleBook;
