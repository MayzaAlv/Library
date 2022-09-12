import { Author } from "../models/Author.js";
import { Book } from "../models/Book.js";

export const AuthorController = {
  async getAuthors(req, res) {
    try {
      const authors = await Author.find();
      return res.json(authors);
    } catch (err) {
      return res.status(400).json(err);
    }
  },

  async getAuthor(req, res) {
    const { authorId } = req.params;

    try {
      const author = await Author.findById(authorId);
      return res.json(author);
    } catch (err) {
      return res.status(400).json(err);
    }
  },

  async createAuthor(req, res) {
    const body = req.body;

    try {
      const author = await Author.create(body);
      return res.status(201).json(author);
    } catch (err) {
      return res.status(400).json(err);
    }
  },

  async putAuthor(req, res) {
    const body = req.body;
    const { authorId } = req.params;

    try {
      const author = await Author.findByIdAndUpdate(authorId, body, {
        new: true,
      });
      return res.json(author);
    } catch (err) {
      return res.status(400).json(err);
    }
  },

  async deleteAuthor(req, res) {
    const { authorId } = req.params;

    try {
      const author = await Author.findByIdAndDelete(authorId);

      author.books.forEach(async (bookId) => {
        let book = await Book.findById(bookId);
        book.author = null;
        await book.save();
      });
      return res.json(author);
    } catch (err) {
      return res.status(400).json(err);
    }
  },
};
