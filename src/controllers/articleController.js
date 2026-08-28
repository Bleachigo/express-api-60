export const articleController = {
  getRoot(req, res) {
    res.send('Get root route');
  },
  getArticle(req, res) {
    res.send('Get article route');
  },
  postArticle(req, res) {
    res.send('Post article route');
  },
  getArticleById(req, res) {
    res.send(`Get article by Id route: ${req.params.articleId}`);
  },
  putArticleById(req, res) {
    res.send(`Put article by Id route: ${req.params.articleId}`);
  },
  deleteArticleById(req, res) {
    res.send(`Delete article by Id route: ${req.params.articleId}`);
  },
};
