import express from 'express';
import rootRoutes from './src/routes/rootRoutes.js';
import userRoutes from './src/routes/userRoutes.js';
import articleRoutes from './src/routes/articleRoutes.js';

export const app = express();

app.use('/', rootRoutes);
app.use('/', userRoutes);
app.use('/', articleRoutes);
