import { Request, Response, NextFunction } from "express";
import { authors, Author } from "../model/authors.js";
import { error } from "node:console";

export function getAllAuthors(req: Request, res: Response, next: NextFunction) {
  res.status(200).json(authors);
}

export function getAuthorById(req: Request, res: Response, next: NextFunction) {
  const id = Number(req.params.id);
  const author = authors.find((a) => a.id == id);

  if (author) {
    res.json(author);
  } else {
    res.status(404).json({ error: "Author not found" });
  }
}
