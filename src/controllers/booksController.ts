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
