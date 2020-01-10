import React, { Component } from 'react';

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
        this.interested = this.interested.bind(this);
    }

    toggleDisplay() {
        this.setState(prevState => {
            return { showDescription: !prevState.showDescription };
        });
    }

    interested(e) {
        e.stopPropagation()
        this.setState(prevState => {
            return { interested: !prevState.interested };
        });
    }

    render() {
        var barIcon;
        if (this.state.showDescription)
            barIcon = "arrow open"
        else
            barIcon = "arrow"

        var eventClass
        if (this.state.showDescription)
            eventClass = "event-bar open"
        else
            eventClass = "event-bar"

        return (
            <div className="event" >
                <div className={eventClass} onClick={this.toggleDisplay}>
                    <h3>{this.state.event.title}</h3>

                    <div className="interested-section">
                        <div className="uninterested" style={{ display: !this.state.interested ? "block" : "none" }}>
                            <a onClick={this.interested}>Interested?</a>
                        </div>
                        <div className="interested" style={{ display: this.state.interested ? "block" : "none" }}>
                            <a title="Thanks for your interested">Interested</a>
                        </div>

                    </div>

                    <div className={barIcon}>
                        <i className="fas fa-chevron-down"></i>
                    </div>
                </div>
                <div className="event-info" style={{ display: this.state.showDescription ? "flex" : "none" }}>
                    <div className="description">
                        {this.state.event.description.map((i, key) => {
                            return <p key={key}>{i}</p>;
                        })}
                    </div>

                    <div className="details">
                        <div className="detail date">
                            <h4>Date</h4>
                            <p>Friday 10 Jan 2020</p>
                        </div>
                        <div className="detail time">
                            <h4>Time</h4>
                            <p>14:25 - 15:25</p>
                        </div>
                        <div className="detail speaker">
                            <h4>Speaker</h4>
                            <p>John Doe</p>
                        </div>
                        <div className="detail location">
                            <h4>Location</h4>
                            <div className="address">
                                {this.state.event.location.map((i, key) => {
                                    return <span key={key} className="line">{i}</span>;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Event;