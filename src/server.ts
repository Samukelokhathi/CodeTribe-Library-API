import bodyParser from "body-parser";
import "dotenv/config";
import express from "express";
import router from "./app.js";

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use("/", router);

//examples of builtin middleware there are essential for passing incoming json from the body of request
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
