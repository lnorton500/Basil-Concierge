import React, { Component } from 'react';

import Info from './EventInfo';
import Interested from './EventInterested';

import "../../styles/css/event.css"

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
        this.eventInterested = this.eventInterested.bind(this);
    }

    toggleDisplay() {
        this.setState(prevState => {
            return { showDescription: !prevState.showDescription };
        });
    }

    eventInterested() {
        console.log(this.state.event._id);

        this.props.onInterested(this.state.event._id)
    }

    render() {
        var barIcon = "arrow " + this.state.showDescription ? "open" : "";
        var eventClass = this.state.showDescription ? "event-bar open" : "event-bar"

        return (
            <div className="event" >
                <div className={eventClass} onClick={this.toggleDisplay}>
                    <h3>{this.state.event.title}</h3>

                    <Interested interested={this.state.interested} interestedEvent={this.eventInterested} />

                    <div className={barIcon}>
                        <i className="fas fa-chevron-down"></i>
                    </div>
                </div>
                <Info show={this.state.showDescription} id={this.state.event._id} />
            </div >
        );
    }
}
export default Event;