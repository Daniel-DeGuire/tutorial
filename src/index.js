import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";
// set-up vars
const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/81Jg8HF-N1L._AC_UL604_SR604,400_.jpg",
    title: "How to Catch the Easter Bunny",
    author: "Adam Wallace",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/81WZ6QvGZ2L._AC_UL604_SR604,400_.jpg",
    title: "It's Not Easy Being a Bunny",
    author: "Marilyn Sadlere",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} book={book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  const { img, title, author } = props.book;

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
