import express from 'express';
import rootRoutes from './src/routes/rootRoutes.js';
import userRoutes from './src/routes/userRoutes.js';
import articleRoutes from './src/routes/articleRoutes.js';
import morgan from 'morgan';

export const app = express();

app.use(morgan('dev'));
app.use('/', rootRoutes);
app.use('/', userRoutes);
app.use('/', articleRoutes);
