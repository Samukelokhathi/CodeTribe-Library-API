import { Request, Response, NextFunction } from "express";
import { authors, Author } from "../model/authors.js";

export function getAllAuthors(req: Request, res: Response, next: NextFunction) {
  res.status(200).json(authors);
}

export function getAuthorById(req: Request, res: Response, next: NextFunction) {
  const id = Number(req.params.id);
  const author = authors.find((auth) => auth.id == id);

  if (author) {
    res.status(200).json(author);
  } else {
    res.status(404).json({ error: "Author not found" });
  }
}


export function createAuthor(req: Request, res: Response, next: NextFunction){
    const {name} = req.body
    const newAuthor: Author ={
        id:authors.length + 1,
        name
    }
    authors.push(newAuthor)
    res.status(201).json(newAuthor)
}