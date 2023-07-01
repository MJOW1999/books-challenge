import { Book } from "../types";
import SingleBook from "./SingleBook";

interface BookListProps {
  bookList: Book[];
}

const BookShelf = ({ bookList }: BookListProps) => {
  return (
    <main>
      {bookList ? (
        <section>
          {bookList.map((book: Book) => (
            <SingleBook key={book.id} book={book} />
          ))}
        </section>
      ) : (
        <article>Loading...</article>
      )}
    </main>
  );
};

export default BookShelf;
