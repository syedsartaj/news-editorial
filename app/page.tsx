import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreakingNews from "@/components/BreakingNews";
import BlogCard from "@/components/BlogCard";
import CategorySection from "@/components/CategorySection";
import { getSmakslyBlogs, SmakslyBlog } from "@/lib/smaksly-blogs";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Transform SmakslyBlog to the format expected by the template
function transformBlog(blog: SmakslyBlog) {
  // Create excerpt from body (first 200 chars, strip HTML)
  const plainText = blog.body.replace(/<[^>]*>/g, '');
  const excerpt = plainText.length > 200 ? plainText.substring(0, 200) + '...' : plainText;

  return {
    id: blog.id,
    title: blog.title,
    excerpt: excerpt,
    category: blog.category || "General",
    author: "News Editorial",
    publishedAt: new Date(blog.publish_date),
    imageUrl: blog.image_url || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=600&fit=crop",
  };
}

export default async function Home() {
  const smakslyBlogs = await getSmakslyBlogs();
  const transformedBlogs = smakslyBlogs.map(transformBlog);

  // Get featured article (first blog)
  const featuredArticle = transformedBlogs[0] || null;

  // Get top stories (next 3 blogs)
  const topStories = transformedBlogs.slice(1, 4);

  // Group remaining blogs by category
  const remainingBlogs = transformedBlogs.slice(4);
  const politicsNews = remainingBlogs.filter(blog => blog.category.toLowerCase().includes('politic')).slice(0, 2);
  const techNews = remainingBlogs.filter(blog => blog.category.toLowerCase().includes('tech')).slice(0, 2);
  const businessNews = remainingBlogs.filter(blog => blog.category.toLowerCase().includes('business')).slice(0, 2);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <BreakingNews />

      <main className="flex-grow">
        {/* Empty State */}
        {!featuredArticle && (
          <div className="max-w-7xl mx-auto px-4 py-16 text-center">
            <h2 className="font-baskerville text-3xl font-bold mb-4">No Articles Available</h2>
            <p className="text-gray-600">Check back soon for the latest news and updates.</p>
          </div>
        )}

        {/* Featured Story */}
        {featuredArticle && (
          <div className="border-b-4 border-black">
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 mb-4">
                    {featuredArticle.category.toUpperCase()}
                  </span>
                  <h1 className="font-baskerville text-4xl md:text-5xl font-bold leading-tight mb-4">
                    {featuredArticle.title}
                  </h1>
                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="font-semibold">{featuredArticle.author}</span>
                    <span className="mx-2">•</span>
                    <time>{featuredArticle.publishedAt.toLocaleString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                      hour: 'numeric',
                      minute: '2-digit'
                    })}</time>
                  </div>
                </div>
                <div className="relative h-[400px] bg-gray-200">
                  <img
                    src={featuredArticle.imageUrl}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Top Stories */}
        {topStories.length > 0 && (
          <div className="border-b-2 border-gray-300">
            <div className="max-w-7xl mx-auto px-4 py-8">
              <h2 className="font-baskerville text-3xl font-bold mb-6 pb-2 border-b-2 border-black">
                Top Stories
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {topStories.map((article) => (
                  <BlogCard key={article.id} article={article} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Multi-Column Layout */}
        {(politicsNews.length > 0 || techNews.length > 0 || businessNews.length > 0) && (
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Politics Column */}
              <div>
                <CategorySection title="Politics" />
                <div className="space-y-6">
                  {politicsNews.length > 0 ? (
                    politicsNews.map((article) => (
                      <BlogCard key={article.id} article={article} compact />
                    ))
                  ) : (
                    <p className="text-gray-500 text-sm">No politics articles yet.</p>
                  )}
                </div>
              </div>

              {/* Technology Column */}
              <div>
                <CategorySection title="Technology" />
                <div className="space-y-6">
                  {techNews.length > 0 ? (
                    techNews.map((article) => (
                      <BlogCard key={article.id} article={article} compact />
                    ))
                  ) : (
                    <p className="text-gray-500 text-sm">No technology articles yet.</p>
                  )}
                </div>
              </div>

              {/* Business Column */}
              <div>
                <CategorySection title="Business" />
                <div className="space-y-6">
                  {businessNews.length > 0 ? (
                    businessNews.map((article) => (
                      <BlogCard key={article.id} article={article} compact />
                    ))
                  ) : (
                    <p className="text-gray-500 text-sm">No business articles yet.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Opinion Section */}
        <div className="bg-gray-100 border-t-2 border-gray-300">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <CategorySection title="Opinion & Analysis" />
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white p-6 border-l-4 border-red-600">
                <h3 className="font-baskerville text-xl font-bold mb-2">
                  Why Climate Action Cannot Wait Another Decade
                </h3>
                <p className="text-gray-700 mb-3">
                  As global temperatures continue to rise, the window for meaningful intervention grows narrower each year...
                </p>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">Opinion by Margaret Stone</span>
                </div>
              </div>
              <div className="bg-white p-6 border-l-4 border-red-600">
                <h3 className="font-baskerville text-xl font-bold mb-2">
                  The Future of Work: Embracing the Hybrid Model
                </h3>
                <p className="text-gray-700 mb-3">
                  Remote work is here to stay, but the most successful companies will find balance between flexibility and collaboration...
                </p>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">Analysis by Thomas Reid</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
