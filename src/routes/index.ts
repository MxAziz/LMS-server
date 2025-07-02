import express from 'express';
import { BooksRoute } from '../modules/books/book.routes';
import { BorrowRoute } from '../modules/borrow-books/borrow.routes';
// import bookingRoutes from "./booking.route";

const routes = express.Router();

// routes.use("/bookings", bookingRoutes);
routes.use('/books', BooksRoute)
routes.use('/borrow', BorrowRoute);

export default routes;
