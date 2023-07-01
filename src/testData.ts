import { Book } from "./types";

export const sampleBook: Book = {
  id: 1,
  book_author: ["Robert Muchamore"],
  book_publication_city: "London",
  book_publication_country: "United Kingdom",
  book_publication_year: "2004",
  book_pages: 342,
  book_title: "The Recruit",
};

export const sampleShelf: Book[] = [
  {
    id: 1,
    book_author: ["Jane Austen"],
    book_title: "Pride and Prejudice",
    book_publication_city: "London",
    book_publication_country: "United Kingdom",
    book_publication_year: "1813",
    book_pages: 432,
  },
  {
    id: 2,
    book_author: ["F. Scott Fitzgerald"],
    book_title: "The Great Gatsby",
    book_publication_city: "New York",
    book_publication_country: "United States",
    book_publication_year: "1925",
    book_pages: 180,
  },
  {
    id: 3,
    book_author: ["Harper Lee"],
    book_title: "To Kill a Mockingbird",
    book_publication_city: "New York",
    book_publication_country: "United States",
    book_publication_year: "1960",
    book_pages: 281,
  },
  {
    id: 4,
    book_author: ["George Orwell"],
    book_title: "1984",
    book_publication_city: "London",
    book_publication_country: "United Kingdom",
    book_publication_year: "1949",
    book_pages: 328,
  },
  {
    id: 5,
    book_author: ["J.D. Salinger"],
    book_title: "The Catcher in the Rye",
    book_publication_city: "New York",
    book_publication_country: "United States",
    book_publication_year: "1951",
    book_pages: 277,
  },
];

export const testSearchTerm: string = "Ο Αλέξανδρος ο Μακεδών";
export const testAuthor: string = "Irving, Christopher";
