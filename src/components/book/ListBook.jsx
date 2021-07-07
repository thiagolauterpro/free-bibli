import React, { Component} from "react";
import CardBook from "../layout/CardBook";

class ListBook extends Component {
  
  constructor({codBook, nameBook}) {
    super();
    if(codBook){
      this.info = codBook;
    }else if(nameBook){
      this.info = nameBook.replace(/ /g,'+');
    }
  }

  state = {
    books: []
  }
  
  componentDidMount() {
    // console.log(this.info);
      fetch('https://www.googleapis.com/books/v1/volumes?q='+ this.info)
      .then(res => res.json())
      .then((data) => {
        this.setState({ books: data.items })
      })
      .catch(console.log)
    }
  
    render(){
      return (
        <CardBook books={this.state.books}></CardBook>
      );
    }
  
}

export default ListBook;