import { createContext, useReducer, useState } from "react";
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletPost: () => {},
  addInitialPosts: () => {},
});
const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payoad.postid
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const addPost = (userId, postTitle, postcontent, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postcontent,
        recations: reactions,
        userId: userId,
        tag: tags,
      },
    });
  };
  const deletePost = (postid) => {
    dispatchPostList({
      type: "DELETE_POST",
      payoad: {
        postid,
      },
    });
  };
  const addInitialPosts = (posts) => {
    dispatchPostList({
      action: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  return (
    <PostList.Provider
      value={{ postList, addPost, deletePost, addInitialPosts }}
    >
      {children}
    </PostList.Provider>
  );
};
export default PostListProvider;
