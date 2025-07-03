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
    },

    getBorrowBooksSummary: async (req: Request, res: Response) => {
        try {
            const summary = await BorrowBook.aggregate([
                {
                    $group: {
                        _id: "$book",
                        totalQuantity: { $sum: "$quantity" },
                    }
                },
                {
                    $lookup: {
                        from: "books",
                        localField: "_id",
                        foreignField: "_id",
                        as: "bookDetails"
                    }
                },
                { $unwind: "$bookDetails" },
                {
                    $project: {
                        _id: 0,
                        book: {
                            title: "$bookDetails.title",
                            isbn: "$bookDetails.isbn",
                        },
                        totalQuantity: 1,
                    }
                }
            ]);
            res.status(200).json({
                success: true,
                message: "Borrow books summary retrieved successfully",
                data: summary
            })

        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to fetch borrow  summary",
                error: (error as Error).message || "An error occurred"
            })
        }
    }

}