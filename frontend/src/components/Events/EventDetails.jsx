import React, { Component } from 'react';
import MomentFormat from 'react-moment';
import Moment from 'moment';

class EventDetails extends Component {
    render() {
        var end = Moment(this.props.event.start).add(this.props.event.duration, 'm')

        return (<div className="details">
            <div className="detail date">
                <h4>Date</h4>
                <MomentFormat format="DD/MM/YYYY">{this.props.event.start}</MomentFormat>
            </div>
            <div className="detail time">
                <h4>Time</h4>
                <p><MomentFormat format="HH:mm">{this.props.event.start}</MomentFormat> - <MomentFormat format="HH:mm">{end}</MomentFormat> </p>
            </div>
            <div className="detail speaker">
                <h4>Speaker</h4>
                {this.props.event.persons.map((value, index) => {
                    return <p key={index}>{value}</p>;
                })}
            </div>
            <div className="detail room">
                <h4>Room</h4>
                {this.props.event.room}
            </div>
            <div className="detail track">
                <h4>Track</h4>
                {this.props.event.track}
            </div>
        </div>);
    }
}

export default EventDetails;