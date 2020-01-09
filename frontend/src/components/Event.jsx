import React, { Component } from 'react';

import "../styles/css/event.css"

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            description: props.description,
            showDescription: false
        }


        this.toggleDisplay = this.toggleDisplay.bind(this);
    }

    toggleDisplay() {
        this.setState(prevState => {
            return { showDescription: !prevState.showDescription };
        });
    }

    render() {
        var className;
        if (this.state.showDescription)
            className = "arrow open"
        else
            className = "arrow"

        return (
            <div className="event">
                <div className="event-bar" onClick={this.toggleDisplay}>
                    <h3>{this.state.name}</h3>

                    <div className={className}>
                        <i className="fas fa-chevron-down"></i>
                    </div>
                </div>
                <div className="event-description" style={{ display: this.state.showDescription ? "block" : "none" }}>
                    {this.state.description.split("\n").map((i, key) => {
                        return <p>{i}</p>;
                    })}
                </div>
            </div >
        );
    }
}

export default Event;