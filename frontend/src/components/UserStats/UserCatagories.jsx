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

    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }


    componentDidMount() {
        this.updateScores();
        this.interval = setInterval(() => this.updateScores(), 2000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    updateScores() {
        axios
            .get("http://127.0.0.1:8080/catagories/all")
            .then(res => {
                this.setState({
                    isLoaded: true,
                    catagories: res.data,
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
        if (!isLoaded)
            return <div className="sidebar"></div>
        console.log(catagories)
        return (
            <div className="sidebar">
                {catagories.map((i, key) => (
                    <Chart
                        id={key}
                        name={i.name}
                        value={i.score}
                        color={i.color}></Chart>
                ))}
            </div>
        );
    }
}

export default UserCatagories;