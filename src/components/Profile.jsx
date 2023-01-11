import React from "react";
import Avatar from "./Avatar";

export default function Profile({ image, name, title, isNew }) {
  const handleClick = (event) => {
    console.log(event);
    alert("버튼이 클릭됨!");
  };
  return (
    <div className="profile">
      <Avatar image={image} isNew={isNew} />
      <h1>{name}</h1>
      <p>{title}</p>
      <button onClick={handleClick} />
    </div>
  );
}
