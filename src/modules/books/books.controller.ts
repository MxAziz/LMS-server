import { Request, Response } from "express";
import BOOK from "./book.model";

const createBook = (req: Request, res: Response) => {
    const book = BOOK.create(req.body);

    res.status(201).json({
        success: true,
        message: "book created successfully",
        data: book,
    })
};


export const BOOKcontroller = {
    createBook,
}