import { Router } from "express";
import { BOOKScontroller } from "./books.controller";

const router = Router();

router.post("/", BOOKScontroller.createBook);
router.get("/", BOOKScontroller.getAllBooks);


export const BooksRoute = router;