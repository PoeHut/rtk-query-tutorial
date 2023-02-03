import { useAddPostMutation } from "features/post/postSlice";
import React, { useState } from "react";

const Posts = () => {
  const [post, setPost] = useState({
    userId: 1,
    title: "",
    body: "",
  });
  const [addPost, { isLoading, isError, isSuccess }] = useAddPostMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ ...post });
  };

  return (
    <div className="grid justify-items-center mt-10">
      <h3 className="text-3xl font-serif font-semibold mb-5">Create Post</h3>
      <form className="w-1/2" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="text-xl font-bold">Title</label>
          <input
            type="text"
            value={post.title}
            className="border border-gray-500 rounded-md p-2 mt-2 block w-full"
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
        </div>

        <div className="mb-5">
          <lable className="text-xl font-bold">Body</lable>
          <textarea
            className="border border-gray-500 rounded-md p-2 mt-2 block w-full"
            value={post.body}
            onChange={(e) => setPost({ ...post, body: e.target.value })}
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-red-400 text-white py-2 px-4 rounded-md"
            //disabled={isLoading ? "true" : "false"}
          >
            {isLoading ? "Submitting... " : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Posts;
