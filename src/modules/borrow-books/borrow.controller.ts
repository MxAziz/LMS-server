import { Request, Response } from "express";
import BOOK from "../books/book.model";
import BorrowBook from "./borrow.model";

export const borrowController = {
    borrowBook: async (req: Request, res: Response) => {
        try {
            const { book, quantity, dueDate } = req.body;

            await BOOK.reduceCopies(book, quantity);

            const newBorrowBook = await BorrowBook.create({ book, quantity, dueDate });

            res.status(201).json({
                success: true,
                message: "Book borrowed successfully",
                data: newBorrowBook
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                message: "failed to borrow book",
                error: (error as Error).message || "An error occurred"
        })
        }
    }
}