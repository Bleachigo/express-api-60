import { articleController } from '../controllers/articleController';

const router = express.Router();

router.get('/', articleController.getRoot);
router.get('/articles', articleController.getArticles);
router.post('/articles', articleController.postArticles);
router.get('/articles/:articleId', articleController.getArticleById);
router.post('/articles/:articleId', articleController.putArticleById);
router.delete('/articles/:articleId', articleController.deleteArticleById);
