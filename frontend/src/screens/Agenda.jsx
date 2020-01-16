import React, { Component } from 'react';
import Panel from '../components/Agenda/Panel';

import "../styles/css/agenda.css"


class Agenda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            interested: []
        }
    }

    render() {
        //var eventList = this.updateEvents ?  : <></>
        return (
            <>
                <Panel />
            </>
        );

    }
}

export default Agenda;