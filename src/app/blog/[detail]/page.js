import React from "react";

const Detail = async ({ params }) => {
  const { detail } = params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${detail}`
  );
  const blog = await res.json();
  console.log(blog);
  return (
    <div className="flex items-center justify-center translate-y-1/2">
      <div className="py-10 p-6 font-serif border max-w-xl rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Blog Details</h1>
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold mb-2 capitalize flex-1">{blog.title}</h2>
          <p className="bg-gray-200 px-3 py-1 rounded-full w-24">👤 id : {blog.userId}</p>
        </div>
        <p>{blog.body}</p>
      </div>
    </div>
  );
};

export default Detail;
