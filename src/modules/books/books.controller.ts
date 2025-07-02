/* eslint-disable @typescript-eslint/no-explicit-any */
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

// get all books with filter, sort and limit
const getAllBooks = async (req: Request, res: Response) => {
    try {
      const { filter, sortBy = "createdAt", sort = "desc", limit = "10" } = req.query;

      // Filter object
      const filterObj: any = {};
      if (filter) {
        filterObj.genre = filter;
      }

      // Sort object
      const sortOrder = sort === "asc" ? 1 : -1;
      const sortObj: any = {};
      sortObj[sortBy as string] = sortOrder;

      // Fetch books
      const books = await BOOK.find(filterObj)
        .sort(sortObj)
        .limit(Number(limit));

      res.status(200).json({
        success: true,
        message: "Books retrieved successfully",
        data: books,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to retrieve books",
        error: (error as Error).message,
      });
    }
}

// get book by id
const getBookByID = async (req: Request, res: Response) => {
  try {
    const book = await BOOK.findById(req.params.bookId);
    res.status(200).json({
      success: true,
      message: "Book retrieved successfully",
      data: book,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to retrieve book",
      error,
    });
  }
};



export const BOOKScontroller = {
    createBook,
    getAllBooks,
    getBookByID,
}