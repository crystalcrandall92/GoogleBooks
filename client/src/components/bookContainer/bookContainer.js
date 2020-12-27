import React, { Component } from "react";
import API from "../../utils/API"
import "../css/styles.css";


class BookContainer extends Component {
    state = {
        savedBooks: []
    }

    componentDidMount() {
        API.savedBooks()
            .then(savedBooks => this.setState({ savedBooks: savedBooks }))
    }
    handleSavedbooks = book => {
        if (this.state.savedBooks.map(book => book._id).includes(book._id)) {
            API.deleteBook(book._id)
                .then(deletedBook => this.setState({ savedBooks: this.state.savedBooks.filter(book => book.id !== deletedBook._id) }))
        }
        else {
            API.saveBook(book)
                .then(savedBook => this.setState({ saveBooks: this.state.savedBooks.concat([savedBook]) }))
        }

    }

    render() {
        return (
            <div>
                        <div>
                            <h1>Results:</h1>
                            {this.props.books.map(result => (
                                <div className="card" key={result._id}>
                                    <div className="row">
                                        <div className="col-md-2 center">
                                            <img alt={result.title} className="img-fluid" src={result.image} />
                                        </div>
                                        <div className="col-md-10">
                                        <div>
                                                    <a href={result.link} className="btn btn-info mt-3 float" target="_blank" rel="noopener noreferrer">View</a>
                                                    <button onClick={() => this.handleSavedbooks(result)} className="btn btn-secondary mt-3 ml-3 float" >
                                                        {this.state.savedBooks.map(book => book._id).includes(result._id) ? "Delete" : "Save"}
                                                    </button>
                                                </div>
                                            <div className="card-body">
                                                <h5 className="card-title">{result.title} by {result.authors}</h5>
                                                <p className="card-text">{result.description}</p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

            </div>
        )
    }
}

export default BookContainer