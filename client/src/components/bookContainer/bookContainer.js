import React from "react";
import "../css/styles.css";

function BookContainer(props) {
    let classes = "btn mt-3 ml-3 float btn-" + props.color

    return (
        <div>
            <div>
                <h1>Results:</h1>
                {props.books.map((result, i) => (
                    <div className="card" key={i + "-book"}>
                        <div className="row">
                            <div className="col-md-2 center">
                                {!!result.image && <img alt={result.title} className="img-fluid" src={result.image} />}
                            </div>
                            <div className="col-md-10">
                                <div>
                                    <a href={result.link} className="btn btn-info mt-3 float" target="_blank" rel="noopener noreferrer">View</a>
                                    <button onClick={() => props.action(result)} className={classes} >
                                        {props.method}
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

BookContainer.defaultProps = {
    color: "secondary"
}

export default BookContainer