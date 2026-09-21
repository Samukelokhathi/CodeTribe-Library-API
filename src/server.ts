import bodyParser from "body-parser";
import "dotenv/config";
import express from "express";
import router from "./app";
import { errorHandler, notFound } from "./middleware/errorHandler";

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use("/", router);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
