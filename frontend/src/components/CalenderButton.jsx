import React, { Component } from 'react';

class CalenderButton extends Component {
    render() {
        if (!this.props.show) return (<></>);

        return (
            <div className="calender-button" onClick={this.props.download} >
                <div className="icon">
                    <i className="far fa-calendar-alt"></i>
                </div>
                Save Events
            </div>
        );
    }
}

export default CalenderButton;