import React, { Component } from 'react';
import Axios from "axios";

class EventInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: props.show,
            id: props.id,
            event: null
        }
        this.getEventData = this.getEventData.bind(this);
    }

    getEventData() {
        Axios.get("https://watsonibm.eu-gb.mybluemix.net/api/events/" + this.id)
            .then((response) => {
                this.setState({ event: response.body })
            })
    }

    render() {
        if (!this.show) return (<div className="event-info" style={{ display: "none" }}></div>);
        if (!this.state.event) {
            this.getEventData()
            return <div className="event-info" style={{ display: "none" }}></div>
        }

        return (<div className="event-info">
            <div className="description" dangerouslySetInnerHTML={this.state.event.description}></div>

            <div className="details">
                <div className="detail date">
                    <h4>Date</h4>
                    <p>Friday 10 Jan 2020</p>
                </div>
                <div className="detail time">
                    <h4>Time</h4>
                    <p>14:25 - 15:25</p>
                </div>
                <div className="detail speaker">
                    <h4>Speaker</h4>
                    <p>John Doe</p>
                </div>
                <div className="detail location">
                    <h4>Location</h4>
                    <div className="address">
                        {this.state.event.location.map((i, key) => {
                            return <span key={key} className="line">{i}</span>;
                        })}
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default EventInfo;