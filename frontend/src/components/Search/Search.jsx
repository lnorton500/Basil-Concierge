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
        this.close = this.close.bind(this);
    }

    handleChange(e) {
        this.setState({ results: [...this.state.results, e.target.value] })
    }

    close() {
        this.setState({ show: false });
    }

    render() {
        if (!this.state.show) return <></>;

        return (
            <div className="search-panel">
                <div className="background">
                </div>
                <div className="search-box">
                    <input type="text" onChange={this.handleChange}></input>
                    <span className="exit" onClick={this.close}><i className="far fa-times-circle" style={{ color: "white" }}></i></span>
                    <div className="search-results">
                        {this.state.results.map((data, key) =>
                            <div key={key} className="search-result">
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