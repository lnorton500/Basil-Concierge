import React, { Component } from 'react';
import axios from "axios";

import SearchResult from './SearchResult';

import "../../styles/css/search.css"
import InterestStorage from '../Data/KeywordInterest';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: InterestStorage.Has(),
            results: [],
            selected: InterestStorage.Load()
        }

        this.getUniqueKeywords = this.getUniqueKeywords.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.close = this.close.bind(this);
    }

    componentDidMount() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        if (!urlParams.has('code')) return

        const code = urlParams.get('code')
        axios.get("https://basil.eu-gb.mybluemix.net/api/categories", {
            params: {
                code: code
            }
        },
        ).then(response => {
            console.log(response)
            if (response.data !== null) {
                var keywords = []
                for (let index = 0; index < response.data.length; index++) {
                    const element = response.data[index];
                    keywords.push(element.label)
                }

                this.setState({ selected: [...this.state.selected, ...keywords] })
            }
        }).catch(error => {
            console.error(error)
        })
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

    componentDidUpdate(prevProps) {
        InterestStorage.Store(this.state.selected)

        if (this.props === prevProps) return

        if (this.props.show)
            this.setState({ show: true });
    }

    handleChange(e) {
        axios.get("https://basil.eu-gb.mybluemix.net/api/categories", {
            params: {
                q: e.target.value
            }
        }).then(response => {
            if (response.data !== null)
                this.setState({ results: response.data })
        }).catch(error => {
            console.error(error)
        })
    }

    close() {
        this.setState({ show: false });
        this.props.close()
    }

    render() {
        if (!this.state.show) return <></>;

        var keywords = this.getUniqueKeywords();

        return (
            <div className="search-panel">
                <div className="background">
                </div>
                <div className="search-box">
                    <input type="text" onChange={this.handleChange} autoFocus></input>
                    <span className="exit" onClick={this.close}><i className="far fa-times-circle" style={{ color: "white" }}></i></span>
                    <span className="github" onClick={this.close}><a href="https://basil.eu-gb.mybluemix.net/api/github"><i className="fab fa-github" style={{ color: "white" }}></i></a></span>
                    <div className="search-results">
                        {keywords.length == 0 ? "Type to search" : null}
                        {keywords.map((data, key) =>
                            <SearchResult key={data.name} onClick={this.handleClick} data={data.name} selected={data.selected} />
                        )}
                    </div>
                </div>
            </div >
        );
    }

    getUniqueKeywords() {
        var keywords = [];

        for (let index = 0; index < this.state.selected.length; index++) {
            const element = this.state.selected[index];
            if (!keywords.some(e => e.name === element))
                keywords.push({ name: element, selected: true });
        }

        for (let index = 0; index < this.state.results.length; index++) {
            const element = this.state.results[index];
            if (!keywords.some(e => e.name === element.label))
                keywords.push({ name: element.label, selected: false });
        }
        return keywords;
    }
}

export default Search;