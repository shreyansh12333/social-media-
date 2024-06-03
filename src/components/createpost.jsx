import { useContext, useRef } from "react";
import { PostList } from "../stores/post-list-store";
const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postcontentElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postcontent = postcontentElement.current.value;
    const reactions = reactionsElement.current.value;

    const tags = tagsElement.current.value.split(" ");
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postcontentElement.current.value;
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postcontent, reactions, tags);
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          userId
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          placeholder="Enter your userid"
          ref={userIdElement}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling today"
          ref={postTitleElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post content
        </label>
        <textarea
          rows="4"
          type="text"
          className="form-control"
          id="title"
          placeholder="Tell us more about it "
          ref={postcontentElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          placeholder="No of reactions"
          ref={reactionsElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          placeholder="enter your tags"
          ref={tagsElement}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default CreatePost;
