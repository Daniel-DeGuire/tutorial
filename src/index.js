import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

// set-up vars
const title = "I Love You to the Moon and Back";
const author = "Amelia Hepworth";
const img =
  "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg";
function BookList() {
  return (
    <section className="booklist">
      <Book job="developer" />
      <Book title="random title" number={22} />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="box">
      <img src={img} width="300" height="250" alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{props.job}</p>
      <p>{props.title}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
