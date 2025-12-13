import { MongoClient } from 'mongodb';

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

// Database helper functions
export async function getDatabase() {
  const client = await clientPromise;
  return client.db('news_editorial');
}

export async function getArticles() {
  const db = await getDatabase();
  return db.collection('articles').find({}).sort({ publishedAt: -1 }).toArray();
}

export async function getArticlesByCategory(category: string) {
  const db = await getDatabase();
  return db.collection('articles').find({ category }).sort({ publishedAt: -1 }).toArray();
}

export async function getArticleById(id: string) {
  const db = await getDatabase();
  return db.collection('articles').findOne({ id });
}

export async function createArticle(article: any) {
  const db = await getDatabase();
  return db.collection('articles').insertOne({
    ...article,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}

export async function updateArticle(id: string, updates: any) {
  const db = await getDatabase();
  return db.collection('articles').updateOne(
    { id },
    {
      $set: {
        ...updates,
        updatedAt: new Date(),
      }
    }
  );
}

export async function deleteArticle(id: string) {
  const db = await getDatabase();
  return db.collection('articles').deleteOne({ id });
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
