import express from 'express';
import { articleController } from '../controllers/articleController.js';
import { checkArticleAccess } from '../middleware/article-access.middleware.js';

const router = express.Router();

router.use(checkArticleAccess);

router.get('/', articleController.getArticles);
router.post('/', articleController.postArticles);
router.get('/:articleId', articleController.getArticleById);
router.put('/:articleId', articleController.putArticleById);
router.delete('/:articleId', articleController.deleteArticleById);

export default router;
