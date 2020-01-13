import React, { Component } from 'react';
import { Waypoint } from 'react-waypoint';
import axios from "axios";

import Event from '../components/Event';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            events: [],
            limit: 20,
            start: 0
        }

        this.loadContent = this.loadContent.bind(this);
        this.loadContent = this.loadContent.bind(this);
    }

    componentDidMount() {
        this.loadContent();
    }

    loadContent() {
        axios
            .get("https://watsonibm.eu-gb.mybluemix.net/api/events/", {
                params: {
                    skip: this.state.start,
                    limit: this.state.limit
                }
            })
            .then(res => {
                console.log(res);
                this.setState({
                    isLoaded: true,
                    events: [...this.state.events, ...res.data],
                    start: this.state.start + this.state.limit
                });
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    error: error,
                });
            });
    }

    render() {
        const { error, isLoaded, events } = this.state;

        console.log(events)

        if (error)
            return <div>Error: {error.message}</div>;
        else if (!isLoaded)
            return <div>Loading</div>;
        else {
            return (
                <div className="screen">
                    <div className="heading"><h1>Home</h1> </div>
                    <div className="content">
                        <div className="events">
                            {events.map((event, _i) => (
                                <Event key={_i} event={event} />
                            ))}
                            <Waypoint
                                onEnter={this.loadContent}
                                topOffset="50px" />
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Home;