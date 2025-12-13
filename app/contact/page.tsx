'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    department: 'general',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-black text-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-5xl font-bold font-serif mb-4">Contact Us</h1>
            <p className="text-xl text-gray-300">
              We value your feedback, tips, and questions
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold font-serif mb-6 border-b-2 border-dc2626 pb-2">
                Send Us a Message
              </h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-700">
                  <p className="font-medium">Thank you for your message!</p>
                  <p className="text-sm">We'll respond as soon as possible.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold mb-2 uppercase">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold mb-2 uppercase">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="department" className="block text-sm font-bold mb-2 uppercase">
                    Department *
                  </label>
                  <select
                    id="department"
                    name="department"
                    required
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none transition-colors bg-white"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="newsroom">Newsroom / News Tips</option>
                    <option value="editorial">Editorial</option>
                    <option value="corrections">Corrections</option>
                    <option value="subscriptions">Subscriptions</option>
                    <option value="advertising">Advertising</option>
                    <option value="technical">Technical Support</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold mb-2 uppercase">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold mb-2 uppercase">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-black text-white font-bold uppercase hover:bg-dc2626 transition-colors"
                >
                  Send Message
                </button>

                <p className="text-sm text-gray-600">
                  * Required fields. We typically respond within 48 hours.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold font-serif mb-6 border-b-2 border-dc2626 pb-2">
                Contact Information
              </h2>

              {/* News Tips */}
              <div className="mb-8 pb-8 border-b border-gray-200">
                <h3 className="text-xl font-bold mb-3">News Tips</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Have a story tip or information you think we should know about?
                  Our newsroom is always looking for important stories.
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-bold">Email:</span>{' '}
                    <a href="mailto:tips@dailychronicle.com" className="text-dc2626 hover:underline">
                      tips@dailychronicle.com
                    </a>
                  </p>
                  <p>
                    <span className="font-bold">Secure Tips:</span>{' '}
                    <a href="#" className="text-dc2626 hover:underline">
                      SecureDrop Portal
                    </a>
                  </p>
                  <p>
                    <span className="font-bold">Phone:</span> (555) 123-NEWS
                  </p>
                </div>
              </div>

              {/* Editorial */}
              <div className="mb-8 pb-8 border-b border-gray-200">
                <h3 className="text-xl font-bold mb-3">Editorial Department</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Questions about our coverage or want to submit a letter to the editor?
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-bold">Email:</span>{' '}
                    <a href="mailto:editorial@dailychronicle.com" className="text-dc2626 hover:underline">
                      editorial@dailychronicle.com
                    </a>
                  </p>
                  <p>
                    <span className="font-bold">Letters:</span>{' '}
                    <a href="mailto:letters@dailychronicle.com" className="text-dc2626 hover:underline">
                      letters@dailychronicle.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Corrections */}
              <div className="mb-8 pb-8 border-b border-gray-200">
                <h3 className="text-xl font-bold mb-3">Corrections</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Found an error? We take accuracy seriously and correct mistakes promptly.
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-bold">Email:</span>{' '}
                    <a href="mailto:corrections@dailychronicle.com" className="text-dc2626 hover:underline">
                      corrections@dailychronicle.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Main Office */}
              <div className="mb-8 pb-8 border-b border-gray-200">
                <h3 className="text-xl font-bold mb-3">Main Office</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p className="font-bold">The Daily Chronicle</p>
                  <p>123 Press Avenue</p>
                  <p>Metropolitan City, ST 12345</p>
                  <p className="pt-2">
                    <span className="font-bold">Phone:</span> (555) 123-4567
                  </p>
                  <p>
                    <span className="font-bold">Fax:</span> (555) 123-4568
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3">Business Hours</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><span className="font-bold">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                  <p><span className="font-bold">Saturday:</span> 10:00 AM - 4:00 PM</p>
                  <p><span className="font-bold">Sunday:</span> Closed</p>
                  <p className="pt-2 text-xs italic">
                    Note: Our newsroom operates 24/7 for breaking news
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gray-50 p-6 border-l-4 border-black">
                <h3 className="text-xl font-bold mb-3">Follow Us</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Stay connected on social media for breaking news and updates
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="#" className="px-4 py-2 bg-black text-white text-sm font-bold hover:bg-dc2626 transition-colors">
                    Twitter
                  </a>
                  <a href="#" className="px-4 py-2 bg-black text-white text-sm font-bold hover:bg-dc2626 transition-colors">
                    Facebook
                  </a>
                  <a href="#" className="px-4 py-2 bg-black text-white text-sm font-bold hover:bg-dc2626 transition-colors">
                    Instagram
                  </a>
                  <a href="#" className="px-4 py-2 bg-black text-white text-sm font-bold hover:bg-dc2626 transition-colors">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="mt-16 pt-12 border-t-2 border-black">
            <h2 className="text-3xl font-bold font-serif mb-8 text-center">
              Additional Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-gray-200 p-6 text-center">
                <h3 className="text-lg font-bold mb-3">Advertising</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Interested in advertising with us?
                </p>
                <a
                  href="mailto:advertising@dailychronicle.com"
                  className="text-dc2626 font-medium hover:underline text-sm"
                >
                  advertising@dailychronicle.com
                </a>
              </div>

              <div className="border border-gray-200 p-6 text-center">
                <h3 className="text-lg font-bold mb-3">Subscriptions</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Questions about your subscription?
                </p>
                <a
                  href="mailto:subscriptions@dailychronicle.com"
                  className="text-dc2626 font-medium hover:underline text-sm"
                >
                  subscriptions@dailychronicle.com
                </a>
              </div>

              <div className="border border-gray-200 p-6 text-center">
                <h3 className="text-lg font-bold mb-3">Careers</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Join our team of journalists
                </p>
                <a
                  href="mailto:careers@dailychronicle.com"
                  className="text-dc2626 font-medium hover:underline text-sm"
                >
                  careers@dailychronicle.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
