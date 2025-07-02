import { Router } from "express";
import { BOOKScontroller } from "./books.controller";

const router = Router();

router.post("/", BOOKScontroller.createBook);
router.get("/", BOOKScontroller.getAllBooks);
router.get("/:bookId", BOOKScontroller.getBookByID);


export const BooksRoute = router;