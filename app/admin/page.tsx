'use client';

import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Search, Newspaper, Eye, X, Save, Image } from 'lucide-react';

interface Author {
  name: string;
  avatar: string;
  role: string;
}

interface Article {
  _id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'politics' | 'business' | 'technology' | 'sports' | 'entertainment' | 'health' | 'science' | 'world';
  featuredImage: string;
  author: Author;
  publishedAt: string;
  isBreaking: boolean;
  isFeatured: boolean;
  published: boolean;
  tags: string[];
  sources: string[];
}

interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error';
}

const CATEGORIES = ['politics', 'business', 'technology', 'sports', 'entertainment', 'health', 'science', 'world'] as const;

export default function AdminDashboard() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [showForm, setShowForm] = useState(false);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'politics' as Article['category'],
    featuredImage: '',
    author: {
      name: '',
      avatar: '',
      role: ''
    },
    publishedAt: new Date().toISOString().split('T')[0],
    isBreaking: false,
    isFeatured: false,
    published: false,
    tags: '',
    sources: ''
  });

  useEffect(() => {
    fetchArticles();
  }, []);

  useEffect(() => {
    filterArticles();
  }, [searchTerm, categoryFilter, articles]);

  const fetchArticles = async () => {
    try {
      const response = await fetch('/api/articles');
      const data = await response.json();

      if (data.success) {
        setArticles(data.data || []);
      }
    } catch (error) {
      console.error('Error fetching articles:', error);
      showToast('Failed to fetch articles', 'error');
    } finally {
      setLoading(false);
    }
  };

  const filterArticles = () => {
    let filtered = articles;

    if (searchTerm) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.author.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (categoryFilter !== 'all') {
      filtered = filtered.filter(article => article.category === categoryFilter);
    }

    setFilteredArticles(filtered);
  };

  const showToast = (message: string, type: 'success' | 'error') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 5000);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      category: 'politics',
      featuredImage: '',
      author: {
        name: '',
        avatar: '',
        role: ''
      },
      publishedAt: new Date().toISOString().split('T')[0],
      isBreaking: false,
      isFeatured: false,
      published: false,
      tags: '',
      sources: ''
    });
    setEditingArticle(null);
    setShowForm(false);
  };

  const handleCreate = () => {
    resetForm();
    setShowForm(true);
  };

  const handleEdit = (article: Article) => {
    setEditingArticle(article);
    setFormData({
      title: article.title,
      excerpt: article.excerpt,
      content: article.content,
      category: article.category,
      featuredImage: article.featuredImage,
      author: article.author,
      publishedAt: article.publishedAt.split('T')[0],
      isBreaking: article.isBreaking,
      isFeatured: article.isFeatured,
      published: article.published,
      tags: article.tags.join(', '),
      sources: article.sources.join(', ')
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) {
      return;
    }

    try {
      const response = await fetch(`/api/articles/${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (data.success) {
        showToast('Article deleted successfully', 'success');
        fetchArticles();
      } else {
        showToast('Failed to delete article', 'error');
      }
    } catch (error) {
      console.error('Error deleting article:', error);
      showToast('Error deleting article', 'error');
    }
  };

  const handleDeleteAll = async () => {
    if (!confirm('Are you sure you want to delete ALL articles? This action cannot be undone!')) {
      return;
    }

    try {
      const deletePromises = articles.map(article =>
        fetch(`/api/articles/${article._id}`, { method: 'DELETE' })
      );

      await Promise.all(deletePromises);
      showToast('All articles deleted successfully', 'success');
      fetchArticles();
    } catch (error) {
      console.error('Error deleting all articles:', error);
      showToast('Error deleting articles', 'error');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const articleData = {
      title: formData.title,
      excerpt: formData.excerpt,
      content: formData.content,
      category: formData.category,
      featuredImage: formData.featuredImage,
      author: formData.author,
      publishedAt: formData.publishedAt,
      isBreaking: formData.isBreaking,
      isFeatured: formData.isFeatured,
      published: formData.published,
      tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean),
      sources: formData.sources.split(',').map(s => s.trim()).filter(Boolean)
    };

    try {
      const url = editingArticle
        ? `/api/articles/${editingArticle._id}`
        : '/api/articles';

      const method = editingArticle ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(articleData),
      });

      const data = await response.json();

      if (data.success) {
        showToast(
          editingArticle ? 'Article updated successfully' : 'Article created successfully',
          'success'
        );
        resetForm();
        fetchArticles();
      } else {
        showToast(data.error || 'Failed to save article', 'error');
      }
    } catch (error) {
      console.error('Error saving article:', error);
      showToast('Error saving article', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const calculateStats = () => {
    const total = articles.length;
    const published = articles.filter(a => a.published).length;
    const draft = articles.filter(a => !a.published).length;
    const featured = articles.filter(a => a.isFeatured).length;
    const breaking = articles.filter(a => a.isBreaking).length;

    const categoryStats: Record<string, { total: number; published: number; draft: number }> = {};
    CATEGORIES.forEach(cat => {
      const categoryArticles = articles.filter(a => a.category === cat);
      categoryStats[cat] = {
        total: categoryArticles.length,
        published: categoryArticles.filter(a => a.published).length,
        draft: categoryArticles.filter(a => !a.published).length,
      };
    });

    return { total, published, draft, featured, breaking, categoryStats };
  };

  const stats = calculateStats();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-white text-xl flex items-center gap-2">
          <Newspaper className="w-6 h-6 animate-pulse" />
          Loading Dashboard...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Toast Notifications */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {toasts.map(toast => (
          <div
            key={toast.id}
            className={`px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 min-w-[300px] ${
              toast.type === 'success'
                ? 'bg-green-600 text-white'
                : 'bg-red-600 text-white'
            }`}
          >
            <span className="flex-1">{toast.message}</span>
            <button
              onClick={() => setToasts(prev => prev.filter(t => t.id !== toast.id))}
              className="hover:opacity-80"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Header */}
      <div className="bg-gray-900 border-b border-red-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                <Newspaper className="w-8 h-8 text-red-500" />
                News Editorial Dashboard
              </h1>
              <p className="text-gray-400 mt-1">Centralized article management system</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Actions Section */}
        <div className="bg-gray-900 border border-red-900/30 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-red-500">Actions</h2>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleCreate}
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Create Post
            </button>
            <button
              onClick={() => {
                if (articles.length > 0) {
                  handleEdit(articles[0]);
                } else {
                  showToast('No articles to edit', 'error');
                }
              }}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
            >
              <Edit className="w-5 h-5" />
              Edit Blog
            </button>
            <button
              onClick={handleDeleteAll}
              className="px-6 py-3 bg-red-800 hover:bg-red-900 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
            >
              <Trash2 className="w-5 h-5" />
              Delete Blog
            </button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <div className="bg-gray-900 border border-red-900/30 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm font-medium">Total Articles</p>
                <p className="text-3xl font-bold mt-2 text-red-500">{stats.total}</p>
              </div>
              <Newspaper className="w-8 h-8 text-red-500/50" />
            </div>
          </div>

          <div className="bg-gray-900 border border-red-900/30 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm font-medium">Published</p>
                <p className="text-3xl font-bold mt-2 text-green-500">{stats.published}</p>
              </div>
              <Eye className="w-8 h-8 text-green-500/50" />
            </div>
          </div>

          <div className="bg-gray-900 border border-red-900/30 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm font-medium">Drafts</p>
                <p className="text-3xl font-bold mt-2 text-yellow-500">{stats.draft}</p>
              </div>
              <Edit className="w-8 h-8 text-yellow-500/50" />
            </div>
          </div>

          <div className="bg-gray-900 border border-red-900/30 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm font-medium">Featured</p>
                <p className="text-3xl font-bold mt-2 text-blue-500">{stats.featured}</p>
              </div>
              <Image className="w-8 h-8 text-blue-500/50" />
            </div>
          </div>

          <div className="bg-gray-900 border border-red-900/30 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm font-medium">Breaking</p>
                <p className="text-3xl font-bold mt-2 text-red-500">{stats.breaking}</p>
              </div>
              <div className="w-8 h-8 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
            </div>
          </div>
        </div>

        {/* Category Stats */}
        <div className="bg-gray-900 border border-red-900/30 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-red-500">Category Breakdown</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {CATEGORIES.map(category => (
              <div key={category} className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                <p className="text-xs text-gray-400 uppercase font-semibold mb-2">{category}</p>
                <div className="space-y-1">
                  <p className="text-sm text-gray-300">
                    Total: <span className="font-bold text-white">{stats.categoryStats[category].total}</span>
                  </p>
                  <p className="text-sm text-gray-300">
                    Published: <span className="font-bold text-green-500">{stats.categoryStats[category].published}</span>
                  </p>
                  <p className="text-sm text-gray-300">
                    Draft: <span className="font-bold text-yellow-500">{stats.categoryStats[category].draft}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Create/Edit Form */}
        {showForm && (
          <div className="bg-gray-900 border border-red-900/30 rounded-lg p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-red-500">
                {editingArticle ? 'Edit Article' : 'Create New Article'}
              </h2>
              <button
                onClick={resetForm}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500"
                    placeholder="Enter article title"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Excerpt *
                  </label>
                  <textarea
                    required
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500"
                    rows={3}
                    placeholder="Brief summary of the article"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Content *
                  </label>
                  <textarea
                    required
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500"
                    rows={8}
                    placeholder="Full article content"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Category *
                  </label>
                  <select
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value as Article['category'] })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500"
                  >
                    {CATEGORIES.map(cat => (
                      <option key={cat} value={cat}>
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Featured Image URL
                  </label>
                  <input
                    type="url"
                    value={formData.featuredImage}
                    onChange={(e) => setFormData({ ...formData, featuredImage: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Author Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.author.name}
                    onChange={(e) => setFormData({
                      ...formData,
                      author: { ...formData.author, name: e.target.value }
                    })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Author Avatar URL
                  </label>
                  <input
                    type="url"
                    value={formData.author.avatar}
                    onChange={(e) => setFormData({
                      ...formData,
                      author: { ...formData.author, avatar: e.target.value }
                    })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500"
                    placeholder="https://example.com/avatar.jpg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Author Role
                  </label>
                  <input
                    type="text"
                    value={formData.author.role}
                    onChange={(e) => setFormData({
                      ...formData,
                      author: { ...formData.author, role: e.target.value }
                    })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500"
                    placeholder="Senior Reporter"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Published Date
                  </label>
                  <input
                    type="date"
                    value={formData.publishedAt}
                    onChange={(e) => setFormData({ ...formData, publishedAt: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Tags (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={formData.tags}
                    onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500"
                    placeholder="breaking news, politics, election"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Sources (comma-separated URLs)
                  </label>
                  <input
                    type="text"
                    value={formData.sources}
                    onChange={(e) => setFormData({ ...formData, sources: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500"
                    placeholder="https://source1.com, https://source2.com"
                  />
                </div>

                <div className="md:col-span-2 flex flex-wrap gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.published}
                      onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                      className="w-5 h-5 bg-gray-800 border border-gray-700 rounded focus:ring-red-500"
                    />
                    <span className="text-sm font-medium text-gray-300">Published</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.isFeatured}
                      onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                      className="w-5 h-5 bg-gray-800 border border-gray-700 rounded focus:ring-red-500"
                    />
                    <span className="text-sm font-medium text-gray-300">Featured</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.isBreaking}
                      onChange={(e) => setFormData({ ...formData, isBreaking: e.target.checked })}
                      className="w-5 h-5 bg-gray-800 border border-gray-700 rounded focus:ring-red-500"
                    />
                    <span className="text-sm font-medium text-gray-300">Breaking News</span>
                  </label>
                </div>
              </div>

              <div className="flex gap-4 pt-4 border-t border-gray-700">
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Save className="w-5 h-5" />
                  {submitting ? 'Saving...' : editingArticle ? 'Update Article' : 'Create Article'}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Search and Filter */}
        <div className="bg-gray-900 border border-red-900/30 rounded-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles by title, author, or excerpt..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500"
              />
            </div>
            <div className="w-full md:w-64">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500"
              >
                <option value="all">All Categories</option>
                {CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Articles List */}
        <div className="bg-gray-900 border border-red-900/30 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-800 border-b border-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Article
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Author
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Published
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {filteredArticles.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center">
                      <div className="flex flex-col items-center gap-2 text-gray-400">
                        <Newspaper className="w-12 h-12 opacity-50" />
                        <p className="text-lg">No articles found</p>
                        <button
                          onClick={handleCreate}
                          className="mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors"
                        >
                          Create your first article
                        </button>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredArticles.map((article) => (
                    <tr key={article._id} className="hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-start gap-3">
                          {article.featuredImage && (
                            <img
                              src={article.featuredImage}
                              alt={article.title}
                              className="w-16 h-16 object-cover rounded"
                            />
                          )}
                          <div>
                            <div className="text-sm font-medium text-white mb-1">
                              {article.title}
                            </div>
                            <div className="text-xs text-gray-400 line-clamp-2">
                              {article.excerpt}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-red-500/20 text-red-400 border border-red-500/30">
                          {article.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          {article.author.avatar && (
                            <img
                              src={article.author.avatar}
                              alt={article.author.name}
                              className="w-8 h-8 rounded-full"
                            />
                          )}
                          <div>
                            <div className="text-sm text-white">{article.author.name}</div>
                            {article.author.role && (
                              <div className="text-xs text-gray-400">{article.author.role}</div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        {new Date(article.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-2">
                          {article.published ? (
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                              Published
                            </span>
                          ) : (
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                              Draft
                            </span>
                          )}
                          {article.isFeatured && (
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                              Featured
                            </span>
                          )}
                          {article.isBreaking && (
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-500/20 text-red-400 border border-red-500/30">
                              Breaking
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2 justify-end">
                          <button
                            onClick={() => handleEdit(article)}
                            className="p-2 text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 rounded-lg transition-colors"
                            title="Edit"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(article._id, article.title)}
                            className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Results count */}
        {filteredArticles.length > 0 && (
          <div className="mt-4 text-sm text-gray-400 flex items-center gap-2">
            <Search className="w-4 h-4" />
            Showing {filteredArticles.length} of {articles.length} articles
          </div>
        )}
      </div>
    </div>
  );
}
