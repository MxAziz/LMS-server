import { model, Schema } from "mongoose";
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

const BOOK = model<IBook>("Book", BookSchema);
export default BOOK;