import express from 'express';
import { BooksRoute } from '../modules/books/book.routes';
// import bookingRoutes from "./booking.route";

const routes = express.Router();

// routes.use("/bookings", bookingRoutes);
routes.use('/books', BooksRoute)

export default routes;
