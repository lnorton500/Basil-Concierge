import { } from './EventDetails';
import React, { Component } from 'react';
import Axios from "axios";

import EventDescription from './EventDescription';
import EventDetails from './EventDetails';

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

    componentDidMount() {
        if (this.state.show)
            this.getEventData()
    }

    componentDidUpdate(prevProps) {
        if (this.props === prevProps) return

        if (this.props.show && this.state.event == null)
            this.getEventData()

        if (this.props.show && !prevProps.show)
            this.setState({ show: true })
        if (!this.props.show && prevProps.show)
            this.setState({ show: false })

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
        if (!this.state.event) return <></>;

        return (
            <div className="event-info" style={{ display: "flex" }}>
                <EventDescription event={this.state.event} />
                <EventDetails event={this.state.event} />
            </div >);
    }
}

export default EventInfo;