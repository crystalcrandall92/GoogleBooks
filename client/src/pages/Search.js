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

  bookSearch = async searchLookup => {
    try {
      const res = await API.getBooks(searchLookup)
      console.log(res)
      this.setState({
        books: res.data.items.map(bookData => this.createBook(bookData.volumeInfo))
      })
    } catch (error) {
      console.warn(error)
    }
  };

  createBook = (bookData) => ({
    title: bookData.title,
    authors: bookData.authors,
    description: bookData.description,
    image: bookData.imageLinks ? bookData.imageLinks.thumbnail : undefined,
    link: bookData.previewLink
  })

  handleInputChange = e =>
    this.setState({ [e.target.name]: e.target.value });

  handleFormSubmit = e => {
    e.preventDefault();
    this.bookSearch(this.state.search);
  };

  handleSavedBooks = async book => {
    try {
      await API.saveBook(book)
    } catch (error) {
      console.warn(error)
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <Header />
        <SearchBox className="centerform" search={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit} />
        <h1>Your Search</h1>
        <BookContainer books={this.state.books} action={this.handleSavedBooks} method="Save" />
      </div>
    )
  }
}



export default Search;
