import express from 'express';
import userRoutes from './src/routes/userRoutes.js';
import articleRoutes from './src/routes/articleRoutes.js';

const app = express();
app.use('/', userRoutes);
app.use('/', articleRoutes);
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
