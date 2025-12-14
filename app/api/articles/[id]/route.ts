import { NextRequest, NextResponse } from 'next/server';
import { getArticleById, updateArticle, deleteArticle } from '@/lib/db';

// GET /api/articles/[id] - Get single article
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          error: 'Article ID is required'
        },
        { status: 400 }
      );
    }

    const article = await getArticleById(id);

    if (!article) {
      return NextResponse.json(
        {
          success: false,
          error: 'Article not found'
        },
        { status: 404 }
      );
    }

    // Convert MongoDB ObjectId to string for JSON serialization
    const serializedArticle = {
      ...article,
      _id: article._id?.toString(),
      publishedAt: article.publishedAt?.toISOString(),
      createdAt: article.createdAt?.toISOString(),
      updatedAt: article.updatedAt?.toISOString(),
    };

    return NextResponse.json({
      success: true,
      data: serializedArticle
    });
  } catch (error: any) {
    console.error('Error fetching article:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch article',
        message: error.message
      },
      { status: 500 }
    );
  }
}

// PUT /api/articles/[id] - Update article
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          error: 'Article ID is required'
        },
        { status: 400 }
      );
    }

    const body = await request.json();

    // Prepare update data
    const updateData: any = {};

    if (body.slug !== undefined) updateData.slug = body.slug;
    if (body.title !== undefined) updateData.title = body.title;
    if (body.excerpt !== undefined) updateData.excerpt = body.excerpt;
    if (body.content !== undefined) updateData.content = body.content;
    if (body.category !== undefined) updateData.category = body.category;
    if (body.image !== undefined) updateData.image = body.image;
    if (body.author !== undefined) updateData.author = body.author;
    if (body.publishedAt !== undefined) updateData.publishedAt = new Date(body.publishedAt);
    if (body.featured !== undefined) updateData.featured = body.featured;
    if (body.breaking !== undefined) updateData.breaking = body.breaking;
    if (body.views !== undefined) updateData.views = body.views;

    if (Object.keys(updateData).length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: 'No valid fields to update'
        },
        { status: 400 }
      );
    }

    const result = await updateArticle(id, updateData);

    if (!result || result.matchedCount === 0) {
      return NextResponse.json(
        {
          success: false,
          error: 'Article not found'
        },
        { status: 404 }
      );
    }

    // Fetch updated article
    const updatedArticle = await getArticleById(id);

    return NextResponse.json({
      success: true,
      data: updatedArticle ? {
        ...updatedArticle,
        _id: updatedArticle._id?.toString(),
        publishedAt: updatedArticle.publishedAt?.toISOString(),
        createdAt: updatedArticle.createdAt?.toISOString(),
        updatedAt: updatedArticle.updatedAt?.toISOString(),
      } : null,
      message: 'Article updated successfully'
    });
  } catch (error: any) {
    console.error('Error updating article:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to update article',
        message: error.message
      },
      { status: 500 }
    );
  }
}

// DELETE /api/articles/[id] - Delete article
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          error: 'Article ID is required'
        },
        { status: 400 }
      );
    }

    const result = await deleteArticle(id);

    if (!result || result.deletedCount === 0) {
      return NextResponse.json(
        {
          success: false,
          error: 'Article not found'
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Article deleted successfully'
    });
  } catch (error: any) {
    console.error('Error deleting article:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to delete article',
        message: error.message
      },
      { status: 500 }
    );
  }
}
