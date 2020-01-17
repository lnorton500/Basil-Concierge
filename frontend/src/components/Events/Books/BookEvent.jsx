import React, { Component } from 'react';

import EventInterestStorage from '../../Data/EventInterest';

import "../../../styles/css/event.css"
import BookEventInfo from './BookEventInfo';

class BookEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            event: props.event,
            showReading: false,
        }

        this.toggleDisplay = this.toggleDisplay.bind(this);
    }

    toggleDisplay() {
        this.setState(prevState => {
            return { showReading: !prevState.showReading };
        });
    }

    render() {
        var barIcon = "arrow " + this.state.showReading ? "open" : "";
        var eventBarClass = this.state.showReading ? "event-bar open" : "event-bar"
        var info = this.state.showReading ? <BookEventInfo show={this.state.showReading} id={this.state.event.id} /> : <></>;
        return (
            <div className="event" >
                <div className={eventBarClass} onClick={this.toggleDisplay}>
                    <h3>{this.state.event.title}</h3>

                    <div className={barIcon}>
                        <i className="fas fa-chevron-down"></i>
                    </div>
                </div>
                {info}
            </div >
        );
    }
}
export default BookEvent;