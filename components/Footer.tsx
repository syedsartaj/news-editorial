export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'News',
      links: ['World', 'U.S.', 'Politics', 'Business', 'Technology', 'Science']
    },
    {
      title: 'Opinion',
      links: ['Editorials', 'Op-Ed', 'Letters', 'Columnists']
    },
    {
      title: 'Life & Arts',
      links: ['Arts', 'Books', 'Food', 'Travel', 'Magazine']
    },
    {
      title: 'More',
      links: ['Sports', 'Health', 'Education', 'Weather', 'Obituaries']
    },
    {
      title: 'Subscribe',
      links: ['Digital Access', 'Print Edition', 'Gift Subscriptions', 'Corporate']
    }
  ];

  return (
    <footer className="bg-black text-white border-t-4 border-red-600">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-baskerville text-lg font-bold mb-4 border-b border-gray-700 pb-2">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-400 hover:text-red-600 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newspaper Branding */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="text-center">
            <h2 className="font-baskerville text-4xl font-bold mb-2">THE HERALD</h2>
            <p className="text-gray-400 text-sm uppercase tracking-widest">
              Established 1892 • Independent Journalism
            </p>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-wrap justify-center gap-4 mb-6 text-xs">
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors uppercase">
              Contact Us
            </a>
            <span className="text-gray-700">|</span>
            <a href="#work" className="text-gray-400 hover:text-white transition-colors uppercase">
              Work With Us
            </a>
            <span className="text-gray-700">|</span>
            <a href="#advertise" className="text-gray-400 hover:text-white transition-colors uppercase">
              Advertise
            </a>
            <span className="text-gray-700">|</span>
            <a href="#brand" className="text-gray-400 hover:text-white transition-colors uppercase">
              Your Ad Choices
            </a>
            <span className="text-gray-700">|</span>
            <a href="#privacy" className="text-gray-400 hover:text-white transition-colors uppercase">
              Privacy Policy
            </a>
            <span className="text-gray-700">|</span>
            <a href="#terms" className="text-gray-400 hover:text-white transition-colors uppercase">
              Terms of Service
            </a>
            <span className="text-gray-700">|</span>
            <a href="#sitemap" className="text-gray-400 hover:text-white transition-colors uppercase">
              Site Map
            </a>
          </div>

          <div className="text-center text-xs text-gray-500">
            <p className="mb-2">
              &copy; {currentYear} The Herald. All rights reserved.
            </p>
            <p className="text-gray-600">
              The Herald is a registered trademark. Reproduction of material from any Herald pages without written permission is strictly prohibited.
            </p>
          </div>
        </div>
      </div>

      {/* Extra Footer Bar */}
      <div className="border-t border-gray-900 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 py-3 text-center text-xs text-gray-600">
          Built with Next.js • Powered by MongoDB & OpenAI
        </div>
      </div>
    </footer>
  );
}
