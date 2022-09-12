import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  birthdate: {
    type: Date,
    require: false,
  },
  nationality: {
    type: String,
    require: false,
  },
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});

export const Author = mongoose.model("Author", AuthorSchema);
