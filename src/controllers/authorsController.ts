import { Request, Response, NextFunction } from "express";
import { authors, Author } from "../model/authors.js";
import { books, book } from "../model/books.js";

export function getAllAuthors(req: Request, res: Response) {
  res.status(200).json(authors);
}

export function getAuthorById(req: Request, res: Response) {
  const id = Number(req.params.id);
  const author = authors.find((auth) => auth.id == id);

  if (author) {
    res.status(200).json(author);
  } else {
    res.status(404).json({ error: "Author not found" });
  }
}

export function getBooksByAuthor(req: Request, res: Response) {
  const authorId = parseInt(String(req.params.id));

  const author = authors.find((auth) => auth.id == authorId);

  if (author) {
    res.status(200).json(author);
  } else {
    res.status(404).json({ error: "Author not found" });
  }

  const authorBooks = books.filter(
    (book: { authorId: number }) => book.authorId === authorId,
  );

  res.status(200).json({
    author,
    books: authorBooks,
  });
}

export function createAuthor(req: Request, res: Response) {
  const { name } = req.body;
  const newAuthor: Author = {
    id: authors.length + 1,
    name,
  };
  authors.push(newAuthor);
  res.status(201).json(newAuthor);
}

export function updateAuthor(req: Request, res: Response) {
  const id = Number(req.params.id);
  const author = authors.find((auth) => auth.id === id);

  if (author) {
    const { name } = req.body;
    author.name = name ?? author.name;
    res.json(author);
  } else {
    res.status(404).json({ error: "Author not found" });
  }
}

export function deleteAuthor(req: Request, res: Response) {
  const id = Number(req.params.id);
  const index = authors.findIndex((a) => a.id === id);
  if (index !== -1) {
    authors.splice(index, 1);
    res.status(200).json({ message: "author deleted successfully" });
  } else {
    res.status(404).json({ error: "Author not found" });
  }
}
