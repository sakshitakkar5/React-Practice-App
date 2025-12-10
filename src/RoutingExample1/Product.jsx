import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Product = () => {
  const [params] = useSearchParams();
  const [post, setPost] = useState(null);

  const id = params.get("id");
  const name = params.get("name");

  // Fetching Data
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data));
  }, [id]);

  return (
    <div>
      <h2>Product Page</h2>
      <p>Query ID: {id}</p>
      <p>Query Name: {name}</p>

      <h3>Fetched Product Data:</h3>
      {post ? (
        <>
          <p>Title: {post.title}</p>
          <p>Body: {post.body}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Product;
