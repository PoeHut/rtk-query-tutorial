import { useSelector } from "react-redux";
import {
  useDeletePostMutation,
  useFetchPostsQuery,
  useUpdatePostMutation,
  selectAll,
} from "features/post/postSlice";
import { Link } from "react-router-dom";

const Home = () => {
  // const { error, isLoading, refetch } = useFetchPostsQuery(null, {
  //   //pollingInterval: 3000,
  // });

  const allPosts = useSelector(selectAll);

  const [deletePost] = useDeletePostMutation();
  const [updatePost] = useUpdatePostMutation();

  //if (isLoading) return <div>Loading ...</div>;

  // if (error) return <div>{error.message}</div>;

  return (
    <div className="mt-10">
      <div>
        {/* <button
          className="bg-red-400 rounded-md p-2 mt-2 text-white"
          onClick={refetch}
        >
          Fetch Post
        </button> */}

        {allPosts?.map((post) => (
          <div
            key={post.id}
            className="border border-blue-900 p-4 my-4 rounded-md"
          >
            <h3 className="font-semibold text-xl">
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </h3>
            <p>{post?.body}</p>
            <p>
              <button
                onClick={() => deletePost(post.id)}
                className="text-red-700 mr-1 font-semibold"
              >
                Delete
              </button>
              |
              <button
                onClick={() =>
                  updatePost({
                    id: post.id,
                    userId: 2,
                    title: "Hello World",
                    body: "Testing...",
                  })
                }
                className="text-blue-700 ml-2 font-semibold"
              >
                Edit
              </button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
