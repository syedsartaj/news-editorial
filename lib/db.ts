import { MongoClient, ObjectId } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MongoDB URI to .env.local');
}

const uri = process.env.MONGODB_URI;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable to preserve the value
  // across module reloads caused by HMR (Hot Module Replacement).
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;

// Article Interface
export interface Article {
  _id?: ObjectId;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Politics' | 'Business' | 'Technology' | 'Sports' | 'Entertainment' | 'Health' | 'Science' | 'World';
  image: string;
  author: string;
  publishedAt: Date;
  featured: boolean;
  breaking: boolean;
  views: number;
  createdAt: Date;
  updatedAt: Date;
}

// Database helper functions
export async function getDatabase() {
  const client = await clientPromise;
  return client.db('news_editorial');
}

// Get all articles with optional filters
export async function getArticles(filter: any = {}) {
  const db = await getDatabase();
  return db.collection<Article>('articles')
    .find(filter)
    .sort({ publishedAt: -1 })
    .toArray();
}

// Get all articles (for admin)
export async function getAllArticles() {
  const db = await getDatabase();
  return db.collection<Article>('articles')
    .find({})
    .sort({ createdAt: -1 })
    .toArray();
}

// Get articles by category
export async function getArticlesByCategory(category: string) {
  const db = await getDatabase();
  return db.collection<Article>('articles')
    .find({ category })
    .sort({ publishedAt: -1 })
    .toArray();
}

// Get single article by ID
export async function getArticleById(id: string) {
  const db = await getDatabase();
  try {
    return await db.collection<Article>('articles')
      .findOne({ _id: new ObjectId(id) });
  } catch (error) {
    return null;
  }
}

// Get article by slug
export async function getArticleBySlug(slug: string) {
  const db = await getDatabase();
  return db.collection<Article>('articles').findOne({ slug });
}

// Create new article
export async function createArticle(article: Omit<Article, '_id' | 'createdAt' | 'updatedAt' | 'views'>) {
  const db = await getDatabase();
  const now = new Date();
  return db.collection<Article>('articles').insertOne({
    ...article,
    views: 0,
    createdAt: now,
    updatedAt: now,
  } as Article);
}

// Update article
export async function updateArticle(id: string, updates: Partial<Article>) {
  const db = await getDatabase();
  try {
    const { _id, createdAt, ...updateFields } = updates as any;
    return await db.collection<Article>('articles').updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...updateFields,
          updatedAt: new Date(),
        }
      }
    );
  } catch (error) {
    return null;
  }
}

// Delete article
export async function deleteArticle(id: string) {
  const db = await getDatabase();
  try {
    return await db.collection<Article>('articles')
      .deleteOne({ _id: new ObjectId(id) });
  } catch (error) {
    return null;
  }
}

// Increment article views
export async function incrementArticleViews(id: string) {
  const db = await getDatabase();
  try {
    return await db.collection<Article>('articles').updateOne(
      { _id: new ObjectId(id) },
      { $inc: { views: 1 } }
    );
  } catch (error) {
    return null;
  }
}

// Get featured articles
export async function getFeaturedArticles(limit: number = 5) {
  const db = await getDatabase();
  return db.collection<Article>('articles')
    .find({ featured: true })
    .sort({ publishedAt: -1 })
    .limit(limit)
    .toArray();
}

// Get breaking news articles
export async function getBreakingArticles() {
  const db = await getDatabase();
  return db.collection<Article>('articles')
    .find({ breaking: true })
    .sort({ publishedAt: -1 })
    .toArray();
}

// Breaking news functions
export async function getBreakingNews() {
  const db = await getDatabase();
  return db.collection('breaking_news').find({ active: true }).sort({ priority: -1 }).toArray();
}

export async function addBreakingNews(news: string, priority: number = 1) {
  const db = await getDatabase();
  return db.collection('breaking_news').insertOne({
    news,
    priority,
    active: true,
    createdAt: new Date(),
  });
}
