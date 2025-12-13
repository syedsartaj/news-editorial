import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const sectionInfo: Record<string, any> = {
  politics: {
    name: 'Politics',
    description: 'In-depth coverage of government, policy, and political developments',
    tagline: 'Democracy in Action'
  },
  business: {
    name: 'Business',
    description: 'Markets, economics, and corporate news',
    tagline: 'Where Money Meets Meaning'
  },
  technology: {
    name: 'Technology',
    description: 'Innovation, startups, and digital transformation',
    tagline: 'Shaping Tomorrow'
  },
  sports: {
    name: 'Sports',
    description: 'Game coverage, analysis, and athletic excellence',
    tagline: 'The Thrill of Victory'
  },
  entertainment: {
    name: 'Entertainment',
    description: 'Arts, culture, film, music, and celebrity news',
    tagline: 'Life on Stage and Screen'
  },
  opinion: {
    name: 'Opinion',
    description: 'Editorials, columns, and diverse perspectives',
    tagline: 'Voices That Matter'
  }
};

const allArticles: Record<string, any[]> = {
  politics: [
    {
      slug: 'political-reform-legislation',
      title: 'New Legislation Passes With Bipartisan Support',
      excerpt: 'Historic agreement reached on controversial reform bill after months of negotiations.',
      author: 'Michael Rodriguez',
      publishedAt: '2024-12-14',
      featured: true
    },
    {
      slug: 'infrastructure-project-approved',
      title: 'City Council Approves Major Infrastructure Project',
      excerpt: 'Landmark development promises to transform transportation and create thousands of jobs.',
      author: 'James Mitchell',
      publishedAt: '2024-12-12'
    },
    {
      slug: 'senate-hearing-climate',
      title: 'Senate Hearing Addresses Climate Policy',
      excerpt: 'Lawmakers debate comprehensive environmental legislation as pressure mounts for action.',
      author: 'Patricia Wells',
      publishedAt: '2024-12-11'
    },
    {
      slug: 'local-election-results',
      title: 'Local Elections See Record Turnout',
      excerpt: 'Voters show unprecedented engagement in municipal contests across the region.',
      author: 'Michael Rodriguez',
      publishedAt: '2024-12-10'
    }
  ],
  business: [
    {
      slug: 'market-reaches-record-high',
      title: 'Markets Reach All-Time High Amid Economic Recovery',
      excerpt: 'Stock indexes surge as economic indicators show sustained growth across multiple sectors.',
      author: 'Jennifer Wang',
      publishedAt: '2024-12-14',
      featured: true
    },
    {
      slug: 'startup-funding-round',
      title: 'Local Startup Secures Record Funding Round',
      excerpt: 'Tech company attracts major investment as venture capitalists bet on innovative platform.',
      author: 'Rachel Kim',
      publishedAt: '2024-12-12'
    },
    {
      slug: 'retail-sales-surge',
      title: 'Retail Sales Surge in Holiday Shopping Season',
      excerpt: 'Consumer spending shows resilience as retailers report strong performance.',
      author: 'David Chang',
      publishedAt: '2024-12-11'
    },
    {
      slug: 'merger-announcement',
      title: 'Major Merger Creates Industry Giant',
      excerpt: 'Two leading companies combine forces in deal valued at billions.',
      author: 'Jennifer Wang',
      publishedAt: '2024-12-09'
    }
  ],
  technology: [
    {
      slug: 'breaking-tech-innovation-2024',
      title: 'Major Tech Innovation Reshapes Industry Standards',
      excerpt: 'Industry leaders announce groundbreaking changes that could revolutionize how technology companies operate.',
      author: 'Sarah Chen',
      publishedAt: '2024-12-14',
      featured: true
    },
    {
      slug: 'healthcare-breakthrough-announced',
      title: 'Researchers Announce Major Healthcare Breakthrough',
      excerpt: 'New treatment shows promising results in clinical trials, offering hope for millions.',
      author: 'Lisa Anderson',
      publishedAt: '2024-12-13'
    },
    {
      slug: 'ai-ethics-guidelines',
      title: 'Industry Leaders Release AI Ethics Guidelines',
      excerpt: 'Technology companies commit to responsible artificial intelligence development.',
      author: 'Marcus Liu',
      publishedAt: '2024-12-10'
    },
    {
      slug: 'cybersecurity-threat-alert',
      title: 'Cybersecurity Experts Warn of New Threat',
      excerpt: 'Security researchers identify sophisticated attack vector targeting businesses.',
      author: 'Sarah Chen',
      publishedAt: '2024-12-08'
    }
  ],
  sports: [
    {
      slug: 'championship-victory-celebration',
      title: 'Underdogs Claim Championship in Stunning Upset',
      excerpt: 'Team defies odds to secure historic victory in thrilling finale that captivated fans worldwide.',
      author: 'David Thompson',
      publishedAt: '2024-12-13',
      featured: true
    },
    {
      slug: 'athlete-breaks-record',
      title: 'Olympic Champion Shatters World Record',
      excerpt: 'Extraordinary performance puts athlete in history books with dominant showing.',
      author: 'Maria Santos',
      publishedAt: '2024-12-11'
    },
    {
      slug: 'coach-retirement-announcement',
      title: 'Legendary Coach Announces Retirement',
      excerpt: 'Hall of Fame career comes to end as beloved figure steps away from the game.',
      author: 'David Thompson',
      publishedAt: '2024-12-09'
    },
    {
      slug: 'season-preview-analysis',
      title: 'Season Preview: What to Watch This Year',
      excerpt: 'Expert analysis of top storylines, contenders, and breakout candidates.',
      author: 'Chris Johnson',
      publishedAt: '2024-12-07'
    }
  ],
  entertainment: [
    {
      slug: 'cultural-festival-breaks-records',
      title: 'Annual Arts Festival Draws Record Attendance',
      excerpt: 'Cultural celebration attracts hundreds of thousands as organizers expand programming.',
      author: 'Emily Martinez',
      publishedAt: '2024-12-13',
      featured: true
    },
    {
      slug: 'film-awards-nominations',
      title: 'Major Film Awards Announce Nominations',
      excerpt: 'This year\'s contenders represent diverse storytelling and technical excellence.',
      author: 'Alexandra Reed',
      publishedAt: '2024-12-12'
    },
    {
      slug: 'concert-tour-announcement',
      title: 'Superstar Announces Global Concert Tour',
      excerpt: 'Fans celebrate as beloved artist reveals plans for extensive world tour.',
      author: 'Marcus Davis',
      publishedAt: '2024-12-10'
    },
    {
      slug: 'museum-exhibition-opens',
      title: 'Groundbreaking Museum Exhibition Opens',
      excerpt: 'Rare collection showcases artistic treasures in unprecedented display.',
      author: 'Emily Martinez',
      publishedAt: '2024-12-08'
    }
  ],
  opinion: [
    {
      slug: 'opinion-climate-action-needed',
      title: 'Opinion: Why Climate Action Cannot Wait',
      excerpt: 'The time for incremental change has passed. We need bold action now to secure our future.',
      author: 'Dr. Robert Hayes',
      publishedAt: '2024-12-13',
      featured: true
    },
    {
      slug: 'editorial-education-reform',
      title: 'Editorial: The Case for Education Reform',
      excerpt: 'Our schools deserve investment and innovation to prepare students for the future.',
      author: 'Editorial Board',
      publishedAt: '2024-12-11'
    },
    {
      slug: 'column-technology-society',
      title: 'Column: Technology and the Social Contract',
      excerpt: 'As digital platforms reshape society, we must rethink our relationship with technology.',
      author: 'Dr. Amanda Foster',
      publishedAt: '2024-12-09'
    },
    {
      slug: 'letters-to-editor',
      title: 'Letters: Readers Respond to Recent Coverage',
      excerpt: 'Your voices on the issues that matter most to our community.',
      author: 'Readers',
      publishedAt: '2024-12-08'
    }
  ]
};

export default function SectionPage({ params }: { params: { section: string } }) {
  const section = sectionInfo[params.section];
  const articles = allArticles[params.section];

  if (!section || !articles) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Section Not Found</h1>
            <Link href="/sections" className="text-dc2626 hover:underline">
              Browse All Sections
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const featuredArticle = articles.find(a => a.featured) || articles[0];
  const otherArticles = articles.filter(a => a !== featuredArticle);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Section Header */}
        <div className="bg-black text-white py-16 border-b-4 border-dc2626">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-3">
              <Link href="/sections" className="text-gray-400 hover:text-white transition-colors text-sm">
                ← All Sections
              </Link>
            </div>
            <h1 className="text-6xl font-bold font-serif mb-4">{section.name}</h1>
            <p className="text-2xl text-gray-300 mb-2">{section.description}</p>
            <p className="text-lg text-dc2626 italic font-medium">{section.tagline}</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Featured Article */}
          {featuredArticle && (
            <div className="mb-12 pb-12 border-b-2 border-black">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block px-3 py-1 bg-dc2626 text-white text-xs font-bold uppercase">
                  Featured
                </span>
              </div>
              <Link href={`/blog/${featuredArticle.slug}`} className="group">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-4xl font-bold font-serif mb-4 group-hover:text-dc2626 transition-colors leading-tight">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="font-medium">By {featuredArticle.author}</span>
                      <span>•</span>
                      <time dateTime={featuredArticle.publishedAt}>
                        {new Date(featuredArticle.publishedAt).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </time>
                    </div>
                  </div>
                  <div className="bg-gray-200 aspect-[4/3] rounded"></div>
                </div>
              </Link>
            </div>
          )}

          {/* Articles Grid */}
          <div>
            <h2 className="text-3xl font-bold font-serif mb-8 border-b-2 border-gray-300 pb-3">
              Latest {section.name} News
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {otherArticles.map((article) => (
                <article key={article.slug} className="border-b border-gray-200 pb-6">
                  <Link href={`/blog/${article.slug}`} className="group">
                    <h3 className="text-2xl font-bold font-serif mb-3 group-hover:text-dc2626 transition-colors leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex flex-col gap-1 text-sm text-gray-600">
                      <span className="font-medium">By {article.author}</span>
                      <time dateTime={article.publishedAt}>
                        {new Date(article.publishedAt).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </time>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>

          {/* Browse Other Sections */}
          <div className="mt-16 pt-12 border-t-2 border-black">
            <h2 className="text-2xl font-bold font-serif mb-6 text-center">
              Explore Other Sections
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {Object.entries(sectionInfo).map(([slug, info]) => (
                slug !== params.section && (
                  <Link
                    key={slug}
                    href={`/sections/${slug}`}
                    className="px-5 py-2 bg-gray-100 text-black font-bold uppercase text-sm hover:bg-black hover:text-white transition-colors"
                  >
                    {info.name}
                  </Link>
                )
              ))}
            </div>
            <div className="text-center mt-6">
              <Link href="/blog" className="text-dc2626 font-medium hover:underline">
                View All News →
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
