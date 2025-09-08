import { useState } from "react";
import { Calendar, Clock, Share2, Bookmark, ChevronLeft, Tag } from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function ArticlePage({ params }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Sample article data
  const articleData = {
    title: "Exclusive: Behind the Scenes of the Most Spectacular MTV EMA Performance",
    subtitle: "How months of preparation led to one unforgettable night",
    content: [
      "The lights dimmed, the crowd fell silent, and then magic happened. What viewers saw was three minutes and forty-two seconds of pure artistry, but behind that performance were months of meticulous planning, countless rehearsals, and a team of over 50 professionals working around the clock.",
      
      "\"We knew we wanted to create something that had never been done before,\" says Maria Rodriguez, the show's creative director. \"The challenge was bringing together cutting-edge technology with raw musical talent in a way that felt authentic and powerful.\"",
      
      "The performance featured a 360-degree LED stage that transformed throughout the song, creating an immersive experience that transported viewers through different musical eras. The technical setup alone required three weeks of preparation, with engineers working 12-hour days to ensure every pixel was perfectly aligned.",
      
      "But perhaps the most impressive aspect wasn't the technology – it was the human element. The artist spent months in rehearsal, not just perfecting their vocal performance, but learning to work with the complex staging. \"Every step had to be precise,\" explains choreographer James Chen. \"One wrong move and the entire visual narrative could fall apart.\"",
      
      "The collaboration extended beyond the immediate team. Costume designers worked with LED specialists to create outfits that would interact with the stage lighting. Sound engineers developed a custom acoustic setup to ensure the vocals remained crystal clear despite the visual complexity.",
      
      "As the final notes rang out and the audience erupted in applause, months of preparation crystallized into a single, perfect moment. It's these behind-the-scenes stories that remind us why live music remains so powerful – it's not just about the final performance, but about the dedication, creativity, and passion that brings it to life."
    ],
    author: "Sarah Mitchell",
    publishDate: "November 18, 2024",
    readTime: "5 min read",
    category: "Behind the Scenes",
    tags: ["MTV EMA", "Performance", "Behind the Scenes", "Technology", "Music"],
    featuredImage: "article-hero.jpg"
  };

  const relatedArticles = [
    {
      id: 1,
      title: "The Evolution of MTV EMA Stage Design",
      excerpt: "From simple stages to immersive experiences...",
      date: "November 15, 2024",
      readTime: "3 min read"
    },
    {
      id: 2,
      title: "Interview: Artists Share Their EMA Memories",
      excerpt: "We spoke with past performers about their...",
      date: "November 12, 2024", 
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "The Technology Behind Modern Music Shows",
      excerpt: "How LED screens and AI are changing live...",
      date: "November 10, 2024",
      readTime: "4 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back Navigation */}
          <div className="mb-8">
            <button 
              onClick={() => window.history.back()}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ChevronLeft size={20} className="mr-1" />
              Back to News
            </button>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded">
                <Tag size={14} className="mr-1" />
                {articleData.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              {articleData.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {articleData.subtitle}
            </p>

            {/* Article Meta */}
            <div className="flex flex-col md:flex-row md:items-center justify-between py-6 border-t border-b border-gray-200">
              <div className="flex items-center space-x-6 mb-4 md:mb-0">
                <div className="flex items-center text-gray-600">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3 flex items-center justify-center">
                    <span className="font-medium text-sm">SM</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{articleData.author}</div>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {articleData.publishDate}
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {articleData.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3">
                <button 
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded transition-colors ${
                    isBookmarked 
                      ? 'bg-gray-900 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  <Bookmark size={16} className={isBookmarked ? 'fill-white' : ''} />
                  <span className="font-medium">
                    {isBookmarked ? 'Saved' : 'Save'}
                  </span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded transition-colors">
                  <Share2 size={16} />
                  <span className="font-medium">Share</span>
                </button>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12">
            <div className="aspect-video bg-gray-300 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🎭</div>
                  <div className="text-xl font-medium">Behind the Scenes</div>
                </div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            {articleData.content.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">
                {paragraph}
              </p>
            ))}
          </article>

          {/* Article Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {articleData.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((article) => (
                <article key={article.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                  {/* Article Thumbnail */}
                  <div className="aspect-video bg-gray-300">
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center group-hover:from-gray-400 group-hover:to-gray-600 transition-all">
                      <div className="text-center text-gray-700 group-hover:text-gray-600">
                        <div className="text-2xl mb-2">📰</div>
                        <div className="text-xs font-medium">Article</div>
                      </div>
                    </div>
                  </div>

                  {/* Article Info */}
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900 group-hover:text-gray-600 transition-colors mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}