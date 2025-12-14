import { NextRequest, NextResponse } from 'next/server';
import { getAllArticles, createArticle } from '@/lib/db';

// GET /api/articles - Get all articles
export async function GET(request: NextRequest) {
  try {
    const articles = await getAllArticles();

    // Convert MongoDB ObjectId to string for JSON serialization
    const serializedArticles = articles.map(article => ({
      ...article,
      _id: article._id?.toString(),
      publishedAt: article.publishedAt?.toISOString(),
      createdAt: article.createdAt?.toISOString(),
      updatedAt: article.updatedAt?.toISOString(),
    }));

    return NextResponse.json({
      success: true,
      data: serializedArticles,
      count: serializedArticles.length
    });
  } catch (error: any) {
    console.error('Error fetching articles:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch articles',
        message: error.message
      },
      { status: 500 }
    );
  }
}

// POST /api/articles - Create new article
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const requiredFields = ['slug', 'title', 'excerpt', 'content', 'category', 'image', 'author'];
    const missingFields = requiredFields.filter(field => !body[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required fields',
          missingFields
        },
        { status: 400 }
      );
    }

    // Prepare article data
    const articleData = {
      slug: body.slug,
      title: body.title,
      excerpt: body.excerpt,
      content: body.content,
      category: body.category,
      image: body.image,
      author: body.author,
      publishedAt: body.publishedAt ? new Date(body.publishedAt) : new Date(),
      featured: body.featured || false,
      breaking: body.breaking || false,
    };

    // Create article
    const result = await createArticle(articleData);

    if (!result.acknowledged) {
      throw new Error('Failed to create article');
    }

    return NextResponse.json(
      {
        success: true,
        data: {
          _id: result.insertedId.toString(),
          ...articleData
        },
        message: 'Article created successfully'
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error creating article:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to create article',
        message: error.message
      },
      { status: 500 }
    );
  }
}
