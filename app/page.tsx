import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreakingNews from "@/components/BreakingNews";
import BlogCard from "@/components/BlogCard";
import CategorySection from "@/components/CategorySection";

const featuredArticle = {
  id: "1",
  title: "Global Climate Summit Reaches Historic Agreement on Carbon Emissions",
  excerpt: "World leaders from 195 nations have signed a landmark treaty committing to unprecedented reductions in greenhouse gas emissions by 2030, marking a pivotal moment in the fight against climate change.",
  category: "World",
  author: "Sarah Mitchell",
  publishedAt: new Date("2024-12-14T08:00:00"),
  imageUrl: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1200&h=600&fit=crop",
};

const topStories = [
  {
    id: "2",
    title: "Stock Markets Rally as Federal Reserve Signals Rate Stability",
    excerpt: "Major indices surge following Federal Reserve Chairman's comments suggesting interest rates may hold steady through Q1 2025.",
    category: "Business",
    author: "Michael Chen",
    publishedAt: new Date("2024-12-14T07:30:00"),
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
  },
  {
    id: "3",
    title: "Revolutionary AI Technology Transforms Medical Diagnostics",
    excerpt: "New artificial intelligence system demonstrates 98% accuracy in detecting early-stage cancers, offering hope for millions worldwide.",
    category: "Technology",
    author: "Dr. Emily Rodriguez",
    publishedAt: new Date("2024-12-14T07:00:00"),
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
  },
  {
    id: "4",
    title: "Historic Peace Talks Begin Between Long-Standing Rivals",
    excerpt: "Diplomatic breakthrough sees leaders meeting face-to-face for the first time in decades, raising hopes for regional stability.",
    category: "Politics",
    author: "James Thompson",
    publishedAt: new Date("2024-12-14T06:30:00"),
    imageUrl: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop",
  },
];

const politicsNews = [
  {
    id: "5",
    title: "Senate Passes Bipartisan Infrastructure Bill with Overwhelming Support",
    excerpt: "The comprehensive $1.2 trillion package promises to modernize roads, bridges, and broadband networks across the nation.",
    category: "Politics",
    author: "Alexandra Foster",
    publishedAt: new Date("2024-12-14T05:00:00"),
  },
  {
    id: "6",
    title: "Supreme Court to Hear Landmark Case on Digital Privacy Rights",
    excerpt: "Legal experts say the decision could fundamentally reshape how tech companies handle user data in the digital age.",
    category: "Politics",
    author: "Robert Williams",
    publishedAt: new Date("2024-12-14T04:30:00"),
  },
];

const techNews = [
  {
    id: "7",
    title: "Tech Giant Unveils Quantum Computing Breakthrough",
    excerpt: "Scientists achieve 'quantum supremacy' with new processor that solves complex problems in seconds versus traditional computers.",
    category: "Technology",
    author: "Lisa Park",
    publishedAt: new Date("2024-12-14T04:00:00"),
  },
  {
    id: "8",
    title: "Electric Vehicle Sales Surpass Gas-Powered Cars for First Time",
    excerpt: "Industry milestone reflects shifting consumer preferences and aggressive climate policies worldwide.",
    category: "Technology",
    author: "David Kumar",
    publishedAt: new Date("2024-12-14T03:30:00"),
  },
];

const businessNews = [
  {
    id: "9",
    title: "Startup Valued at $10 Billion After Latest Funding Round",
    excerpt: "The fintech company's meteoric rise reflects growing investor appetite for digital payment solutions.",
    category: "Business",
    author: "Jennifer Adams",
    publishedAt: new Date("2024-12-14T03:00:00"),
  },
  {
    id: "10",
    title: "Oil Prices Drop Amid Increased Production Forecasts",
    excerpt: "Energy analysts predict sustained lower prices could benefit consumers but challenge renewable energy investments.",
    category: "Business",
    author: "Mark Sullivan",
    publishedAt: new Date("2024-12-14T02:30:00"),
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <BreakingNews />

      <main className="flex-grow">
        {/* Featured Story */}
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

        {/* Top Stories */}
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

        {/* Multi-Column Layout */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Politics Column */}
            <div>
              <CategorySection title="Politics" />
              <div className="space-y-6">
                {politicsNews.map((article) => (
                  <BlogCard key={article.id} article={article} compact />
                ))}
              </div>
            </div>

            {/* Technology Column */}
            <div>
              <CategorySection title="Technology" />
              <div className="space-y-6">
                {techNews.map((article) => (
                  <BlogCard key={article.id} article={article} compact />
                ))}
              </div>
            </div>

            {/* Business Column */}
            <div>
              <CategorySection title="Business" />
              <div className="space-y-6">
                {businessNews.map((article) => (
                  <BlogCard key={article.id} article={article} compact />
                ))}
              </div>
            </div>
          </div>
        </div>

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
