import React from 'react';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
}

export const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "10 SEO Strategies That Will Boost Your Rankings in 2025",
      excerpt: "Discover the latest SEO techniques that are driving results in the ever-changing search landscape.",
      category: "SEO",
      image: "https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "May 15, 2025",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "How to Build a Content Strategy That Converts",
      excerpt: "Learn how to create content that not only attracts visitors but turns them into customers.",
      category: "Content Marketing",
      image: "https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "May 3, 2025",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "The Ultimate Guide to Social Media Advertising in 2025",
      excerpt: "Stay ahead of the curve with the latest social media advertising trends and best practices.",
      category: "Social Media",
      image: "https://images.pexels.com/photos/5313130/pexels-photo-5313130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "April 28, 2025",
      readTime: "10 min read"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest from Our Blog</h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Insights, strategies, and industry trends to keep you informed
            </p>
          </div>
          <a href="#blog" className="mt-4 md:mt-0 text-blue-600 hover:text-blue-800 font-medium flex items-center transition-colors">
            View all articles <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <a href={`#blog-post-${post.id}`} className="block">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-0 left-0 m-4">
                    <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <span className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                    Read more →
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#subscribe" 
            className="inline-flex items-center bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
          >
            Subscribe to Our Newsletter
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};