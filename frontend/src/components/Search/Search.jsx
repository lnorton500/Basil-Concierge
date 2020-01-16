import React, { Component } from 'react';
import axios from "axios";

import SearchResult from './SearchResult';

import "../../styles/css/search.css"

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
        axios.get("https://basil.eu-gb.mybluemix.net/api/categories", {
            params: {
                q: e.target.value
            }
        }).then(response => {
            this.setState({ results: response.data })
        }).catch(error => {
            console.error(error)
        })
    }

    close() {
        this.setState({ show: false });
    }

    render() {
        if (!this.state.show) return <></>;

        var keywords = []
        for (let index = 0; index < this.state.selected.length; index++) {
            const element = this.state.selected[index];
            if (!keywords.some(e => e.name === element))
                keywords.push({ name: element, selected: true })
        }
        for (let index = 0; index < this.state.results.length; index++) {
            const element = this.state.results[index];
            if (!keywords.some(e => e.name === element.label))
                keywords.push({ name: element.label, selected: false })
        }

        return (
            <div className="search-panel">
                <div className="background">
                </div>
                <div className="search-box">
                    <input type="text" onChange={this.handleChange}></input>
                    <span className="exit" onClick={this.close}><i className="far fa-times-circle" style={{ color: "white" }}></i></span>
                    <div className="search-results">
                        {keywords.map((data, key) =>
                            <SearchResult key={key} data={data.name} onClick={this.handleClick} selected={data.selected} />
                        )}
                    </div>
                </div>
            </div >
        );
    }
}

export default Search;