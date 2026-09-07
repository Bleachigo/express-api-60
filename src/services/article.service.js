import { AppError } from '../utils/AppError.js';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const articleService = {
  async getAllArticles() {
    const response = await fetch(`${BASE_URL}/posts`);

    if (!response.ok) {
      throw new AppError('Failed to fetch articles', 502);
    }

    return response.json();
  },

  async findArticleById(articleId) {
    const response = await fetch(`${BASE_URL}/posts/${articleId}`);

    if (!response.ok) {
      throw new AppError('Failed to fetch article by id', 502);
    }

    return response.json();
  },
};
