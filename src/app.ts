import express from 'express';
import cors from 'cors';
import {
  errorHandler,
  notFoundHandler,
} from './middlewares/globalErrorHandler';
import routes from './routes';

const app = express();

const middleware = [
  cors(),
  express.json(),
  express.urlencoded({ extended: true }),
];
app.use(middleware);

// Routes
app.use('/api', routes);

// Initial Route
app.get('/', (req, res) => {
  res.send({ success: true, message: `Sever is Live here...` });
});

// 404 Not Found handler (must be after all routes)
app.use(notFoundHandler);

// Global Error handler (must be last)
app.use(errorHandler);

export default app;
