import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

import { books } from "./books";
import Book from "./Book";
import { greeting } from "./testing";

// set-up vars

function BookList() {
  console.log(greeting);
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
