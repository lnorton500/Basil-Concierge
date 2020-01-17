import React, { Component } from 'react';

class BookEventDetails extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.book)
        return (
            <div className="event-details book-details">
                <img src={this.props.book.image}></img>
                <p className="title">
                    <a href={this.props.book.link} target="_blank">{this.props.book.title}</a>
                </p>
            </div>
        );
    }
}

export default BookEventDetails;