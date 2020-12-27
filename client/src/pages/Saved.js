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
  // Renders savedBooks 
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <h1>Your Saved Books</h1>
        <BookContainer books={this.state.savedBooks} />
      </div>
    )
  }
}

export default Saved;