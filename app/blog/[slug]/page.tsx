import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const articles: Record<string, any> = {
  'breaking-tech-innovation-2024': {
    title: 'Major Tech Innovation Reshapes Industry Standards',
    section: 'Technology',
    author: 'Sarah Chen',
    authorBio: 'Technology Correspondent covering innovation and industry trends',
    publishedAt: '2024-12-14T09:00:00Z',
    updatedAt: '2024-12-14T14:30:00Z',
    excerpt: 'Industry leaders announce groundbreaking changes that could revolutionize how technology companies operate globally.',
    content: `
      <p class="lead">In a stunning announcement that sent shockwaves through Silicon Valley, major technology companies unveiled a collaborative initiative that promises to reshape industry standards and practices for decades to come.</p>

      <p>The groundbreaking agreement, signed by CEOs from more than two dozen leading tech firms, establishes new protocols for data privacy, interoperability, and ethical AI development. Industry analysts are calling it the most significant self-regulatory effort in the sector's history.</p>

      <h2>Key Changes Announced</h2>

      <p>"This represents a fundamental shift in how we approach technology development," said Dr. Amanda Foster, Chief Technology Officer at one of the participating companies. "We're not just setting standards; we're committing to a new philosophy of responsible innovation."</p>

      <p>The initiative includes several major components:</p>

      <ul>
        <li>Universal data portability standards allowing seamless transfer between platforms</li>
        <li>Mandatory ethical review boards for AI and machine learning projects</li>
        <li>Transparent reporting requirements for algorithmic decision-making systems</li>
        <li>Enhanced privacy protections exceeding current regulatory requirements</li>
      </ul>

      <h2>Industry Response</h2>

      <p>Reaction from the technology community has been overwhelmingly positive, though some critics question whether voluntary standards will be sufficiently enforced without regulatory oversight.</p>

      <p>"This is exactly the kind of proactive leadership the industry needs," commented Professor James Martinez of the Institute for Technology Ethics. "But the real test will be in implementation and accountability."</p>

      <p>Consumer advocacy groups have welcomed the announcement while calling for independent verification mechanisms to ensure compliance. "We applaud this step forward, but trust must be earned through demonstrated commitment over time," said Rebecca Thompson, director of Digital Rights Alliance.</p>

      <h2>Global Implications</h2>

      <p>The standards are expected to influence regulatory frameworks worldwide, potentially serving as a blueprint for government policies on technology governance. Several European Union officials have already expressed interest in incorporating elements of the agreement into upcoming legislation.</p>

      <p>Market analysts predict the changes could create short-term compliance costs but ultimately strengthen consumer trust and drive long-term growth across the sector. Early trading following the announcement showed positive movement in technology stocks.</p>

      <p>Implementation of the new standards is scheduled to begin in phases over the next 18 months, with full compliance expected by 2026. An independent oversight committee will monitor progress and publish quarterly reports on industry adoption.</p>
    `
  },
  'political-reform-legislation': {
    title: 'New Legislation Passes With Bipartisan Support',
    section: 'Politics',
    author: 'Michael Rodriguez',
    authorBio: 'Senior Political Reporter covering Congress and national politics',
    publishedAt: '2024-12-14T08:00:00Z',
    updatedAt: '2024-12-14T08:00:00Z',
    excerpt: 'Historic agreement reached on controversial reform bill after months of negotiations.',
    content: `
      <p class="lead">After months of intense negotiations and numerous false starts, Congress has passed sweeping reform legislation with unexpected bipartisan support, marking a rare moment of cross-party cooperation in an increasingly polarized political landscape.</p>

      <p>The bill, which addresses infrastructure, healthcare access, and education funding, passed the Senate 67-33 and the House 298-137, drawing support from both progressive and moderate lawmakers who praised the compromise as a model for future legislative efforts.</p>

      <h2>What's in the Bill</h2>

      <p>The legislation includes provisions that had previously been considered politically impossible to reconcile. Key elements include targeted infrastructure investments, expanded rural healthcare access, and increased education funding with accountability measures.</p>

      <p>"This proves that when we focus on solving problems rather than scoring political points, we can deliver real results for the American people," said Senator Elizabeth Morrison, one of the bill's chief architects.</p>

      <p>The package allocates substantial resources across multiple priority areas while incorporating fiscal responsibility measures championed by conservative lawmakers. This balanced approach proved crucial in building the coalition necessary for passage.</p>

      <h2>Path to Passage</h2>

      <p>The journey to this legislative victory was far from smooth. Earlier versions of the bill failed to gain traction, prompting a core group of senators from both parties to retreat for intensive closed-door negotiations that ultimately produced the compromise framework.</p>

      <p>President announced plans to sign the legislation in a ceremony next week, calling it "a testament to what we can achieve when we work together across the aisle."</p>
    `
  },
  'market-reaches-record-high': {
    title: 'Markets Reach All-Time High Amid Economic Recovery',
    section: 'Business',
    author: 'Jennifer Wang',
    authorBio: 'Business Editor covering markets, finance, and economic policy',
    publishedAt: '2024-12-14T16:00:00Z',
    updatedAt: '2024-12-14T16:00:00Z',
    excerpt: 'Stock indexes surge as economic indicators show sustained growth across multiple sectors.',
    content: `
      <p class="lead">Major stock indexes climbed to record highs today as investors responded enthusiastically to a series of positive economic reports indicating sustained growth and moderating inflation pressures.</p>

      <p>The broad market rally saw the S&P 500 close up 2.3%, the Dow Jones Industrial Average gain 1.8%, and the Nasdaq Composite surge 3.1%, with gains distributed across most sectors in a sign of broad-based economic strength.</p>

      <h2>Driving the Rally</h2>

      <p>Several factors contributed to today's market optimism. Employment data released this morning showed robust job creation alongside wage growth, while inflation figures came in below expectations for the third consecutive month.</p>

      <p>"We're seeing what economists call a 'Goldilocks scenario' - growth that's neither too hot nor too cold," explained Marcus Chen, chief market strategist at Global Investment Partners. "It's the kind of environment where both businesses and workers can thrive."</p>

      <p>Corporate earnings reports have also exceeded analyst expectations, with companies citing improved efficiency and strong consumer demand. Technology and consumer discretionary sectors led today's gains, though even traditionally defensive sectors posted solid advances.</p>

      <h2>Looking Ahead</h2>

      <p>While market sentiment is decidedly positive, some analysts counsel caution. "We've seen a remarkable run, but markets can't go up forever," noted Dr. Patricia Williams, economics professor and market commentator. "Investors should maintain balanced portfolios and avoid getting swept up in euphoria."</p>

      <p>Federal Reserve officials, who meet next month to review monetary policy, have indicated satisfaction with current economic trends while emphasizing their commitment to data-dependent decision-making. Market participants will watch closely for any signals about future policy direction.</p>
    `
  }
};

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug];

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

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Article Header */}
        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* Section Badge */}
          <div className="mb-4">
            <Link
              href={`/sections/${article.section.toLowerCase()}`}
              className="inline-block px-3 py-1 bg-black text-white text-xs font-bold uppercase hover:bg-dc2626 transition-colors"
            >
              {article.section}
            </Link>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-bold font-serif mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-gray-700 mb-8 leading-relaxed border-l-4 border-dc2626 pl-4">
            {article.excerpt}
          </p>

          {/* Byline */}
          <div className="border-y border-gray-300 py-4 mb-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="font-bold text-lg">By {article.author}</p>
                <p className="text-sm text-gray-600">{article.authorBio}</p>
              </div>
              <div className="text-right text-sm text-gray-600">
                <p>
                  Published: <time dateTime={article.publishedAt}>
                    {new Date(article.publishedAt).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                      hour: 'numeric',
                      minute: '2-digit'
                    })}
                  </time>
                </p>
                {article.updatedAt !== article.publishedAt && (
                  <p>
                    Updated: <time dateTime={article.updatedAt}>
                      {new Date(article.updatedAt).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                        hour: 'numeric',
                        minute: '2-digit'
                      })}
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
            dangerouslySetInnerHTML={{ __html: article.content }}
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
              <Link
                href={`/sections/${article.section.toLowerCase()}`}
                className="text-dc2626 font-medium hover:underline"
              >
                More {article.section} →
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-12 pt-12 border-t border-gray-300">
            <h2 className="text-2xl font-bold font-serif mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(articles).slice(0, 2).map(([slug, relatedArticle]) => (
                slug !== params.slug && (
                  <Link key={slug} href={`/blog/${slug}`} className="group border border-gray-200 p-4 hover:border-dc2626 transition-colors">
                    <div className="mb-2">
                      <span className="inline-block px-2 py-1 bg-gray-100 text-black text-xs font-bold uppercase">
                        {relatedArticle.section}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold font-serif mb-2 group-hover:text-dc2626 transition-colors">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-sm text-gray-600">By {relatedArticle.author}</p>
                  </Link>
                )
              ))}
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
