import React, { Component } from 'react';
import Chart from '../Data/Chart'
import axios from "axios";


import "../../styles/css/sidebar.css"

class UserCatagories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            error: null,
            catagories: []
        }

        this.updateScores = this.updateScores.bind(this);
    }

    componentDidMount() {
        this.updateScores();
        this.interval = setInterval(() => this.updateScores(), 10000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    updateScores() {
        axios
            .get("https://basil.eu-gb.mybluemix.net/api/catagories")
            .then(res => {
                this.setState({
                    isLoaded: true,
                    catagories: res.data,
                    error: null
                });
            })
            .catch(error => {
                this.setState({
                    error: error,
                });
            });
    }

    render() {
        const { error, isLoaded, catagories } = this.state;

        if (error) return ("Error" + { error });
        if (!isLoaded) return <div className="sidebar"></div>
        return (
            <div className="sidebar">
                {catagories.map((i, key) => (
                    <Chart
                        key={key}
                        name={i.name}
                        value={i.score}
                        color={i.color}></Chart>
                ))}
            </div>
        );
    }
}

export default UserCatagories;