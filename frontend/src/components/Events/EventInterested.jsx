import React, { Component } from 'react';

class EventInterested extends Component {
    constructor(props) {
        super(props);

        this.state = {
            interested: this.props.interested
        }

        this.interested = this.interested.bind(this);
    }

    interested(e) {
        e.stopPropagation()
        this.setState(prevState => {
            return { interested: !prevState.interested };
        });
    }

    render() {
        return <div className="interested-section">
            <div className="uninterested" style={{
                display: !interested ? "block" : "none"
            }}>
                <a onClick={interested}>Interested?</a>
            </div>
            <div className="interested" style={{
                display: interested ? "block" : "none"
            }}>
                <a title="Thanks for your interested">Interested</a>
            </div>
        </div>;
    }
}

export default EventInterested;
