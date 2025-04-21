import { db } from '~/server/db';
import { articles } from '~/server/db/schema';
import { eq } from 'drizzle-orm';
import ArticleItem from '~/app/components/Article';
import { Article, ArticleRouteProps } from '~/app/utils/types';

interface Props {
  params: {
    slug: string;
  };
}

async function getArticle(slug: string): Promise<Article | undefined> {
  const result = await db.select().from(articles).where(eq(articles.slug, slug)).limit(1);
  return result[0];
}

const ArticleComponent = ({ article }: ArticleRouteProps) => <ArticleItem article={article} />;

async function ArticlePage({ params }: Props) {
  const articleData = await getArticle(params.slug);
  const props: ArticleRouteProps = { article: articleData! };
  return <ArticleComponent {...props} />;
}

export default ArticlePage;
