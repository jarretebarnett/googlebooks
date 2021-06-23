import React from 'react';
import "./style.css";

function QueueItems(props) {
    const {title, authors, image, link, description, deleteGoogleBook} = props
    return (
        <div>
            <div className="card">
                <div className="card-header"></div>
                <div className="card-body">
                    <img src={image} style={{maxWidth: "100px"}} alt="jumbotron"/>
                    <h5 className="card-title" style={{margin: "10px 0"}}>{title}</h5>
                    <p className="card-text" >{description}</p>
                    <p style={{fontStyle: "italic"}}>Author(s): {authors}</p>
                    <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-dark" style={{marginRight: "6px", color: "white"}}>View Book</a>
                    <button onClick={deleteGoogleBook.bind(this, props)} className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default QueueItems;