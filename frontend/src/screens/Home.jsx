import React, { Component } from 'react';
import { Waypoint } from 'react-waypoint';
import axios from "axios";

import Event from '../components/Events/Event';
import CalenderButton from '../components/CalenderButton';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            interested: [],
            events: [],
            limit: 840,
            start: 0,
        }

        this.loadContent = this.loadContent.bind(this);
        this.eventInterested = this.eventInterested.bind(this);
        this.downloadCalender = this.downloadCalender.bind(this);
    }

    componentDidMount() {
        this.loadContent();
    }

    /**
     * Load content using the Node Red api
     */
    loadContent() {
        axios
            .get("https://basil.eu-gb.mybluemix.net/api/events/", {
                params: {
                    skip: this.state.start,
                    limit: this.state.limit
                }
            })
            .then(res => {
                this.setState({
                    isLoaded: true,
                    events: [...this.state.events, ...res.data],
                    start: this.state.start + this.state.limit
                });
            })
            .catch(error => {
                this.setState({
                    error: error,
                });
            });
    }

    eventInterested(eventID) {
        this.setState({
            interested: [...this.state.interested, eventID]
        })
    }

    /**
     * Generate and download ics file
     */
    downloadCalender() {
        this.setState({ interested: [] })

        var ids = this.state.interested.join(",")
        window.open("https://basil.eu-gb.mybluemix.net/api/cal?ids=" + ids, "_blank");
    }

    render() {
        const { error, isLoaded, events } = this.state;

        if (error)
            return <div className="screen">Error: {error.message}</div>;
        else if (!isLoaded)
            return <div className="screen">Loading</div>;
        else {
            return (
                <div className="screen">
                    <div className="heading"><h1>Home</h1> </div>
                    <div className="content">
                        <div className="events">
                            {events.map((event, _i) => (
                                <Event key={_i} event={event} onInterested={this.eventInterested} />
                            ))}
                            <Waypoint
                                onEnter={this.loadContent}
                                topOffset="50px" />
                        </div>
                    </div>
                    <CalenderButton show={this.state.interested.length > 0} download={this.downloadCalender} />
                </div>
            );
        }
    }
}

export default Home;