import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}from 'react-router-dom';
import Home from './home';
import WinnerFilm from '../components/winnerFilm'
import './routes.scss'


class Routes extends Component {
    render() {
        return (          
            <Router>
                    <div className="nav-bar">
                        <nav>
                            <ul className="nav-link">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/winner">Il film più votato</Link>
                                </li>
                            </ul>
                        </nav>
                        </div>
                <Switch>
                    <Route 
                    exact
                    path="/"
                    component={Home}
                    >  
                    </Route>
                    <Route 
                    exact
                    path="/winner"
                    component={WinnerFilm}
                    >                   
                    </Route>
                </Switch>
            </Router>   

        )
    }
}

export default Routes
