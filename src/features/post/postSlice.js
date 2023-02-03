import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "features/api/apiSlice";

const postsAdapter = createEntityAdapter({
  selectId: (post) => post.id,
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});

const initialState = postsAdapter.getInitialState();

export const postSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchPosts: builder.query({
      query: () => "/posts",

      transformResponse: (response) => {
        const results = postsAdapter.setAll(initialState, response);
        return results;
      },

      providesTags: (result, err, arg) =>
        result
          ? [
              ...result.ids?.map((id) => ({
                type: "Post",
                id,
              })),
              { type: "Post", id: "List" },
            ]
          : [{ type: "Post", id: "List" }],
    }),

    fetchPostById: builder.query({
      query: (id) => `/posts/${id}`,

      providesTags: (result, err, id) => [{ type: "Post", id }],
    }),

    addPost: builder.mutation({
      query: (body) => ({
        url: "/posts",
        method: "POST",
        body,
      }),

      invalidatesTags: ["Post"],
    }),

    deletePost: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: (resutl, err, arg) => [{ type: "Post", id: arg.id }],
    }),

    updatePost: builder.mutation({
      query: (body) => ({
        url: `posts/${body.id}`,
        method: "PUT",
        body,
      }),

      invalidatesTags: (resutl, err, arg) => [{ type: "Post", id: arg.id }],
    }),
  }),
});

export const {
  useFetchPostsQuery,
  useFetchPostByIdQuery,
  useAddPostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
} = postSlice;

// get return query result
export const selectPostsResult = postSlice.endpoints.fetchPosts.select();

// create momoized selector
export const selectPostsData = createSelector(
  selectPostsResult,
  (postResult) => postResult.data,
);

export const { selectAll, selectById, selectIds } = postsAdapter.getSelectors(
  (state) => selectPostsData(state) ?? initialState,
);
