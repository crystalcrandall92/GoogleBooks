import React, { Component } from "react";
import API from "../utils/API";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import BookContainer from "../components/bookContainer/bookContainer"


class Saved extends Component {
  state = {
    savedBooks: []
  }
  // Function to return savedBooks to page
  componentDidMount() {
    API.savedBooks()
      .then(savedBooks => this.setState({ savedBooks: savedBooks }))
  }

  handleDeleteBooks = async book => {
    try {
      const res = await API.deleteBook(book._id);
      this.setState({ savedBooks: this.state.savedBooks.filter(book => book._id !== res._id) })
    } catch (error) {
      console.warn(error)
    }
  }

  // Renders savedBooks 
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <h1>Your Saved Books</h1>
        <BookContainer books={this.state.savedBooks} action={this.handleDeleteBooks} method="Delete" color="danger" />
      </div>
    )
  }
}

export default Saved;