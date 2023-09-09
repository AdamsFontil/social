const trendyNews = [
  {
    id: 1,
    headline: "New Smartphone Launch: Exciting Features Revealed",
    source: "Tech News",
    timestamp: "5 minutes ago",
  },
  {
    id: 2,
    headline: "Breaking: Major Scientific Discovery Announced",
    source: "Science Daily",
    timestamp: "15 minutes ago",
  },
  {
    id: 3,
    headline: "Sports Update: Championship Game Results",
    source: "Sports Network",
    timestamp: "30 minutes ago",
  },
  {
    id: 4,
    headline: "Entertainment News: Celebrities Spotted at Gala Event",
    source: "Entertainment Weekly",
    timestamp: "1 hour ago",
  },
  {
    id: 5,
    headline: "Finance Report: Stock Market Surges to New Highs",
    source: "Financial Times",
    timestamp: "2 hours ago",
  },
  {
    id: 6,
    headline: "Health and Wellness: Tips for a Healthy Lifestyle",
    source: "Health Magazine",
    timestamp: "3 hours ago",
  },
  // Add more news items here...
];

const TrendingContent = () => {
  return (
    <div className='flex flex-col gap-4'>{trendyNews.slice(0,4).map( news  => (
      <div className=' hover:bg-secondary p-4 w-full' key={news.id}>
        <div className='flex justify-between text-xs'>
          <div className='flex'>
            <p>{news.source} .</p>

            <p>{news.timestamp}</p>
          </div>
          <div>
            <p>...</p>
          </div>

        </div>

      <p className='text-md'>{news.headline}</p>
    </div>
    ))} </div>
  )
}


export default TrendingContent
