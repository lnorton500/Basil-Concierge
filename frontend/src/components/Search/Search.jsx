import React, { Component } from 'react';

import "../../styles/css/search.css"

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            results: []
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ results: [...this.state.results, e.target.value] })
    }

    render() {
        return (
            <div className="search-panel">
                <div className="background">
                </div>
                <div className="search-box">
                    <input type="text" onChange={this.handleChange}></input>
                    <div className="search-results">
                        {this.state.results.map((data, key) =>
                            <div className="search-result">
                                <p>{data}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div >
        );
    }
}

export default Search;