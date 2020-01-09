import React, { Component } from 'react';
import Home from './screens/Home';
import UserCatagories from './components/UserStats/UserCatagories';

import "./styles/css/app.css"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Home />
                <UserCatagories />
            </div>
        )
    }
}

export default App;