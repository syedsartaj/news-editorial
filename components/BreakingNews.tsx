export default function BreakingNews() {
  const breakingNews = [
    "Senate passes landmark infrastructure bill with bipartisan support",
    "Global markets rally following Fed announcement on interest rates",
    "Scientists announce breakthrough in renewable energy technology",
    "International summit addresses climate change policies",
    "Major tech companies commit to carbon neutrality by 2030"
  ];

  return (
    <div className="bg-red-600 text-white overflow-hidden">
      <div className="flex items-center">
        <div className="bg-black px-6 py-2 font-bold uppercase tracking-wide text-sm whitespace-nowrap breaking-flash">
          Breaking News
        </div>
        <div className="flex-1 py-2 overflow-hidden">
          <div className="breaking-news-ticker whitespace-nowrap">
            {breakingNews.map((news, index) => (
              <span key={index} className="inline-block mx-8">
                <span className="font-bold">•</span>
                <span className="ml-3 text-sm">{news}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
