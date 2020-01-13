import React, { Component } from 'react';
import Axios from "axios";
import MomentFormat from 'react-moment';
import Moment from 'moment';

class EventInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: props.show,
            loading: false,
            id: props.id,
            event: null
        }
        this.getEventData = this.getEventData.bind(this);
    }

    // componentDidMount() {
    //     this.getEventData()
    // }

    componentDidUpdate(prevProps) {
        if (this.props === prevProps) return

        if (this.props.show && !prevProps.show)
            this.setState({ show: true })
        if (!this.props.show && prevProps.show)
            this.setState({ show: false })

        if (this.props.show)
            this.getEventData()
    }

    getEventData() {
        var url = "https://watsonibm.eu-gb.mybluemix.net/api/events/" + this.state.id
        this.setState({ loading: true })
        Axios.get(url)
            .then((response) => {
                this.setState({
                    event: response.data[0],
                    loading: false
                })
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        if (!this.state.show) return <div className="event-info" style={{ display: "none" }}></div>;
        if (this.state.loading) return <div className="event-info"><p className="loading">Loading</p></div>;

        var end = Moment(this.state.event.start).add(this.state.event.duration, 'm')
        return (
            <div className="event-info" style={{ display: "flex" }}>
                <div className="description">
                    <div dangerouslySetInnerHTML={{ __html: this.state.event.abstract }}></div>
                    <div dangerouslySetInnerHTML={{ __html: this.state.event.description }}></div>
                </div>
                <div className="details">
                    <div className="detail date">
                        <h4>Date</h4>
                        <MomentFormat format="DD/MM/YYYY">{this.state.event.start}</MomentFormat>
                    </div>
                    <div className="detail time">
                        <h4>Time</h4>
                        <p><MomentFormat format="HH:mm">{this.state.event.start}</MomentFormat> - <MomentFormat format="HH:mm">{end}</MomentFormat> </p>
                    </div>
                    <div className="detail speaker">
                        <h4>Speaker</h4>
                        {this.state.event.persons.map((value, index) => {
                            return <p key={index}>{value}</p>
                        })}
                    </div>
                    <div className="detail room">
                        <h4>Room</h4>
                        {this.state.event.room}
                    </div>
                    <div className="detail track">
                        <h4>Room</h4>
                        {this.state.event.track}
                    </div>
                </div>
            </div >);
    }
}

export default EventInfo;