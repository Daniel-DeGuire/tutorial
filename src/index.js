import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

// set-up vars
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg",
  title: "I Love You to the Moon and Back",
  author: "Amelia Hepworth",
};
const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/81Jg8HF-N1L._AC_UL604_SR604,400_.jpg",
  title: "How to Catch the Easter Bunny",
  author: "Adam Wallace",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>lorem Ipsum</p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = ({ img, title, author, children }) => {
  return (
    <article className="box">
      <img src={img} width="300" height="250" alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
