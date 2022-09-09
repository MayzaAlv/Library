import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
  publisher: {
    type: String,
    require: true,
  },
  releaseDate: {
    type: Date,
    require: true,
  },
});

export const Book = mongoose.model("Book", BookSchema);
