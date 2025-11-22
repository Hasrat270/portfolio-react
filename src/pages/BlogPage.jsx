import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllBlogPosts, getBlogPostsByCategory, getBlogCategories } from '../data/blogPosts';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = getBlogCategories();
  const posts = getBlogPostsByCategory(selectedCategory);

  return (
    <>
      <section className="min-h-[400px] bg-[url(/img/banner/common-banner.jpg)] bg-cover relative z-10">
        <div className="relative overflow-hidden w-full min-h-[400px] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-dark text-[60px] md:text-[60px] sm:text-[40px] font-bold mb-5 capitalize">
              Blog
            </h1>
            <div className="inline-block border-2 border-dark rounded-full px-5 leading-[46px]">
              <Link to="/" className="text-sm text-dark font-roboto mr-3.5 relative">
                Home
                <span className="absolute h-full w-px right-[-10px] top-1/2 bg-dark -translate-y-1/2"></span>
              </Link>
              <span className="text-sm text-dark font-roboto">Blog</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 gap-8">
                {posts.map((post) => (
                  <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray">
                        <span className="bg-secondary px-3 py-1 rounded-full text-dark font-medium">{post.category}</span>
                        <span>{post.date}</span>
                        <span>{post.views} views</span>
                        <span>{post.comments} comments</span>
                      </div>
                      <Link to={`/blog-details?id=${post.id}`}>
                        <h3 className="text-2xl font-bold text-dark mb-3 hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-gray leading-relaxed mb-4">{post.excerpt}</p>
                      <Link
                        to={`/blog-details?id=${post.id}`}
                        className="inline-block bg-[#f9f9ff] border border-[#eeeeee] px-8 py-2 text-xs font-medium text-dark hover:bg-primary hover:text-white hover:border-primary transition-all"
                      >
                        Read More
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                <h4 className="text-xl font-bold text-dark mb-4">Categories</h4>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-4 py-2 rounded transition-all ${
                          selectedCategory === category
                            ? 'bg-primary text-white'
                            : 'bg-gray/10 text-gray hover:bg-secondary'
                        }`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-dark mb-4">Popular Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'MongoDB', 'Express', 'MERN', 'JavaScript', 'API', 'Frontend', 'Backend'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray/10 text-gray text-sm rounded hover:bg-secondary hover:text-dark transition-all cursor-pointer">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;