import { Request, Response, NextFunction } from "express";
import { books, book } from "../model/books.js";

export function getAllBooks(req: Request, res: Response, next: NextFunction) {
  res.json(books);
}
export function getBookById(req: Request, res: Response, next: NextFunction) {
  const id = Number(req.params.id);

  const book = books.find((b) => b.id === id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ error: "Book not found" });
  }
}


export function createBook(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { title, authorId, publishedDate } = req.body;
  const newBook: book = {
    id: books.length + 1,
    title,
    authorId,
    publishedDate,
  };
  books.push(newBook);
  res.status(201).json(newBook);
}
