import React, { Component } from 'react';
import { Waypoint } from 'react-waypoint';
import axios from "axios";

import CalenderButton from '../components/CalenderButton';

import UserCatagories from '../components/UserStats/UserCatagories';
import Search from '../components/Search/Search';
import EventList from '../components/Events/EventList';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            interested: []
        }

        this.eventInterested = this.eventInterested.bind(this);
        this.downloadCalender = this.downloadCalender.bind(this);
        this.searchUpdated = this.searchUpdated.bind(this);
    }

    eventInterested(eventID) {
        this.setState({
            interested: [...this.state.interested, eventID]
        })
    }

    /**
     * Generate and download ics file
     */
    downloadCalender() {
        this.setState({ interested: [] })

        var ids = this.state.interested.join(",")
        window.open("https://basil.eu-gb.mybluemix.net/api/cal?ids=" + ids, "_blank");
    }

    searchUpdated(keywords) {
        this.setState({ keywords: keywords })
    }

    render() {
        //var eventList = this.updateEvents ?  : <></>
        return (
            <>
                <div className="screen">
                    <div className="content">
                        <EventList keywords={this.state.keywords} />
                    </div>
                </div>
                <CalenderButton show={this.state.interested.length > 0} download={this.downloadCalender} />
                <Search updated={this.searchUpdated} />
                <UserCatagories />
            </>
        );

    }
}

export default Home;