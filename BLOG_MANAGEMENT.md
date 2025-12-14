# Blog Management System Documentation

## Overview

This news editorial blog comes with a complete blog management system built on Next.js 14, MongoDB, and TypeScript. The system provides a comprehensive admin dashboard for managing articles with full CRUD (Create, Read, Update, Delete) functionality.

## Features

- **Admin Dashboard** with statistics and article management
- **Article Management** - Create, edit, and delete articles
- **Category System** - 8 news categories (Politics, Business, Technology, Sports, Entertainment, Health, Science, World)
- **Advanced Features** - Featured articles, breaking news flags
- **Search & Filter** - Search by title/author and filter by category
- **Dark Theme** - Professional dark theme with red accent colors
- **View Tracking** - Track article views
- **Real-time Updates** - Automatic dashboard refresh after changes

## Database Structure

### Article Schema

```typescript
interface Article {
  _id?: ObjectId;           // MongoDB document ID
  slug: string;             // URL-friendly slug
  title: string;            // Article title
  excerpt: string;          // Short summary
  content: string;          // Full article content (supports markdown)
  category: string;         // One of 8 categories
  image: string;            // Featured image URL
  author: string;           // Author name
  publishedAt: Date;        // Publication date/time
  featured: boolean;        // Featured article flag
  breaking: boolean;        // Breaking news flag
  views: number;            // View count
  createdAt: Date;          // Creation timestamp
  updatedAt: Date;          // Last update timestamp
}
```

## Setup Instructions

### 1. Environment Configuration

Copy the `.env.example` file to `.env.local`:

```bash
cp .env.example .env.local
```

Update the MongoDB connection string in `.env.local`:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/news_editorial?retryWrites=true&w=majority
```

Replace `username`, `password`, and `cluster` with your MongoDB Atlas credentials.

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Using the Admin Dashboard

### Accessing the Dashboard

Navigate to: `http://localhost:3000/admin`

### Dashboard Features

#### Statistics Cards

The dashboard displays four key metrics:
- **Total Articles** - Total number of articles in the database
- **Featured** - Number of featured articles
- **Breaking News** - Number of breaking news articles
- **Total Views** - Combined view count across all articles

#### Search and Filter

- **Search Bar** - Search articles by title or author name
- **Category Filter** - Filter articles by category (All Categories, Politics, Business, etc.)

#### Article Table

The table displays:
- Article title
- Category (with colored badge)
- Author name
- Publication date
- View count
- Status badges (Featured, Breaking)
- Action buttons (Edit, Delete)

### Creating a New Article

1. Click the **"+ New Article"** button in the top right
2. Fill in the article form:
   - **Title** - The article headline
   - **Slug** - URL-friendly version (use "Generate" button to auto-create from title)
   - **Category** - Select from dropdown
   - **Author** - Author name
   - **Image URL** - Full URL to featured image
   - **Excerpt** - Brief summary (2-3 sentences)
   - **Content** - Full article content (supports markdown)
   - **Publish Date & Time** - When to publish (defaults to now)
   - **Featured Article** - Check to mark as featured
   - **Breaking News** - Check to mark as breaking news
3. Click **"Create Article"** to save

### Editing an Article

1. Click **"Edit"** next to any article in the dashboard
2. Update the fields you want to change
3. Click **"Update Article"** to save changes
4. Click **"Cancel"** to discard changes

### Deleting an Article

1. Click **"Delete"** next to the article
2. Confirm the deletion in the popup dialog
3. The article will be permanently removed

## API Endpoints

### GET /api/articles

Retrieve all articles

**Response:**
```json
{
  "success": true,
  "data": [...],
  "count": 10
}
```

### POST /api/articles

Create a new article

**Request Body:**
```json
{
  "slug": "sample-article",
  "title": "Sample Article",
  "excerpt": "Brief summary",
  "content": "Full content here",
  "category": "Technology",
  "image": "https://example.com/image.jpg",
  "author": "John Doe",
  "publishedAt": "2024-01-15T10:00:00Z",
  "featured": false,
  "breaking": false
}
```

**Response:**
```json
{
  "success": true,
  "data": {...},
  "message": "Article created successfully"
}
```

### GET /api/articles/[id]

Get a single article by ID

**Response:**
```json
{
  "success": true,
  "data": {...}
}
```

### PUT /api/articles/[id]

Update an article

**Request Body:**
```json
{
  "title": "Updated Title",
  "content": "Updated content",
  ...
}
```

**Response:**
```json
{
  "success": true,
  "data": {...},
  "message": "Article updated successfully"
}
```

### DELETE /api/articles/[id]

Delete an article

**Response:**
```json
{
  "success": true,
  "message": "Article deleted successfully"
}
```

## Database Functions

### Available Functions (lib/db.ts)

- `getArticles(filter?)` - Get all articles with optional filter
- `getAllArticles()` - Get all articles (for admin)
- `getArticleById(id)` - Get single article by MongoDB ID
- `getArticleBySlug(slug)` - Get article by URL slug
- `createArticle(article)` - Create new article
- `updateArticle(id, updates)` - Update existing article
- `deleteArticle(id)` - Delete article
- `incrementArticleViews(id)` - Increment view count
- `getFeaturedArticles(limit)` - Get featured articles
- `getBreakingArticles()` - Get breaking news articles
- `getArticlesByCategory(category)` - Get articles by category

## Categories

The system supports 8 news categories:

1. **Politics** - Political news and analysis
2. **Business** - Business and economic news
3. **Technology** - Tech news and innovations
4. **Sports** - Sports news and coverage
5. **Entertainment** - Entertainment and celebrity news
6. **Health** - Health and wellness articles
7. **Science** - Scientific discoveries and research
8. **World** - International news

## File Structure

```
news-editorial/
├── app/
│   ├── admin/                          # Admin dashboard
│   │   ├── page.tsx                    # Main dashboard page
│   │   └── articles/
│   │       ├── new/
│   │       │   └── page.tsx            # Create new article
│   │       └── [id]/
│   │           └── page.tsx            # Edit article
│   ├── api/
│   │   └── articles/
│   │       ├── route.ts                # GET all, POST create
│   │       └── [id]/
│   │           └── route.ts            # GET, PUT, DELETE by ID
│   └── ...
├── components/
│   ├── ArticleForm.tsx                 # Article form component
│   └── ...
├── lib/
│   ├── db.ts                           # MongoDB connection & functions
│   └── ...
├── .env.example                        # Environment variables template
├── BLOG_MANAGEMENT.md                  # This file
└── package.json
```

## Design System

### Colors

- **Primary Accent**: Red (#EF4444 - red-500)
- **Background**: Dark gray (#111827 - gray-900)
- **Cards**: Medium gray (#1F2937 - gray-800)
- **Borders**: Dark gray (#374151 - gray-700)
- **Text**: White and gray tones

### Typography

- **Headings**: Bold, white text
- **Body**: Regular weight, gray-300
- **Labels**: Small, uppercase, gray-400

## Best Practices

### Article Management

1. **Use Descriptive Titles** - Clear, concise headlines
2. **Generate Slugs** - Use the auto-generate feature for consistent URL formatting
3. **Write Good Excerpts** - 2-3 sentences summarizing the article
4. **Categorize Correctly** - Choose the most relevant category
5. **Feature Strategically** - Don't mark too many articles as featured
6. **Breaking News** - Use sparingly for truly breaking stories
7. **Image URLs** - Use high-quality images with proper URLs

### Content Writing

1. **Structure Content** - Use paragraphs, headings (markdown supported)
2. **Be Concise** - News writing should be direct and factual
3. **Verify Information** - Ensure accuracy before publishing
4. **Attribution** - Credit sources appropriately

## Troubleshooting

### Common Issues

**Problem**: Cannot connect to MongoDB

**Solution**:
- Verify MONGODB_URI in .env.local
- Check MongoDB Atlas network access settings
- Ensure database user has proper permissions

**Problem**: Articles not displaying in dashboard

**Solution**:
- Check browser console for errors
- Verify API routes are working (`/api/articles`)
- Check MongoDB connection

**Problem**: Form validation errors

**Solution**:
- Ensure all required fields are filled
- Check that image URLs are valid
- Verify date format is correct

## Security Considerations

1. **Authentication** - Consider adding authentication before deploying to production
2. **Input Validation** - API routes validate required fields
3. **Environment Variables** - Never commit .env.local to version control
4. **CORS** - Configure appropriate CORS policies for production
5. **Rate Limiting** - Consider adding rate limiting for API routes

## Production Deployment

### Pre-deployment Checklist

- [ ] Configure MongoDB Atlas production cluster
- [ ] Update MONGODB_URI in production environment
- [ ] Add authentication system
- [ ] Configure custom domain
- [ ] Set up monitoring and logging
- [ ] Test all CRUD operations
- [ ] Verify responsive design
- [ ] Optimize images and assets

### Deployment Platforms

This application can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Custom VPS with Node.js

## Support and Maintenance

### Regular Maintenance Tasks

1. **Database Backups** - Set up automated MongoDB backups
2. **Monitor Performance** - Check API response times
3. **Update Dependencies** - Keep packages up to date
4. **Review Content** - Regularly audit published articles
5. **Security Updates** - Apply security patches promptly

## Future Enhancements

Potential features to add:

- User authentication and role-based access
- Image upload functionality
- Rich text editor (WYSIWYG)
- Article scheduling
- Comment system
- Analytics integration
- SEO optimization tools
- Multi-language support
- Email notifications
- Bulk operations

## License

This blog management system is part of the news-editorial template.

---

**Last Updated**: December 2024
**Version**: 1.0.0
