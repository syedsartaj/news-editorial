interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: Date;
  imageUrl?: string;
}

interface BlogCardProps {
  article: Article;
  compact?: boolean;
}

export default function BlogCard({ article, compact = false }: BlogCardProps) {
  if (compact) {
    return (
      <article className="border-b border-gray-300 pb-4 last:border-b-0">
        <span className="inline-block bg-red-600 text-white text-xs font-bold px-2 py-1 mb-2 uppercase">
          {article.category}
        </span>
        <h3 className="font-baskerville text-lg font-bold mb-2 leading-tight hover:text-red-600 transition-colors cursor-pointer">
          {article.title}
        </h3>
        <p className="text-sm text-gray-700 mb-2 leading-relaxed">
          {article.excerpt}
        </p>
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <span className="font-semibold">{article.author}</span>
          <span>•</span>
          <time className="uppercase">
            {article.publishedAt.toLocaleString('en-US', {
              month: 'short',
              day: 'numeric',
              hour: 'numeric',
              minute: '2-digit'
            })}
          </time>
        </div>
      </article>
    );
  }

  return (
    <article className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      {article.imageUrl && (
        <div className="relative h-48 bg-gray-200 overflow-hidden">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 uppercase">
            {article.category}
          </span>
        </div>
      )}
      <div className="p-5">
        {!article.imageUrl && (
          <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 mb-3 uppercase">
            {article.category}
          </span>
        )}
        <h3 className="font-baskerville text-xl font-bold mb-3 leading-tight hover:text-red-600 transition-colors cursor-pointer">
          {article.title}
        </h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between pt-3 border-t border-gray-200">
          <span className="text-sm font-semibold text-gray-700">
            {article.author}
          </span>
          <time className="text-xs text-gray-500 uppercase tracking-wide">
            {article.publishedAt.toLocaleString('en-US', {
              month: 'short',
              day: 'numeric',
              hour: 'numeric',
              minute: '2-digit'
            })}
          </time>
        </div>
      </div>
    </article>
  );
}
