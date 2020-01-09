import React, { Component } from 'react';

import "../styles/css/event.css"

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            description: props.description,
            showDescription: false,
            interested: props.interested
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
                    <h3>{this.state.name}</h3>

                    <div className="interested-section">
                        <div className="uninterested" style={{ display: this.state.interested ? "block" : "none" }}>
                            <a onClick={this.interested}>Interested?</a>
                        </div>
                        <div className="interested" style={{ display: !this.state.interested ? "block" : "none" }}>
                            <a title="Thanks for your interested">Interested</a>
                        </div>

                    </div>

                    <div className={barIcon}>
                        <i className="fas fa-chevron-down"></i>
                    </div>
                </div>
                <div className="event-info" style={{ display: this.state.showDescription ? "block" : "none" }}>
                    <div className="description">
                        {this.state.description.split("\n").map((i, key) => {
                            return <p>{i}</p>;
                        })}
                    </div>

                    <div className="details">
                        
                    </div>
                </div>
            </div >
        );
    }
}

export default Event;