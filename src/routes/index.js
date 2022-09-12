import { Router } from "express";
import { BookController } from "../controllers/BookController.js";
import { AuthorController } from "../controllers/AuthorController.js";

export const routes = Router();

routes.get("/books", BookController.getBooks);
routes.get("/book/:bookId", BookController.getBook);
routes.post("/book", BookController.createBook);
routes.put("/book/:bookId", BookController.putBook);
routes.delete("/book/:bookId", BookController.deleteBook);

routes.get("/author", AuthorController.getAuthors);
routes.get("/author/:authorId", AuthorController.getAuthor);
routes.post("/author", AuthorController.createAuthor);
routes.put("/author/:authorId", AuthorController.putAuthor);
routes.delete("/author/:authorId", AuthorController.deleteAuthor);
