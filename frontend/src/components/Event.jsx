import { EventInterested } from './Events/EventInterested';
import React, { Component } from 'react';

import Info from './Events/EventInfo';
import Interested from './Events/EventInterested';

import "../styles/css/event.css"

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            event: props.event,
            showDescription: false,
            interested: false
        }


        this.toggleDisplay = this.toggleDisplay.bind(this);
    }

    toggleDisplay() {
        this.setState(prevState => {
            return { showDescription: !prevState.showDescription };
        });
    }

    render() {
        var barIcon = "arrow " + this.state.showDescription ? "open" : "";
        var eventClass = this.state.showDescription ? "event-bar open" : "event-bar"

        return (
            <div className="event" >
                <div className={eventClass} onClick={this.toggleDisplay}>
                    <h3>{this.state.event.title}</h3>

                    <Interested interested={this.state.interested} />

                    <div className={barIcon}>
                        <i className="fas fa-chevron-down"></i>
                    </div>
                </div>
                <Info show={this.state.showDescription} key={this.state.key} />
            </div >
        );
    }
}
export default Event;