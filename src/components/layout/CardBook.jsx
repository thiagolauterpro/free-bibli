import React from "react";
import "./CardBook.css";
import getBook from "../book/getBook";

const CardBook = ({ books }) => {
  var Book;
  
  function event(e){
    const id = e.target.id
    Book = getBook(id);
    console.log(Book);
    document.getElementById(`book${id}`).append(Book);
  }

  const result = books.map(book =>{
    if(book.volumeInfo.title && book.volumeInfo.authors && book.volumeInfo.imageLinks){
    return(
      <React.Fragment>
      <div onClick={event} className="bookItem" key={book.id}>
        <img src={book.volumeInfo.imageLinks.thumbnail} id={book.id} alt={book.volumeInfo.title} />
        <h3>{book.volumeInfo.title}</h3>
        <span>Autores:{ book.volumeInfo.authors }</span>    
        <div id={`book${book.id}`}>
        </div>
      </div>
      </React.Fragment>
    );
  }else{
    return false
  }})

  return(
    <div>
        <div className="listBook" >
         { result }
        </div>
    </div>
  );
}

export default CardBook;