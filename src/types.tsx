export type Book = {
  id: number;
  book_author: string[];
  book_title: string;
  book_publication_city?: string;
  book_publication_country?: string;
  book_publication_year?: string;
  book_pages: number;
};

export type Filters = {
  type?: string;
  values?: string[];
};
