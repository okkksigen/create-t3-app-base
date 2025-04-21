import { type ArticleRouteProps } from '../utils/types';
import Header from './Header';

const ArticleItem = ({ article }: ArticleRouteProps) => (
  <div>
    <Header />
    <div className="mx-auto max-w-4xl pb-4">
      <h1 className="mb-4 text-center text-4xl text-gray-800">{article.title}</h1>
      <div className="prose text-gray-700" dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  </div>
);

export default ArticleItem;
