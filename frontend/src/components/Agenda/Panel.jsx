import React, { Component } from 'react';
import Hour from './Hour';

const moment = require('moment');


class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        var duration = moment.duration(30, 'minutes').asMinutes()
        var events = [{
            name: "Event 1",
            duration: duration
        }, {
            name: "Event 2",
            start: moment("9:30am"),
            end: moment("10am"),
            duration: duration
        },
        ]
        return (
            <table>
                <Hour hour="9am" event={events}></Hour>
                <Hour hour="10am" event={events}></Hour>
                <Hour hour="11am" event={events}></Hour>
                <Hour hour="12am" event={events}></Hour>
                <Hour hour="1pm" event={events}></Hour>
                <Hour hour="2pm" event={events}></Hour>
                <Hour hour="3pm" event={events}></Hour>
                <Hour hour="4pm" event={events}></Hour>
                <Hour hour="5pm" event={events}></Hour>

            </table >
        );
    }
}

export default Panel;