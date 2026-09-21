import { Router } from "express";
import { getAllAuthors, getAuthorById } from "../controllers/authorsController";

const authorRouter = Router();

authorRouter.get("/", getAllAuthors);
authorRouter.get("/:id", getAuthorById);

export default authorRouter;
