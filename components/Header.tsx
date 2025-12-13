export default function Header() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const navLinks = [
    { name: 'World', href: '#world' },
    { name: 'Politics', href: '#politics' },
    { name: 'Business', href: '#business' },
    { name: 'Technology', href: '#technology' },
    { name: 'Science', href: '#science' },
    { name: 'Health', href: '#health' },
    { name: 'Sports', href: '#sports' },
    { name: 'Opinion', href: '#opinion' },
  ];

  return (
    <header className="border-b-4 border-black bg-white">
      {/* Top Bar with Date and Quick Links */}
      <div className="border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-xs">
          <div className="text-gray-600 font-medium uppercase tracking-wide">
            {currentDate}
          </div>
          <div className="flex gap-4 text-gray-700">
            <a href="#subscribe" className="hover:text-red-600 transition-colors uppercase tracking-wide font-medium">
              Subscribe
            </a>
            <span className="text-gray-300">|</span>
            <a href="#login" className="hover:text-red-600 transition-colors uppercase tracking-wide font-medium">
              Sign In
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="text-center">
          <h1 className="font-baskerville text-6xl md:text-7xl font-bold tracking-tight">
            THE HERALD
          </h1>
          <p className="text-xs uppercase tracking-widest text-gray-600 mt-2 font-medium">
            All the News That Matters
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t-2 border-black bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center overflow-x-auto">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:bg-red-600 px-4 py-3 text-sm font-bold uppercase tracking-wide transition-colors whitespace-nowrap border-r border-gray-700 last:border-r-0"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Weather/Market Ticker */}
      <div className="border-t border-gray-300 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-2 flex gap-8 text-xs overflow-x-auto">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="font-bold text-gray-700">WEATHER:</span>
            <span className="text-gray-600">New York 52°F Partly Cloudy</span>
          </div>
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="font-bold text-gray-700">DOW:</span>
            <span className="text-green-600">+0.8% ▲</span>
          </div>
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="font-bold text-gray-700">S&P 500:</span>
            <span className="text-green-600">+1.2% ▲</span>
          </div>
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="font-bold text-gray-700">NASDAQ:</span>
            <span className="text-red-600">-0.3% ▼</span>
          </div>
        </div>
      </div>
    </header>
  );
}
