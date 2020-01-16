import React, { Component } from 'react';

class Hour extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        var events = this.props.event
        console.log(events[0].duration)
        return (
            <>
                <tr>
                    <td rowSpan="2" className="hour">
                        {this.props.hour}
                    </td>
                    <td className="minute">
                        00
                        </td>
                    <td rowSpan={events[0].duration / 30}>
                        {events[0].name}
                    </td>
                </tr>
                <tr>
                    <td className="minute">30</td>
                    <td rowSpan={events[1].duration / 30}>
                        {events[1].name}
                    </td>
                </tr>
            </>
        );
    }
}

export default Hour;