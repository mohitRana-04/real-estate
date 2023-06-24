import React, { useState } from "react";
import "../../../src/App.css";
import PostForm from "./PostForm";

const ShowPost = () => {
  const [post, showPost] = useState(false);

  return (
    <div className="center-div">
      <div className="seperate">
        <h1 className="color">POST</h1>

        <button
          onClick={() => {
            showPost(!post);
          }}
          className="post-btn"
        >
          Add Post
        </button>
      </div>

      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, animi
        obcaecati. Ipsa pariatur culpa voluptatem! Nam consectetur alias,
        repellat perferendis, ipsum aspernatur quaerat facere temporibus,
        officiis provident tempore natus odio!
      </h2>

      {post && <PostForm />}
    </div>
  );
};

export default ShowPost;
