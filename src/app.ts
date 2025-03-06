import express, { Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import allRoutes from './routes/allRoutes'
import { errorHandler } from './config/errorHandler';
import { NotFoundError } from './config/appError';

const app = express();

const options: cors.CorsOptions = {
  origin: '*'
};
app.use(cors(options));

// Use morgan to log requests
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev')); // Log detailed request info in development
} else {
  app.use(morgan('common')); // Less verbose logging in production
}

// parse application/json
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Register the routes
// Routes
app.use(allRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Welcome.');
});

// Middleware for handling unhandled routes
app.all('*', (req, res, next) => {
  // Throw a NotFoundError for unrecognized routes
  next(new NotFoundError(`Cannot find ${req.originalUrl} on this server`));
});

// Error Handler
app.use(errorHandler);

export default app;
