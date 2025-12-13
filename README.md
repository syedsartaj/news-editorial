# The Herald - News Editorial Blog Template

A professional multi-column news magazine layout built with Next.js 14, featuring a classic newspaper aesthetic with modern web technologies.

## Features

- **Multi-Column Newspaper Layout**: Traditional newspaper-style grid with featured stories and categorized sections
- **Breaking News Ticker**: Animated scrolling ticker for urgent news updates
- **Professional Typography**: Libre Baskerville serif for headlines, Roboto for body text
- **Category Sections**: Organized content by Politics, Technology, Business, and more
- **Responsive Design**: Mobile-first approach that adapts to all screen sizes
- **News Article Cards**: Timestamped articles with author attribution and category tags
- **AI Content Generation**: OpenAI integration for automated article creation
- **MongoDB Integration**: Full database support for article management
- **Classic News Aesthetic**: Black, white, and red color scheme (#dc2626)

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom newspaper components
- **Database**: MongoDB
- **AI**: OpenAI GPT-4
- **Fonts**: Libre Baskerville (serif), Roboto (sans-serif)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- MongoDB database (local or MongoDB Atlas)
- OpenAI API key

### Installation

1. Clone or navigate to the template directory:
```bash
cd /Users/blesshost-27/Desktop/untitled\ folder/blog-templates/news-editorial
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Edit `.env.local` with your credentials:
```env
MONGODB_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
news-editorial/
├── app/
│   ├── layout.tsx          # Root layout with newspaper theme
│   ├── page.tsx            # Homepage with multi-column layout
│   └── globals.css         # Global styles and newspaper components
├── components/
│   ├── Header.tsx          # News navbar with "THE HERALD" branding
│   ├── Footer.tsx          # Newspaper-style footer
│   ├── BlogCard.tsx        # News article cards with timestamps
│   ├── BreakingNews.tsx    # Animated breaking news ticker
│   └── CategorySection.tsx # Section dividers with titles
├── lib/
│   ├── db.ts              # MongoDB connection and queries
│   └── openai.ts          # AI content generation utilities
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Key Components

### Header
- Classic newspaper masthead with "THE HERALD" branding
- Current date display
- Navigation menu for all news sections
- Weather and market ticker

### Breaking News Ticker
- Animated scrolling ticker for urgent updates
- Red background with flashing "Breaking News" badge
- Continuous loop animation

### Blog Cards
- Full-size cards with images for featured stories
- Compact cards for section listings
- Category tags, timestamps, and author attribution
- Hover effects and smooth transitions

### Category Sections
- Politics, Technology, Business sections
- Bold section headers with border styling
- Multi-column grid layout

## Customization

### Colors
Edit `app/globals.css` and `tailwind.config.ts`:
```css
:root {
  --news-red: #dc2626;     /* Primary accent color */
  --news-black: #000000;   /* Headlines and borders */
  --news-gray: #f3f4f6;    /* Background sections */
}
```

### Typography
Modify fonts in `app/layout.tsx`:
- Headlines: Libre Baskerville (serif)
- Body text: Roboto (sans-serif)

### Breaking News
Update breaking news items in `components/BreakingNews.tsx` or connect to your database.

### Sample Content
The template includes sample news articles covering:
- Global climate summit
- Stock market updates
- AI medical technology
- Political developments
- Business news
- Opinion pieces

## MongoDB Schema

### Articles Collection
```typescript
{
  id: string,
  title: string,
  excerpt: string,
  content: string,
  category: string,
  author: string,
  publishedAt: Date,
  imageUrl?: string,
  createdAt: Date,
  updatedAt: Date
}
```

### Breaking News Collection
```typescript
{
  news: string,
  priority: number,
  active: boolean,
  createdAt: Date
}
```

## AI Content Generation

The OpenAI integration provides:
- `generateArticle()`: Create full news articles
- `generateHeadline()`: Generate compelling headlines
- `generateExcerpt()`: Create article summaries
- `generateBreakingNews()`: Generate urgent news alerts
- `generateOpinionPiece()`: Create editorial content

## Deployment

### Vercel (Recommended)
```bash
npm run build
vercel deploy
```

### Other Platforms
```bash
npm run build
npm start
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Performance

- Fast page loads with Next.js optimization
- Image optimization for article photos
- Efficient MongoDB queries
- CSS animations for engaging UX

## License

This template is provided as-is for use in your projects.

## Support

For issues or questions about this template, please refer to:
- Next.js documentation: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- MongoDB: https://docs.mongodb.com

---

Built with Next.js 14 | Styled with Tailwind CSS | Powered by MongoDB & OpenAI
