import { Request, Response } from "express";
import BOOK from "./book.model";

const createBook = async (req: Request, res: Response) => {
    try {
        const book = await BOOK.create(req.body);
        res.status(201).json({
            success: true,
            message: "book created successfully",
            data: book,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create book",
            error
        });
    }
};


export const BOOKcontroller = {
    createBook,
}