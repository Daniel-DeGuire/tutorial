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
    </section>
  );
}

const Book = () => {
  const title = "I Love You to the Moon and Back";
  const author = "Amelia Hepworth";
  return (
    <article className="box">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg"
        width="300"
        height="250"
        alt=""
      />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {/* <p>{let x=6}</p> */}
      <p>{6 + 6}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
