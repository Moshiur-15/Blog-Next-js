import Link from "next/link";
import React from "react";

const Home = async () => {
  const res = await fetch(" https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return (
    <div className="py-10 px-5 md:px-8 xl:px-0 font-serif">
      <h2 className="font-bold text-xl md:text-2xl mb-2">All Blogs</h2>
      {data.map((blog) => (
        <div key={blog?.id} className="">
          <div className="flex items-center gap-2">
            <span className="font-semibold mb-2">{blog?.id}.</span>
            <h2 className="hover:underline hover:font-semibold capitalize">
              <Link href={`/blog/${blog.id}`}>{blog?.title}</Link>
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
