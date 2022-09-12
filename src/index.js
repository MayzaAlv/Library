import express from "express";
import mongoose from "mongoose";
import { routes } from "./routes/index.js";
import * as dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extends: false }));
app.use(routes);

mongoose
  .connect(process.env.MONGODB_PRIVATE_KEY)
  .then(() => {
    app.listen(3000, () => console.log(`Listening on 3000`));
  })
  .catch((err) => console.log(err));
