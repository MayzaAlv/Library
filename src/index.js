import express from "express";
import mongoose from "mongoose";
import { routes } from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extends: false }));
app.use(routes);

mongoose
  .connect(
    "mongodb+srv://library:HN5pBrEuuA4GzIp4@cluster0.xmhax4h.mongodb.net/libraryDB?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(3000, () => console.log(`Listening on 3000`));
  })
  .catch((err) => console.log(err));
