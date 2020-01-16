import React, { Component } from 'react';
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom'

import Home from './screens/Home';
import Agenda from './screens/Agenda';
import Books from './screens/Books';

import Search from './components/Search/Search';

import "./styles/css/app.css"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: true
        }

        this.toggleSearch = this.toggleSearch.bind(this)
    }


    toggleSearch() {
        console.log("Toggle Search")
        this.setState({ search: !this.state.search })
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
                        <li>
                            <a onClick={this.toggleSearch}>Search</a>
                        </li>
                    </ul>
                    <div className="screen-content">
                        <Route exact path="/" component={Home} />
                        <Route exact path="/agenda" component={Agenda} />
                        <Route exact path="/books" component={Books} />
                    </div>
                </Router>
                {
                    this.state.search ?
                        <Search close={this.toggleSearch} /> : <></>
                }
            </>
        )
    }
}

export default App;