import Post from "./Post";
import { useContext, useEffect, useState } from "react";
import { PostList as PostListData } from "../stores/post-list-store";
import WelcomeMessage from "./Welcomemessage";
import LoadingSpinner from "./loadingspinner";
const PostList = ({}) => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(data.posts);
        addInitialPosts(data.posts);
        setFetching(false);
      });
  }, []);
  // const handleGetPostsList = () => {
  //   console.log("get post clicked");
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.posts);
  //       addInitialPosts(data.posts);
  //     });
  // };

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};
export default PostList;
