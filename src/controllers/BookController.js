import { Author } from "../models/Author.js";
import { Book } from "../models/Book.js";

export const BookController = {
  async getBooks(req, res) {
    try {
      const books = await Book.find();
      return res.json(books);
    } catch (err) {
      return res.status(400).json(err);
    }
  },

  async getBook(req, res) {
    const { bookId } = req.params;

    try {
      const book = await Book.findById(bookId);
      return res.json(book);
    } catch (err) {
      return res.status(400).json(err);
    }
  },

  async createBook(req, res) {
    const body = req.body;

    try {
      const book = await Book.create(body);
      const author = await Author.findById(body.author);

      author.books.push(book);
      await author.save();

      return res.status(201).json(book);
    } catch (err) {
      return res.status(400).json(err);
    }
  },

  async putBook(req, res) {
    const body = req.body;
    const { bookId } = req.params;

    try {
      const book = await Book.findByIdAndUpdate(bookId, body, { new: true });
      return res.json(book);
    } catch (err) {
      return res.status(400).json(err);
    }
  },

  async deleteBook(req, res) {
    const { bookId } = req.params;

    try {
      const book = await Book.findByIdAndDelete(bookId);
      const author = await Author.findById(book.author);

      author.books.splice(author.books.indexOf(bookId), 1);
      await author.save();

      return res.json(book);
    } catch (err) {
      return req.status(400).json(err);
    }
  },
};
