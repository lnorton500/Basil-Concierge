import React, { Component } from 'react';
import { Waypoint } from 'react-waypoint';
import axios from "axios";

import Event from './Event';

class EventList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            events: [],
            keywords: this.props.keywords
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props === prevProps) return

        if (this.props.keywords !== this.state.keywords)
            this.loadContent()
    }

    /**
     * Load content using the Node Red api
     */
    loadContent() {
        axios
            .post("https://basil.eu-gb.mybluemix.net/api/events/", {
                body: this.props.keywords
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