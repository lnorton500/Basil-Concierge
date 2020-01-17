import React, { Component } from 'react';
import EventInterested from "../../Data/EventInterest";
import BookEvent from './BookEvent.jsx';
import KeywordInterestStorage from '../../Data/KeywordInterest';
import Axios from 'axios';

class EventBookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            events: [],
            keywords: KeywordInterestStorage.Load()
        }

        this.loadContent = this.loadContent.bind(this)

        KeywordInterestStorage.Callback((keywords) => {
            this.setState({ keywords: keywords })
        })
    }

    componentDidMount() {
        this.loadContent()
    }

    componentDidUpdate(prevProps, prevState) {

        if (this.state.keywords && prevState.keywords !== this.state.keywords && this.state.keywords.length > 0)
            this.loadContent()
    }

    /**
     * Load content using the Node Red api
     */
    loadContent() {
        if (!this.state.keywords) return
        Axios
            .get("https://basil.eu-gb.mybluemix.net/api/events/", {
                params: {
                    "categories": this.state.keywords.join(',')
                }
            })
            .then(res => {
                this.setState({
                    isLoaded: true,
                    events: res.data
                });
            })
            .catch(error => {
                this.setState({
                    error: error,
                });
            });
    }

    render() {
        const { error, isLoaded, events } = this.state;
        if (error)
            return <div>Error: {error.message}</div>;
        else if (!isLoaded)
            return <div>Loading</div>;

        return (
            <div className="events">
                {events.map((event, _i) => (
                    <BookEvent key={event.id} event={event} />
                ))}
            </div>
        );
    }
}

export default EventBookList;