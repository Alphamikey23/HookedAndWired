import React, { useState } from "react";

function NewUseState({ para }) {
  const [showContent, setShowContent] = useState(false);
  const [like, setLike] = useState(0);

  function handleState() {
    setShowContent(!showContent);
  }

  function handleLike() {
    setLike(like + 1);
  }

  return (
    <div>
      {showContent && <p>{para}</p>}

      <button onClick={handleState}>Content</button>

      <h4>{like}</h4>
      <button onClick={handleLike}>Like</button>
    </div>
  );
}

export default NewUseState;
