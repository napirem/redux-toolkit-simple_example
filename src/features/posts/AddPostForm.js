import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";

export default function AddPostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [userId, setUserId] = useState("");
  const dispatch = useDispatch();
  //   const posts = useSelector(selectAllPosts);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded({ title, content, id: nanoid() }));
      setTitle("");
      setContent("");
    }
  };

  return (
    <section>
      <h2>Add new post</h2>
      <form>
        <label htmlFor="postTitle">Post title:</label>
        <input type="text" id="postTitle" name="postTitle" value={title} onChange={onTitleChanged} />
        <label htmlFor="postContent">Content:</label>
        <textarea type="text" id="postContent" name="postContent" value={content} onChange={onContentChanged} />
      </form>
      <button className="formBtn" type="button" onClick={onSavePostClicked}>
        Save post
      </button>
    </section>
  );
}
