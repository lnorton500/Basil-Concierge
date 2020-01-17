import React, { Component } from 'react';
import Chart from '../Data/Chart'
import axios from "axios";


import "../../styles/css/sidebar.css"
import EventStorage from '../Data/EventStorage';

class UserCatagories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: true,
            error: null,
            catagories: []
        }

        EventStorage.Subscribe((catagories) => {
            if (!catagories) return
            console.log(catagories)
            this.setState({
                catagories: catagories
            })
        })
    }

    colors = [
        "#48DD74",
        "#AF0F48",
        "#277FE0",
        "#2434C2"
    ]

    render() {
        const { error, isLoaded, catagories } = this.state;
        console.log(catagories)

        if (error) return ("Error" + { error });
        if (!isLoaded) return <div className="sidebar"></div>
        return (
            <div className="sidebar">
                {catagories.map((i, key) => (
                    <Chart
                        key={i.name}
                        name={i.name}
                        value={i.score}
                        color={this.colors[key]}></Chart>
                ))}
            </div>
        );
    }
}

export default UserCatagories;