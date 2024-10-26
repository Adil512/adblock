// app/blog/page.js
export default function Blog() {
    // Sample blog posts data (you can replace with your own)
    const posts = [
      {
        id: 1,
        title: "Getting Started with Web Development",
        excerpt: "Learn the basics of web development including HTML, CSS, and JavaScript...",
        author: "John Doe",
        date: "October 26, 2024",
        category: "Development"
      },
      {
        id: 2,
        title: "The Future of AI Technology",
        excerpt: "Exploring the latest trends and innovations in artificial intelligence...",
        author: "Jane Smith",
        date: "October 25, 2024",
        category: "Technology"
      },
      {
        id: 3,
        title: "Design Principles for Beginners",
        excerpt: "Understanding the fundamental principles of good design and user experience...",
        author: "Mike Johnson",
        date: "October 24, 2024",
        category: "Design"
      }
    ];
  
    return (
      <div className="space-y-8">
        {/* Blog Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600">
            Discover our latest thoughts, ideas, and insights
          </p>
        </header>
  
        {/* Blog Categories */}
        <div className="flex gap-4 mb-8 flex-wrap">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
            All Posts
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300">
            Development
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300">
            Technology
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300">
            Design
          </button>
        </div>
  
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map(post => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {/* Post Image */}
              <div className="h-48 bg-gray-200"></div>
              
              <div className="p-6">
                {/* Category */}
                <span className="text-blue-500 text-sm font-semibold">
                  {post.category}
                </span>
                
                {/* Title */}
                <h2 className="text-2xl font-bold mt-2 mb-4">
                  {post.title}
                </h2>
                
                {/* Excerpt */}
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                
                {/* Author and Date */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
                
                {/* Read More Link */}
                <a 
                  href={`/blog/post/${post.id}`} 
                  className="inline-block mt-4 text-blue-500 hover:text-blue-600"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
  
        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-12">
          <button className="px-4 py-2 border rounded hover:bg-gray-50">Previous</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">1</button>
          <button className="px-4 py-2 border rounded hover:bg-gray-50">2</button>
          <button className="px-4 py-2 border rounded hover:bg-gray-50">3</button>
          <button className="px-4 py-2 border rounded hover:bg-gray-50">Next</button>
        </div>
      </div>
    )
  }