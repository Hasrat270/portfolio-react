import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getBlogPostById } from '../data/blogPosts';

const BlogDetails = () => {
  const [searchParams] = useSearchParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const id = searchParams.get('id');
    if (id) {
      const postData = getBlogPostById(id);
      setPost(postData);
    }
  }, [searchParams]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl text-gray">Blog post not found</p>
      </div>
    );
  }

  return (
    <>
      <section className="min-h-[400px] bg-[url(/img/banner/common-banner.jpg)] bg-cover relative z-10">
        <div className="relative overflow-hidden w-full min-h-[400px] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-dark text-[60px] md:text-[60px] sm:text-[40px] font-bold mb-5 capitalize">
              Blog Details
            </h1>
            <div className="inline-block border-2 border-dark rounded-full px-5 leading-[46px]">
              <Link to="/" className="text-sm text-dark font-roboto mr-3.5 relative">
                Home
                <span className="absolute h-full w-px right-[-10px] top-1/2 bg-dark -translate-y-1/2"></span>
              </Link>
              <Link to="/blog" className="text-sm text-dark font-roboto mr-3.5 relative">
                Blog
                <span className="absolute h-full w-px right-[-10px] top-1/2 bg-dark -translate-y-1/2"></span>
              </Link>
              <span className="text-sm text-dark font-roboto">Details</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src={post.image} alt={post.title} className="w-full h-96 object-cover" />
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6 text-sm text-gray">
                  <span className="bg-secondary px-4 py-2 rounded-full text-dark font-medium">{post.category}</span>
                  <span>{post.date}</span>
                  <span>{post.views} views</span>
                  <span>{post.comments} comments</span>
                </div>
                <h1 className="text-4xl font-bold text-dark mb-6">{post.title}</h1>
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-gray/10 text-gray text-sm rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div
                  className="prose max-w-none text-gray leading-relaxed blog-content"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                ></div>
              </div>
            </article>

            <div className="mt-12 text-center">
              <Link
                to="/blog"
                className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-dark transition-all"
              >
                ← Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;