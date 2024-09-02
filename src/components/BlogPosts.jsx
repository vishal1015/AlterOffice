// BlogPosts.jsx
import React from "react";

const BlogPosts = () => {
  const posts = [
    {
      title: "Blog Post One",
      excerpt: "Excerpt of blog post one.",
      image: "https://example.com/blog1.jpg",
    },
    {
      title: "Blog Post Two",
      excerpt: "Excerpt of blog post two.",
      image: "https://example.com/blog2.jpg",
    },
    {
      title: "Blog Post Three",
      excerpt: "Excerpt of blog post three.",
      image: "https://example.com/blog3.jpg",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold">Latest News</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="p-6 border rounded-lg">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-2xl font-semibold mt-4">{post.title}</h3>
              <p className="mt-2">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
