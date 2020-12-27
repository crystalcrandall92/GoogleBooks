import React, { Component } from "react";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import SearchBox from "../components/searchBox/searchBox.js";
import BookContainer from "../components/bookContainer/bookContainer";
import API from "../utils/API";

// setting state to value and books
class Search extends Component {
  state = {
    value: "",
    books: [],
  };

  bookSearch = searchLookup => {
    API.getBooks(searchLookup)
      .then(res => {
        this.setState({ books: res.data.items.map(bookData => this.createBook(bookData)) })
      })
  };

  // Same items in models/book.js is used here for the data of the book 
  createBook = bookData => {
    return  {
      _id: bookData.id,
      title: bookData.volumeInfo.title,
      authors: bookData.volumeInfo.authors,
      description: bookData.volumeInfo.description,
      image: bookData.volumeInfo.imageLinks.thumbnail,
      link: bookData.volumeInfo.previewLink
    }
  }

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value});
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.bookSearch(this.state.search);
  };

  render() {
    return (
      <div>
        <Nav/>
        <Header/>
        <SearchBox className="centerform" search={this.state.search}
        handleInputChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit}/>
        <h1>Your Search</h1>
        <BookContainer books={this.state.books}/>
      </div>
    )
  }
}



export default Search;
