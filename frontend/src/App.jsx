import React, { Component } from 'react';
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom'

import Home from './screens/Home';
import Agenda from './screens/Agenda';

import "./styles/css/app.css"

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Router>
                    <ul className="navigation">
                        <li>
                            <NavLink exact activeClassName="active" to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName="active" to="/agenda">Agenda</NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName="active" to="/books">Books</NavLink>
                        </li>
                    </ul>
                    <div className="screen-content">
                        <Route exact path="/" component={Home} />
                        <Route exact path="/agenda" component={Agenda} />
                    </div>
                </Router>
            </>
        )
    }
}

export default App;