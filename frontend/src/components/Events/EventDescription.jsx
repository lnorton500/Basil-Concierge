import React, { Component } from 'react';

class EventDescription extends Component {
    render() {
        return (<div className="description">
            <div dangerouslySetInnerHTML={{
                __html: this.props.event.abstract
            }}></div>
            <div dangerouslySetInnerHTML={{
                __html: this.props.event.description
            }}></div>
        </div>);
    }
}

export default EventDescription;