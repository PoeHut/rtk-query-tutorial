import { useFetchPostByIdQuery } from "features/post/postSlice";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetchPostByIdQuery(id);

  if (isLoading) return <div>Loading ...</div>;

  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <h3 className="font-semibold text-xl mt-5">{data?.title}</h3>
      <p>{data?.body}</p>
    </div>
  );
};

export default PostDetail;
