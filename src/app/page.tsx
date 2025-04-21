import ArticlePreview from '~/app/components/ArticlePreview';
import Header from '~/app/components/Header';
import { type IndexRouteProps } from '~/app/utils/types';
import { db } from '~/server/db';
import { articles } from '~/server/db/schema';
import { seedDatabase } from '~/server/db/seed';

async function getArticles() {
  return await db.select().from(articles);
}

export default async function Home() {
  await seedDatabase();
  const articlesData = await getArticles();
  const props: IndexRouteProps = { articles: articlesData };
  return <HomeComponent {...props} />;
}

const HomeComponent = ({ articles }: IndexRouteProps) => (
  <div>
    <Header />
    <div className="mx-auto max-w-3xl">
      {articles && articles.length > 0 ? (
        <div>
          {articles.map((article) => (
            <ArticlePreview key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <p>Пока нет ни одной статьи.</p>
      )}
    </div>
  </div>
);
