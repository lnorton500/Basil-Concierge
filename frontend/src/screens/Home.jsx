import React, { Component } from 'react';
import axios from "axios";

import Event from '../components/Event';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            events: []
        }
    }

    componentDidMount() {
        axios
            .get("http://127.0.0.1:8080/events/all")
            .then(res => {
                this.setState({
                    isLoaded: true,
                    events: res.data,
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
        else {

            return (
                <div className="screen">
                    <div className="heading"><h1>Home</h1> </div>
                    <div className="content">
                        <div className="events">
                            {events.map((event, _i) => (
                                <Event key={_i} event={event} />
                            ))}
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Home;