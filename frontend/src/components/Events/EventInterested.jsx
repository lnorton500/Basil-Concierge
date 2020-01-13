import React, { Component } from 'react';

class EventInterested extends Component {
    constructor(props) {
        super(props);

        this.state = {
            interested: this.props.interested
        }

        this.IsInterested = this.IsInterested.bind(this);
    }

    IsInterested(e) {
        e.stopPropagation()
        this.setState(prevState => {
            return { interested: !prevState.interested };
        });
    }

    render() {
        var interested = this.state.interested
        return <div className="interested-section">
            <div className="uninterested" style={{
                display: !interested ? "block" : "none"
            }}>
                <a onClick={this.IsInterested} href="#">Interested?</a>
            </div>
            <div className="interested" style={{
                display: interested ? "block" : "none"
            }}>
                <a title="Thanks for your interested" href="#">Interested</a>
            </div>
        </div>;
    }
}

export default EventInterested;
