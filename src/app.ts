import { Router } from "express";
import authorRouter from "./routes/authorRoute";
import bookRouter from "./routes/bookRoute";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to sumkeloew's library API backend project" });
});

router.use("/author", authorRouter);
router.use("/book", bookRouter);
export default router;
