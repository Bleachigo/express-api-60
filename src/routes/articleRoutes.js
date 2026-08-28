import express from 'express';
import { articleController } from '../controllers/articleController.js';

const router = express.Router();

router.get('/articles', articleController.getArticles);
router.post('/articles', articleController.postArticles);
router.get('/articles/:articleId', articleController.getArticleById);
router.put('/articles/:articleId', articleController.putArticleById);
router.delete('/articles/:articleId', articleController.deleteArticleById);

export default router;
