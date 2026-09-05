import express from 'express';
import rootRoutes from './src/routes/rootRoutes.js';
import userRoutes from './src/routes/userRoutes.js';
import articleRoutes from './src/routes/articleRoutes.js';
import { logRequest } from './src/middleware/logger.middleware.js';
import { notFound } from './src/middleware/not-found.middleware.js';
import { errorHandler } from './src/middleware/error.middleware.js';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logRequest);
app.use('/', rootRoutes);
app.use('/users', userRoutes);
app.use('/articles', articleRoutes);
app.use(notFound);
app.use(errorHandler);
