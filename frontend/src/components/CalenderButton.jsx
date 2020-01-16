import React, { Component } from 'react';
import EventInterestStorage from './Data/EventInterest';

class CalenderButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }

        EventInterestStorage.Callback((events) => {
            this.setState({ show: true })
        })
    }


    render() {
        if (!this.state.show) return (<></>);

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