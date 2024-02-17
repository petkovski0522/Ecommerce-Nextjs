import React, { useState, useEffect } from "react";
import BlogItem from "./BlogItem";

interface BlogData {
  id: string;
  title: string;
  author: string;
  date: string;
  category: string;
  excerpt: string;
  img: string;
}

const FeaturedBlogs: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogData[]>([]);

  useEffect(() => {
    
    fetch("http://localhost:5001/blogs/?_limit=3")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching featured blogs:", error));
  }, []);

  return (
    <section className="sec-blog bg0 p-t-60 p-b-90">
      <div className="container">
        <div className="p-b-66">
          <h3 className="ltext-105 cl5 txt-center respon1">Our Blogs</h3>
        </div>

        <div className="row">
          {blogs.map((blog) => (
            <div key={blog.id} className="col-sm-6 col-md-4 p-b-40">
              <BlogItem blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;
