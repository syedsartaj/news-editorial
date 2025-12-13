import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const sections = [
  {
    name: 'Politics',
    slug: 'politics',
    description: 'Coverage of government, policy, elections, and political developments at local, national, and international levels.',
    icon: '⚖️',
    color: 'bg-blue-600'
  },
  {
    name: 'Business',
    slug: 'business',
    description: 'Market analysis, corporate news, economic trends, and financial reporting from Wall Street to Main Street.',
    icon: '💼',
    color: 'bg-green-600'
  },
  {
    name: 'Technology',
    slug: 'technology',
    description: 'Innovation, startups, cybersecurity, AI, and the latest developments shaping our digital future.',
    icon: '💻',
    color: 'bg-purple-600'
  },
  {
    name: 'Sports',
    slug: 'sports',
    description: 'Game coverage, athlete profiles, championships, and in-depth analysis of professional and amateur athletics.',
    icon: '⚽',
    color: 'bg-orange-600'
  },
  {
    name: 'Entertainment',
    slug: 'entertainment',
    description: 'Film, television, music, arts, culture, and celebrity news from Hollywood and beyond.',
    icon: '🎭',
    color: 'bg-pink-600'
  },
  {
    name: 'Opinion',
    slug: 'opinion',
    description: 'Editorials, op-eds, columns, and letters to the editor offering diverse perspectives on current events.',
    icon: '✍️',
    color: 'bg-yellow-600'
  }
];

export default function SectionsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-black text-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-5xl font-bold font-serif mb-4">News Sections</h1>
            <p className="text-xl text-gray-300">
              Explore our comprehensive coverage across all major news categories
            </p>
          </div>
        </div>

        {/* Sections Grid */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section) => (
              <Link
                key={section.slug}
                href={`/sections/${section.slug}`}
                className="group border-2 border-gray-200 hover:border-black transition-all duration-300"
              >
                <div className="p-8">
                  {/* Icon */}
                  <div className="text-5xl mb-4">{section.icon}</div>

                  {/* Section Name */}
                  <h2 className="text-3xl font-bold font-serif mb-3 group-hover:text-dc2626 transition-colors">
                    {section.name}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {section.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center text-dc2626 font-bold uppercase text-sm">
                    <span>Browse {section.name}</span>
                    <span className="ml-2 group-hover:ml-4 transition-all">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 pt-12 border-t-2 border-black">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold font-serif mb-4">
                  Comprehensive Coverage
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Each section is staffed by experienced journalists who specialize in their
                  respective fields. Our reporters bring deep expertise and extensive networks
                  to deliver the most important stories with context and clarity.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Whether you're interested in breaking political developments, market-moving
                  business news, cutting-edge technology, thrilling sports action, cultural
                  highlights, or thoughtful commentary, you'll find authoritative coverage here.
                </p>
              </div>

              <div className="bg-gray-50 p-6 border-l-4 border-dc2626">
                <h3 className="text-xl font-bold mb-4">Stay Informed</h3>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  Subscribe to section-specific newsletters to receive the latest updates
                  directly in your inbox. You can customize your news experience to focus
                  on the topics that matter most to you.
                </p>
                <button className="px-6 py-3 bg-black text-white font-bold uppercase text-sm hover:bg-dc2626 transition-colors w-full">
                  Manage Subscriptions
                </button>
              </div>
            </div>
          </div>

          {/* Browse All News */}
          <div className="mt-12 text-center bg-black text-white p-12">
            <h2 className="text-3xl font-bold font-serif mb-4">
              All the News in One Place
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Prefer to see everything together? Browse our complete news feed with
              articles from all sections in chronological order.
            </p>
            <Link
              href="/blog"
              className="inline-block px-8 py-3 bg-dc2626 text-white font-bold uppercase hover:bg-red-700 transition-colors"
            >
              View All News
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
