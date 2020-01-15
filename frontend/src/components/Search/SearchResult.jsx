import React, { Component } from 'react';

class SearchResult extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: false
        }

        this.clicked = this.clicked.bind(this);
    }

    clicked() {
        this.setState({ selected: !this.state.selected })
    }

    render() {
        var classActive = this.state.selected ? "selected" : ""
        var className = `search-result ${classActive}`;
        return (
            <div className={className} onClick={this.clicked} style={{ background: this.state.selected ? "rgb(164, 211, 150)" : "lightgray" }}>
                <p className="result-name">{this.props.data}</p>
            </div>
        );
    }
}

export default SearchResult;