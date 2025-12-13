import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const featuredArticle = {
  slug: 'breaking-tech-innovation-2024',
  title: 'Major Tech Innovation Reshapes Industry Standards',
  excerpt: 'Industry leaders announce groundbreaking changes that could revolutionize how technology companies operate globally. Experts weigh in on long-term implications.',
  section: 'Technology',
  author: 'Sarah Chen',
  publishedAt: '2024-12-14',
  updatedAt: '2024-12-14',
  image: '/images/featured.jpg'
};

const articles = [
  {
    slug: 'political-reform-legislation',
    title: 'New Legislation Passes With Bipartisan Support',
    excerpt: 'Historic agreement reached on controversial reform bill after months of negotiations.',
    section: 'Politics',
    author: 'Michael Rodriguez',
    publishedAt: '2024-12-14',
    updatedAt: '2024-12-14'
  },
  {
    slug: 'market-reaches-record-high',
    title: 'Markets Reach All-Time High Amid Economic Recovery',
    excerpt: 'Stock indexes surge as economic indicators show sustained growth across multiple sectors.',
    section: 'Business',
    author: 'Jennifer Wang',
    publishedAt: '2024-12-14',
    updatedAt: '2024-12-14'
  },
  {
    slug: 'championship-victory-celebration',
    title: 'Underdogs Claim Championship in Stunning Upset',
    excerpt: 'Team defies odds to secure historic victory in thrilling finale that captivated fans worldwide.',
    section: 'Sports',
    author: 'David Thompson',
    publishedAt: '2024-12-13',
    updatedAt: '2024-12-13'
  },
  {
    slug: 'cultural-festival-breaks-records',
    title: 'Annual Arts Festival Draws Record Attendance',
    excerpt: 'Cultural celebration attracts hundreds of thousands as organizers expand programming.',
    section: 'Entertainment',
    author: 'Emily Martinez',
    publishedAt: '2024-12-13',
    updatedAt: '2024-12-13'
  },
  {
    slug: 'opinion-climate-action-needed',
    title: 'Opinion: Why Climate Action Cannot Wait',
    excerpt: 'The time for incremental change has passed. We need bold action now to secure our future.',
    section: 'Opinion',
    author: 'Dr. Robert Hayes',
    publishedAt: '2024-12-13',
    updatedAt: '2024-12-13'
  },
  {
    slug: 'healthcare-breakthrough-announced',
    title: 'Researchers Announce Major Healthcare Breakthrough',
    excerpt: 'New treatment shows promising results in clinical trials, offering hope for millions.',
    section: 'Technology',
    author: 'Lisa Anderson',
    publishedAt: '2024-12-13',
    updatedAt: '2024-12-13'
  },
  {
    slug: 'infrastructure-project-approved',
    title: 'City Council Approves Major Infrastructure Project',
    excerpt: 'Landmark development promises to transform transportation and create thousands of jobs.',
    section: 'Politics',
    author: 'James Mitchell',
    publishedAt: '2024-12-12',
    updatedAt: '2024-12-12'
  },
  {
    slug: 'startup-funding-round',
    title: 'Local Startup Secures Record Funding Round',
    excerpt: 'Tech company attracts major investment as venture capitalists bet on innovative platform.',
    section: 'Business',
    author: 'Rachel Kim',
    publishedAt: '2024-12-12',
    updatedAt: '2024-12-12'
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Masthead */}
        <div className="border-b-4 border-black">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-600 mb-2">
                {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <h1 className="text-5xl font-bold font-serif mb-2">The Daily Chronicle</h1>
              <p className="text-sm text-gray-600 italic">All the News That Matters</p>
            </div>
          </div>
        </div>

        {/* Featured Article */}
        <div className="max-w-7xl mx-auto px-4 py-8 border-b-2 border-black">
          <Link href={`/blog/${featuredArticle.slug}`} className="group">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block px-3 py-1 bg-dc2626 text-white text-xs font-bold uppercase">
                    {featuredArticle.section}
                  </span>
                  <span className="text-xs text-gray-500 uppercase font-medium">Featured</span>
                </div>
                <h2 className="text-4xl font-bold font-serif mb-4 group-hover:text-dc2626 transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="font-medium">By {featuredArticle.author}</span>
                  <span>•</span>
                  <time dateTime={featuredArticle.publishedAt}>
                    {new Date(featuredArticle.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </time>
                </div>
              </div>
              <div className="bg-gray-200 aspect-[4/3] rounded"></div>
            </div>
          </Link>
        </div>

        {/* Articles Grid - Newspaper Style */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8 divide-x divide-gray-300">
            {/* Column 1 */}
            <div className="space-y-8">
              {articles.slice(0, 3).map((article) => (
                <article key={article.slug} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <Link href={`/blog/${article.slug}`} className="group">
                    <div className="mb-2">
                      <Link
                        href={`/sections/${article.section.toLowerCase()}`}
                        className="inline-block px-2 py-1 bg-black text-white text-xs font-bold uppercase hover:bg-dc2626 transition-colors"
                      >
                        {article.section}
                      </Link>
                    </div>
                    <h3 className="text-xl font-bold font-serif mb-2 group-hover:text-dc2626 transition-colors leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex flex-col gap-1 text-xs text-gray-600">
                      <span className="font-medium">By {article.author}</span>
                      <time dateTime={article.publishedAt}>
                        {new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </time>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* Column 2 */}
            <div className="md:pl-8 space-y-8">
              {articles.slice(3, 6).map((article) => (
                <article key={article.slug} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <Link href={`/blog/${article.slug}`} className="group">
                    <div className="mb-2">
                      <Link
                        href={`/sections/${article.section.toLowerCase()}`}
                        className="inline-block px-2 py-1 bg-black text-white text-xs font-bold uppercase hover:bg-dc2626 transition-colors"
                      >
                        {article.section}
                      </Link>
                    </div>
                    <h3 className="text-xl font-bold font-serif mb-2 group-hover:text-dc2626 transition-colors leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex flex-col gap-1 text-xs text-gray-600">
                      <span className="font-medium">By {article.author}</span>
                      <time dateTime={article.publishedAt}>
                        {new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </time>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* Column 3 */}
            <div className="md:pl-8 space-y-8">
              {articles.slice(6, 9).map((article) => (
                <article key={article.slug} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <Link href={`/blog/${article.slug}`} className="group">
                    <div className="mb-2">
                      <Link
                        href={`/sections/${article.section.toLowerCase()}`}
                        className="inline-block px-2 py-1 bg-black text-white text-xs font-bold uppercase hover:bg-dc2626 transition-colors"
                      >
                        {article.section}
                      </Link>
                    </div>
                    <h3 className="text-xl font-bold font-serif mb-2 group-hover:text-dc2626 transition-colors leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex flex-col gap-1 text-xs text-gray-600">
                      <span className="font-medium">By {article.author}</span>
                      <time dateTime={article.publishedAt}>
                        {new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </time>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Browse Sections */}
        <div className="bg-gray-50 border-t-2 border-black">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold font-serif mb-6 text-center">Browse by Section</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {['Politics', 'Business', 'Technology', 'Sports', 'Entertainment', 'Opinion'].map((section) => (
                <Link
                  key={section}
                  href={`/sections/${section.toLowerCase()}`}
                  className="px-6 py-3 bg-black text-white font-bold uppercase text-sm hover:bg-dc2626 transition-colors"
                >
                  {section}
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/sections" className="text-dc2626 font-medium hover:underline">
                View All Sections →
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
