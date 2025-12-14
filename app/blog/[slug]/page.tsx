import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { getSmakslyBlogs, getSmakslyBlogBySlug, formatBlogDate, estimateReadTime } from '@/lib/smaksly-blogs';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getSmakslyBlogBySlug(params.slug);

  // Get all blogs for related articles
  const allBlogs = await getSmakslyBlogs();

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
            <Link href="/blog" className="text-dc2626 hover:underline">
              Return to News
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Get related articles (excluding current article, max 2)
  const relatedArticles = allBlogs
    .filter(blog => blog.slug !== params.slug)
    .slice(0, 2);

  // Create excerpt from body
  const plainText = article.body.replace(/<[^>]*>/g, '');
  const excerpt = plainText.length > 200 ? plainText.substring(0, 200) + '...' : plainText;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Article Header */}
        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* Section Badge */}
          <div className="mb-4">
            <Link
              href={`/sections/${(article.category || 'general').toLowerCase()}`}
              className="inline-block px-3 py-1 bg-black text-white text-xs font-bold uppercase hover:bg-dc2626 transition-colors"
            >
              {article.category || 'General'}
            </Link>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-bold font-serif mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-gray-700 mb-8 leading-relaxed border-l-4 border-dc2626 pl-4">
            {excerpt}
          </p>

          {/* Byline */}
          <div className="border-y border-gray-300 py-4 mb-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="font-bold text-lg">By News Editorial</p>
                <p className="text-sm text-gray-600">{estimateReadTime(article.body)}</p>
              </div>
              <div className="text-right text-sm text-gray-600">
                <p>
                  Published: <time dateTime={new Date(article.publish_date).toISOString()}>
                    {formatBlogDate(article.publish_date)}
                  </time>
                </p>
                {new Date(article.modify_date).getTime() !== new Date(article.publish_date).getTime() && (
                  <p>
                    Updated: <time dateTime={new Date(article.modify_date).toISOString()}>
                      {formatBlogDate(article.modify_date)}
                    </time>
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-serif prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
              prose-p:text-gray-800 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-dc2626 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-black prose-strong:font-bold
              prose-ul:my-6 prose-li:my-2
              [&_.lead]:text-xl [&_.lead]:font-medium [&_.lead]:mb-8 [&_.lead]:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.body }}
          />

          {/* Article Footer */}
          <div className="mt-12 pt-8 border-t-2 border-black">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <Link
                href="/blog"
                className="text-dc2626 font-medium hover:underline"
              >
                ← Back to All News
              </Link>
              {article.category && (
                <Link
                  href={`/sections/${article.category.toLowerCase()}`}
                  className="text-dc2626 font-medium hover:underline"
                >
                  More {article.category} →
                </Link>
              )}
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-12 pt-12 border-t border-gray-300">
              <h2 className="text-2xl font-bold font-serif mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <Link key={relatedArticle.slug} href={`/blog/${relatedArticle.slug}`} className="group border border-gray-200 p-4 hover:border-dc2626 transition-colors">
                    <div className="mb-2">
                      <span className="inline-block px-2 py-1 bg-gray-100 text-black text-xs font-bold uppercase">
                        {relatedArticle.category || 'General'}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold font-serif mb-2 group-hover:text-dc2626 transition-colors">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-sm text-gray-600">By News Editorial</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>

      <Footer />
    </div>
  );
}
