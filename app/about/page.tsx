import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-black text-white py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl font-bold font-serif mb-4">About The Daily Chronicle</h1>
            <p className="text-xl text-gray-300">
              A tradition of journalistic excellence since 1952
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Mission Statement */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold font-serif mb-6 border-b-2 border-dc2626 pb-2">
              Our Mission
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed text-gray-800 mb-6 border-l-4 border-dc2626 pl-6 italic">
                "To deliver accurate, unbiased news and thoughtful analysis that empowers our readers
                to understand the world and make informed decisions."
              </p>
              <p className="text-gray-700 leading-relaxed">
                For over seven decades, The Daily Chronicle has been committed to the highest
                standards of journalism. We believe that a well-informed public is essential to a
                functioning democracy, and we take our responsibility to serve that public seriously.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our newsroom operates independently, free from political or commercial influence.
                We report the facts, provide context, and let our readers draw their own conclusions.
              </p>
            </div>
          </section>

          {/* History */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold font-serif mb-6 border-b-2 border-dc2626 pb-2">
              Our History
            </h2>
            <div className="space-y-8">
              <div className="border-l-4 border-black pl-6">
                <h3 className="text-xl font-bold mb-2">1952: The Beginning</h3>
                <p className="text-gray-700 leading-relaxed">
                  Founded by journalist Margaret Hayes and publisher Robert Chen, The Daily Chronicle
                  began as a small local newspaper committed to thorough, honest reporting. From day
                  one, our founders established the editorial independence that remains our hallmark.
                </p>
              </div>

              <div className="border-l-4 border-black pl-6">
                <h3 className="text-xl font-bold mb-2">1970s-1980s: Investigative Excellence</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our investigative team earned national recognition for uncovering corruption and
                  holding power accountable. Multiple Pulitzer Prizes recognized the courage and
                  dedication of our journalists during this transformative period.
                </p>
              </div>

              <div className="border-l-4 border-black pl-6">
                <h3 className="text-xl font-bold mb-2">1990s-2000s: Digital Transformation</h3>
                <p className="text-gray-700 leading-relaxed">
                  As the media landscape evolved, we embraced digital platforms while maintaining
                  our commitment to quality journalism. We were among the first publications to
                  establish a robust online presence without compromising editorial standards.
                </p>
              </div>

              <div className="border-l-4 border-black pl-6">
                <h3 className="text-xl font-bold mb-2">Today: Multi-Platform Excellence</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Daily Chronicle now reaches millions of readers across print, web, mobile,
                  and social platforms. Our newsroom has expanded to cover global events while
                  maintaining the local focus that built our reputation.
                </p>
              </div>
            </div>
          </section>

          {/* Editorial Standards */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold font-serif mb-6 border-b-2 border-dc2626 pb-2">
              Editorial Standards
            </h2>
            <div className="bg-gray-50 border-l-4 border-dc2626 p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">Our Core Principles</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="font-bold mr-2 text-dc2626">•</span>
                  <span><strong>Accuracy:</strong> We verify facts rigorously and correct errors promptly and transparently.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2 text-dc2626">•</span>
                  <span><strong>Independence:</strong> Our journalism is free from political, commercial, or personal bias.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2 text-dc2626">•</span>
                  <span><strong>Fairness:</strong> We present multiple perspectives and give subjects of criticism the opportunity to respond.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2 text-dc2626">•</span>
                  <span><strong>Transparency:</strong> We clearly distinguish news from opinion and disclose potential conflicts of interest.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2 text-dc2626">•</span>
                  <span><strong>Accountability:</strong> We hold ourselves to the same standards we apply to others.</span>
                </li>
              </ul>
            </div>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-bold mb-3">Corrections Policy</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                When we make mistakes, we correct them quickly and clearly. Significant corrections
                are published prominently, and we maintain a public corrections log. We welcome
                reader feedback and take all concerns seriously.
              </p>

              <h3 className="text-xl font-bold mb-3">Anonymous Sources</h3>
              <p className="text-gray-700 leading-relaxed">
                We use anonymous sources only when the information is newsworthy and cannot be
                obtained on the record. Multiple editors must approve such usage, and we always
                explain to readers why anonymity was granted.
              </p>
            </div>
          </section>

          {/* Leadership */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold font-serif mb-6 border-b-2 border-dc2626 pb-2">
              Leadership
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-gray-200 p-6">
                <h3 className="text-xl font-bold mb-2">Elizabeth Morrison</h3>
                <p className="text-dc2626 font-medium mb-3">Editor-in-Chief</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  With over 30 years of journalism experience, Elizabeth leads our editorial
                  strategy and upholds our commitment to excellence in reporting.
                </p>
              </div>

              <div className="border border-gray-200 p-6">
                <h3 className="text-xl font-bold mb-2">David Park</h3>
                <p className="text-dc2626 font-medium mb-3">Managing Editor</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  David oversees daily operations and coordinates coverage across our
                  expanding network of correspondents and contributors.
                </p>
              </div>

              <div className="border border-gray-200 p-6">
                <h3 className="text-xl font-bold mb-2">Dr. Sarah Williams</h3>
                <p className="text-dc2626 font-medium mb-3">Standards Editor</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Sarah ensures all content meets our rigorous editorial standards and
                  leads our fact-checking and verification processes.
                </p>
              </div>

              <div className="border border-gray-200 p-6">
                <h3 className="text-xl font-bold mb-2">Marcus Chen</h3>
                <p className="text-dc2626 font-medium mb-3">Digital Director</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Marcus guides our digital strategy, ensuring we reach readers on the
                  platforms they prefer while maintaining journalistic integrity.
                </p>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="bg-black text-white p-8 text-center">
            <h2 className="text-3xl font-bold font-serif mb-4">Get in Touch</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We value reader feedback and welcome tips, story ideas, and questions
              about our coverage.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-dc2626 text-white font-bold uppercase hover:bg-red-700 transition-colors"
            >
              Contact Us
            </Link>
          </section>

          {/* Awards & Recognition */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold font-serif mb-6 border-b-2 border-dc2626 pb-2">
              Awards & Recognition
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="border border-gray-200 p-6">
                <div className="text-4xl font-bold text-dc2626 mb-2">12</div>
                <div className="text-sm font-medium uppercase text-gray-600">Pulitzer Prizes</div>
              </div>
              <div className="border border-gray-200 p-6">
                <div className="text-4xl font-bold text-dc2626 mb-2">47</div>
                <div className="text-sm font-medium uppercase text-gray-600">National Journalism Awards</div>
              </div>
              <div className="border border-gray-200 p-6">
                <div className="text-4xl font-bold text-dc2626 mb-2">70+</div>
                <div className="text-sm font-medium uppercase text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
