import { type Article } from '../utils/types';

type Props = {
  article: Article;
};

const ArticlePreview = ({ article }: Props) => (
  <div className="mb-4 rounded-md bg-white p-4 shadow-md hover:bg-blue-100">
    <a href={`/articles/${article.slug}`}>
      <h2 className="text-2xl font-semibold text-gray-800">{article.title}</h2>
      <p className="text-gray-600">{article.description}</p>
    </a>
  </div>
);

export default ArticlePreview;
