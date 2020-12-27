import React from "react";
import "../css/styles.css";

function searchBox(props) {
    return (
        // React style form from https://react-bootstrap.github.io/components/forms/
        <div className="centerform">
            <form>
                <div className="form-group">
                    <input
                        onChange={props.handleInputChange}
                        size="sm"
                        // Use "" otherwise console.log returns error
                        value={props.search || ""}
                        name="search"
                        type="text"
                        placeholder="Look up a book!"
                        id="search"></input></div>
                <div><button onClick={props.handleFormSubmit} className="btn btn-info float">Search</button></div>
            </form>
        </div>
    )
}

export default searchBox;