import React from "react";

function Post({ post }) {
  return (
    <div>
      <h4>Name: {post.name}</h4>
      <hp>UserName: {post.username}</hp>
      <p>Email: {post.email}</p>
    </div>
  );
}

export default Post;
