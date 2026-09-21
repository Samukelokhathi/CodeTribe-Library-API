import { Router } from "express";
import {
  getAllAuthors,
  getAuthorById,
  createAuthor,
} from "../controllers/authorsController";

const authorRouter = Router();

authorRouter.get("/", getAllAuthors);
authorRouter.get("/:id", getAuthorById);
authorRouter.get("/", createAuthor);

export default authorRouter;
