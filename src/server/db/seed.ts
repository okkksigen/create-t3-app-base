import { db } from './index';
import { articles } from './schema';
import articlesData from '../data/articles.json';

export async function seedDatabase() {
  try {
    const articlesExist = (await db.select().from(articles)).length > 0;
    if (articlesExist) {
      console.log('Articles already exist in database, skipping seeding');
      return;
    }

    await db.insert(articles).values(articlesData);
    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}
