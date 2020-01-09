import React, { Component } from 'react';
import Chart from '../Data/Chart'

import "../../styles/css/sidebar.css"

class UserCatagories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 75
        }
    }

    render() {
        return (
            <div className="sidebar">
                <Chart name="Software Engineering" value={this.state.value} />
                <Chart name="Dev ops" value={this.state.value} />
                <Chart name="Testing" value={this.state.value} />
                <Chart name="UX Design" value={this.state.value} />
            </div>
        );
    }
}

export default UserCatagories;