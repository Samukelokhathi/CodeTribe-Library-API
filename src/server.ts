// import express, { Express } from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import express from "express";

const app = express();
const PORT = process.env.PORT || 4000;

//examples of builtin middleware there are essential for passing incoming json from the body of request
app.use(express.json());
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
