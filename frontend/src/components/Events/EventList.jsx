import React, { Component } from 'react';
import axios from "axios";

import Event from './Event';
import InterestStorage from '../Data/KeywordInterest';
import EventStorage from '../Data/EventStorage';

class EventList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            events: [],
            keywords: []
        }
        InterestStorage.Callback((keywords) => {
            this.setState({ keywords: keywords })
            console.log(keywords)
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.keywords && prevState.keywords !== this.state.keywords && this.state.keywords.length > 0)
            this.loadContent()
    }

    /**
     * Load content using the Node Red api
     */
    loadContent() {
        axios
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
                EventStorage.Store(res.data)
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
                    <Event key={event.id} event={event} onInterested={this.eventInterested} />
                ))}
            </div>
        );
    }
}

export default EventList;