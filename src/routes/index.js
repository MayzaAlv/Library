import { Router } from "express";
import { BookController } from "../controllers/BookController.js";

export const routes = Router();

routes.get("/books", BookController.getBooks);
routes.get("/book/:bookId", BookController.getBook);
routes.post("/book", BookController.createBook);
routes.put("/book/:bookId", BookController.putBook);
routes.delete("/book/:bookId", BookController.deleteBook);
