import { } from '../EventDetails';
import React, { Component } from 'react';
import Axios from "axios";

import BookEventDetails from './BookEventDetails';

class BookEventInfo extends Component {
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

        if (this.props.show && this.state.event == null && !this.state.loading)
            this.getEventData()

        if (this.props.show && !prevProps.show)
            this.setState({ show: true })
        if (!this.props.show && prevProps.show)
            this.setState({ show: false })

    }

    getEventData() {
        var url = "https://basil.eu-gb.mybluemix.net/api/reading/" + this.props.id

        this.setState({ loading: true })

        Axios.get(url)
            .then((response) => {
                this.setState({
                    event: response.data,
                    loading: false
                })
                console.log(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        if (!this.state.show) return <div className="event-info" style={{ display: "none" }}></div>;
        if (this.state.loading) return <div className="event-info"><p className="loading">Loading</p></div>;
        if (!this.state.event) return <></>;

        console.log(this.state.event)
        return (
            <div className="event-info book-info" style={{ display: "flex" }}>
                {this.state.event.map((event, _i) => (
                    <BookEventDetails key={_i} book={event}></BookEventDetails>
                ))}
            </div>
        );
    }
}

export default BookEventInfo;