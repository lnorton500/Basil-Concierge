import React, { Component } from 'react';

import Home from './screens/Home';
import UserCatagories from './components/UserStats/UserCatagories';
import Search from './components/Search/Search';

import "./styles/css/app.css"

class App extends Component {

    render() {
        return (
            <>
                <div className="screen-content">
                    <Home />
                    <UserCatagories />
                </div>
                <Search />
            </>
        )
    }
}

export default App;