import React, { Component } from 'react';

import CalenderButton from '../components/CalenderButton';

import UserCatagories from '../components/UserStats/UserCatagories';
import EventList from '../components/Events/EventList';
import EventInterestStorage from '../components/Data/EventInterest';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            interested: []
        }

        this.eventInterested = this.eventInterested.bind(this);
        this.downloadCalender = this.downloadCalender.bind(this);
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

        var ids = EventInterestStorage.Load().join(",")
        console.log(EventInterestStorage.Load().Events)
        window.open("https://basil.eu-gb.mybluemix.net/api/cal?ids=" + ids, "_blank");
    }

    render() {
        return (
            <>
                <div className="screen">
                    <div className="content">
                        <EventList />
                    </div>
                </div>
                <CalenderButton show={EventInterestStorage.Has()} download={this.downloadCalender} />
                <UserCatagories />
            </>
        );

    }
}

export default Home;