import React from "react";

const Like = ({ liked, onClick }) => {
  let likeStyleClasses = "fa fa-heart";
  if (liked) likeStyleClasses += "-o";

  return (
    <i
      style={{ cursor: "pointer" }}
      onClick={onClick}
      className={likeStyleClasses}
      aria-hidden="true"
    />
  );
};

export default Like;
