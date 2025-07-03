import { Model, model, Schema } from "mongoose";
import { IBook } from "./book.interface";

const BookSchema = new Schema<IBook>(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        author: {
            type: String,
            required: true,
            trim: true
        },
        genre: {
            type: String,
            required: true,
            enum: [ "FICTION", "NON_FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY", ]
        },
        isbn: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        description: { type: String, default: '' },
        copies: {
            type: Number,
            required: true,
            min: [0, "copies must be a positive number"],
            validate: {
                validator: Number.isInteger,
                message: "copies must be a positive number"
            }
        },
        available: {
            type: Boolean,
            default: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

BookSchema.statics.reduceCopies = async function (bookId: string, quantity: number) {
  const book = await this.findById(bookId);
  if (!book) throw new Error("Book not found");

  if (book.copies < quantity) {
    throw new Error("Not enough copies available");
  }

  book.copies -= quantity;
  if (book.copies === 0) {
    book.available = false;
  }

  await book.save();
  return book;
};

export interface IBookModel extends Model<IBook> {
    reduceCopies(bookId: string, quantity: number): Promise<IBook>;
}

const BOOK = model<IBook, IBookModel>("Book", BookSchema);
export default BOOK;