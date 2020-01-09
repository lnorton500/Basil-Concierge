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
                <Chart name="Software Engineering" value={75} />
                <Chart name="Dev ops" value={50} />
                <Chart name="Testing" value={25} />
                <Chart name="UX Design" value={63} />
            </div>
        );
    }
}

export default UserCatagories;