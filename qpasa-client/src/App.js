import React from 'react'
import './App.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import LocationList from './components/Location/List'
import LocationDetails from './components/Location/Details'
import Signup from './components/Auth/Signup'
import Login from './components/Auth/Login'
import { loggedin } from './services/auth'
import ProtectedRoute from './components/ProtectedRoute'
import Days from './components/Days'

import { Switch, Route } from 'react-router-dom'

import moment from 'moment'

const day1 = moment(new Date()).format('DD.MM.YYYY') // Today

class App extends React.Component {
    state = {
        loggedIn: null
    }

    setUser = user => {
        this.setState({
            loggedIn: user
        })
    }

    getUser = () => {
        loggedin().then(user => {
            this.setState({
                loggedIn: user
            })
        })
    }

    componentDidMount() {
        this.getUser()
    }

    render() {
        return (
            <div>
                <div className="content">
                    <Navbar setUser={this.setUser} loggedIn={this.state.loggedIn} />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/events-zurich" render={props => <Days path="/events-zurich" {...props} />} />
                        <Route path="/events-berlin" render={props => <Days path="/events-berlin" {...props} />} />
                        <Route
                            exact
                            path="/signup"
                            //  component={Signup}
                            //  render allows us to pass props to our component inside Routes
                            render={props => <Signup {...props} setUser={this.setUser} />}
                        />
                        <Route
                            exact
                            path="/login"
                            //  component={login}
                            //  render allows us to pass props to our component inside Routes
                            render={props => <Login {...props} setUser={this.setUser} />}
                        />
                        <Route
                            exact
                            path="/locations/:id"
                            render={props => <LocationDetails {...props} user={this.state.loggedIn} />}
                        />
                        <Route
                            exact={true}
                            path="/locations"
                            user={this.state.loggedIn}
                            render={props => <LocationList {...props} user={this.state.loggedIn} />}
                        />
                    </Switch>
                </div>
                <Footer />
            </div>
        )
    }
}

export default App
