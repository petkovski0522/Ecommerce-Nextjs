import React, { useEffect, useState } from "react";

const RelatedBlogs: React.FC = () => {
  const [relatedBlogs, setRelatedBlogs] = useState<any[]>([]);

  useEffect(() => {

    const randomNo = Math.floor(Math.random() * 100); 
    fetch(`http://localhost:5001/blogs?_start=${randomNo}&_limit=3`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load related blogs");
        }
        return response.json();
      })
      .then((data) => {
        setRelatedBlogs(data);
      })
      .catch((error) => {
        console.error("Error fetching related blogs:", error);
      });
  }, []);

  return (
    <div>
      <h4 className="mtext-112 cl2 mb-3">Related Blogs</h4>

      <ul>
        {relatedBlogs.map((blog: any) => (
          <li key={blog.id} className="mb-4">
            <a className="wrao-pic-w">
              <img src={blog.img} alt={blog.title} className="img-fluid" />

              <div className="p-t-8 mt-1">
                <div className="stext-116 cl8 hov-cl1 trans-04 mb-3">{blog.title}</div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedBlogs;
