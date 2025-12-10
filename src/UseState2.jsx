

import React, { useState } from "react";

const UseState2 = () => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(prevLikes => prevLikes + 1);
  };

  return (
    <div>
      <h2>❤️ Likes: {likes}</h2>
      <button onClick={handleLike}>Like</button>
    </div>
  );
};

export default UseState2;
