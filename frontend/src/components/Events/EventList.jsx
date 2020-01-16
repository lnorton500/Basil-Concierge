import React, { Component } from 'react';
import { Waypoint } from 'react-waypoint';
import axios from "axios";

import Event from './Event';
import InterestStorage from '../Data/KeywordInterest';

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
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.keywords !== this.state.keywords && this.state.keywords.length > 0)
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
                    <Event key={_i} event={event} onInterested={this.eventInterested} />
                ))}
                <Waypoint
                    onEnter={this.loadContent}
                    topOffset="50px" />
            </div>
        );
    }
}

export default EventList;