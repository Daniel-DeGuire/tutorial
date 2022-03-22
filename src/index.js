import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

// JSX rules
// Return single element
// div/ section/ article or Fragment
// use cameCase for html attribute
// className instead of class
// close every element
// formatting

//stateless functional component
// always return JSX

// Nested Components, React TOols

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="box">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg"
    width="260"
    height="150px"
    alt=""
  />
);

const Author = () => <h2> Alice Schertle</h2>;

const Title = () => <h1>Little Blue Truck's Springtime</h1>;

ReactDom.render(<BookList />, document.getElementById("root"));
