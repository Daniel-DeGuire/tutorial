import React from "react";

const Book = ({ img, title, author }) => {
  //attribute, eventHandler
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("hello word");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1 on click={() => console.log(title)}>
        {title}
      </h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};
export default Book;
