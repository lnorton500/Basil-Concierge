import React, { Component } from 'react';
import BookEventList from '../components/Events/Books/BookEventList'
class Books extends Component {
    render() {
        return (
            <>
                <div className="screen" style={{ "width": "100%" }}>
                    <div className="content">
                        <BookEventList />
                    </div>
                </div>
            </>
        );
    }
}

export default Books;