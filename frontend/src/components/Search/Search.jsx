import React, { Component } from 'react';

import "../../styles/css/search.css"
import SearchResult from './SearchResult';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            results: [],
            selected: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.close = this.close.bind(this);
    }

    handleClick(e) {
        if (e === undefined) return
        if (e in this.state.selected)
            this.setState({
                selected: this.state.selected.filter(function (selected) {
                    return selected !== e
                })
            });
        else {
            this.setState({
                selected: [...this.state.selected, e],
                results: this.state.results.filter(function (result) {
                    return result !== e
                })
            });
        }
    }

    handleChange(e) {
        this.setState({ results: [e.target.value] })
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
                        {this.state.selected.map((data, key) =>
                            <SearchResult key={key} data={data} onClick={this.handleClick} selected />
                        )}
                        {this.state.results.map((data, key) =>
                            <SearchResult key={key} data={data} onClick={this.handleClick} />
                        )}
                    </div>
                </div>
            </div >
        );
    }
}

export default Search;