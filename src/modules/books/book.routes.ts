import { Router } from "express";
import { BOOKcontroller } from "./books.controller";

const router = Router();

router.post("/", BOOKcontroller.createBook)


export const BooksRoute = router;