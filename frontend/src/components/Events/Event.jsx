import React, { Component } from 'react';

import EventInterestStorage from '../Data/EventInterest';
import Interested from './EventInterested';
import Info from './EventInfo';

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
        EventInterestStorage.Add(this.state.event.id)
    }

    render() {
        var barIcon = "arrow " + this.state.showDescription ? "open" : "";
        var eventBarClass = this.state.showDescription ? "event-bar open" : "event-bar"
        var info = this.state.showDescription ? <Info show={this.state.showDescription} id={this.state.event.id} /> : <></>;
        return (
            <div className="event" >
                <div className={eventBarClass} onClick={this.toggleDisplay}>
                    <h3>{this.state.event.title}</h3>

                    <Interested interested={this.state.interested} interestedEvent={this.eventInterested} />

                    <div className={barIcon}>
                        <i className="fas fa-chevron-down"></i>
                    </div>
                </div>
                {info}
            </div >
        );
    }
}
export default Event;