import React from 'react'
import EventList from './Events/EventList'
import moment from 'moment'
import './Days.css'
import { Route, Link } from 'react-router-dom'
import SwipeableRoutes from "react-swipeable-routes";
import axios from 'axios'

const day1 = moment(new Date()).format('DD.MM.YYYY')                    // Today
const day1Str = moment(new Date()).format('ddd')                        // TodayString
const day2 = moment(new Date()).add(1, 'day').format('DD.MM.YYYY')      // Tomorrow
const day2Str = moment(new Date()).add(1, 'day').format('ddd')          // Tomorrow
const day3 = moment(new Date()).add(2, 'day').format('DD.MM.YYYY')      // ...
const day3Str = moment(new Date()).add(2, 'day').format('ddd')          // ...
const day4 = moment(new Date()).add(3, 'day').format('DD.MM.YYYY')      // ...
const day4Str = moment(new Date()).add(3, 'day').format('ddd')          // ...
const day5 = moment(new Date()).add(4, 'day').format('DD.MM.YYYY')      // ...
const day5Str = moment(new Date()).add(4, 'day').format('ddd')          // ...
const day6 = moment(new Date()).add(5, 'day').format('DD.MM.YYYY')      // ...
const day6Str = moment(new Date()).add(5, 'day').format('ddd')          // ...
const day7 = moment(new Date()).add(6, 'day').format('DD.MM.YYYY')      // ...
const day7Str = moment(new Date()).add(6, 'day').format('ddd')          // ...

class Days extends React.Component {
    state = {
        day: day1,
        events: [],
        locations: [],
    }

    fetchData = () => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api/locations`)
            .then(locations => {
                console.log("locations fetched")
                locations.data.map(el => el.selected = true)
                axios.get(`${process.env.REACT_APP_SERVER_URL}/api/events`)
                    .then(events => {
                        console.log("locations fetched")
                        this.setState({
                            events: events.data,
                            locations: locations.data
                        })
                    }
                    )
            }
            )

    }

    componentDidMount() {
        this.fetchData()
    }

    onClickHandler = event => {
        this.setState({
            day: event.target.name
        })
    }

    handleChange(event) {
        let { name } = event.target;
        const locationsCopy = this.state.locations.slice()
        locationsCopy.find(location => location.name === name).selected = !locationsCopy.find(location => location.name === name).selected

        this.setState({
            locations: locationsCopy
        });
    }

    topFunction() {
        console.log("topfunction")
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    render() {
        const day = this.props.location.pathname.replace(`${this.props.path}/`, '')
        return (
            <div>
                <div style={{
                    height: "60px",
                    display: "flex",
                    justifyContent: "center",
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    zIndex: "99"
                }
                }>
                    <button onClick={this.topFunction} 
                        className="btn btn-danger btn-circle btn-x1" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#collapseExample" 
                        aria-expanded="false" 
                        aria-controls="collapseExample"
                        style={{
                            width: "70px",
                            height: "70px",
                            padding: "10px 16px",
                            fontSize: "24px",
                            lineHeight: "1.33",
                            borderRadius: "35px"
                        }}
                        >
                        <i className="fas fa-filter"></i>
                    </button>
                </div>

                <div className="space" style={{ height: "70px" }}></div>

                <div className="collapse" id="collapseExample" >
                    <div className="card card-body" style={{ border: "none", paddingTop: "10px" }}>
                        <form 
                            className = "locations-filter-wrapper" 
                            style={{ overflow: "hidden", background: "Gainsboro", paddingLeft: "10%" }}>
                            {this.props.path === '/events-zurich'
                                ?
                                this.state.locations
                                    .sort((a, b) => a.name.localeCompare(b.name))
                                    .filter(location => location.city === 'Zürich')
                                    .map((location, index) => {
                                        return (
                                            <div className="custom-control custom-checkbox" 
                                                key={index} 
                                                style={{ 
                                                    float: "left", 
                                                    width: "calc(30%)", 
                                                    boxSizing: "border-box", 
                                                    color: "#171e42", 
                                                    padding: "10px",
                                                    marginLeft: "20px"
                                                }}
                                            >
                                                <input type="checkbox" className="custom-control-input" id={location.name} name={location.name} checked={location.selected} onChange={(e) => this.handleChange(e)} />
                                                <label className="custom-control-label" htmlFor={location.name}>{location.name}</label>
                                            </div>
                                        )
                                    })
                                :
                                this.state.locations
                                    .sort((a, b) => a.name.localeCompare(b.name))
                                    .filter(location => location.city === 'Berlin')
                                    .map((location, index) => {
                                        return (
                                            <div className="custom-control custom-checkbox"
                                                key={index} 
                                                style={{ 
                                                    float: "left", 
                                                    width: "calc(30%)", 
                                                    boxSizing: "border-box", 
                                                    color: "#171e42", 
                                                    padding: "10px"
                                                }}
                                            >
                                                <input type="checkbox" className="custom-control-input" id={location.name} name={location.name} checked={location.selected} onChange={(e) => this.handleChange(e)} />
                                                <label className="custom-control-label" htmlFor={location.name}>{location.name}</label>
                                            </div>
                                        )
                                    })
                            }
                        </form>
                    </div>
                </div>

                <div className="days-container">
                    <div className="text-center button-group" role="group" aria-label="Basic example">
                        <Link to={`${this.props.path}/${day1}`}>
                            <button
                                className="tap"
                                style={
                                    day === day1
                                        ? {
                                            backgroundColor: 'white',
                                            borderBottomColor: 'white',
                                            position: 'relative',
                                            zIndex: '1'
                                        }
                                        : { backgroundColor: '#343A40', color: 'white' }
                                }
                                type="button"
                                onClick={e => this.onClickHandler(e)}
                                name={day1}
                            >
                                {day1Str}
                            </button>
                        </Link>
                        <Link to={`${this.props.path}/${day2}`}>
                            <button
                                className="tap"
                                style={
                                    day === day2
                                        ? {
                                            backgroundColor: 'white',
                                            borderBottomColor: 'white',
                                            position: 'relative',
                                            zIndex: '1'
                                        }
                                        : { backgroundColor: '#343A40', color: 'white' }
                                }
                                type="button"
                                onClick={e => this.onClickHandler(e)}
                                name={day2}
                            >
                                {day2Str}
                            </button>
                        </Link>
                        <Link to={`${this.props.path}/${day3}`}>
                            <button
                                className="tap"
                                style={
                                    day === day3
                                        ? {
                                            backgroundColor: 'white',
                                            borderBottomColor: 'white',
                                            position: 'relative',
                                            zIndex: '1'
                                        }
                                        : { backgroundColor: '#343A40', color: 'white' }
                                }
                                type="button"
                                onClick={e => this.onClickHandler(e)}
                                name={day3}
                            >
                                {day3Str}
                            </button>
                        </Link>
                        <Link to={`${this.props.path}/${day4}`}>
                            <button
                                className="tap"
                                style={
                                    day === day4
                                        ? {
                                            backgroundColor: 'white',
                                            borderBottomColor: 'white',
                                            position: 'relative',
                                            zIndex: '1'
                                        }
                                        : { backgroundColor: '#343A40', color: 'white' }
                                }
                                type="button"
                                onClick={e => this.onClickHandler(e)}
                                name={day4}
                            >
                                {day4Str}
                            </button>
                        </Link>
                        <Link to={`${this.props.path}/${day5}`}>
                            <button
                                className="tap"
                                style={
                                    day === day5
                                        ? {
                                            backgroundColor: 'white',
                                            borderBottomColor: 'white',
                                            position: 'relative',
                                            zIndex: '1'
                                        }
                                        : { backgroundColor: '#343A40', color: 'white' }
                                }
                                type="button"
                                onClick={e => this.onClickHandler(e)}
                                name={day5}
                            >
                                {day5Str}
                            </button>
                        </Link>
                        <Link to={`${this.props.path}/${day6}`}>
                            <button
                                className="tap"
                                style={
                                    day === day6
                                        ? {
                                            backgroundColor: 'white',
                                            borderBottomColor: 'white',
                                            position: 'relative',
                                            zIndex: '1'
                                        }
                                        : { backgroundColor: '#343A40', color: 'white' }
                                }
                                type="button"
                                onClick={e => this.onClickHandler(e)}
                                name={day6}
                            >
                                {day6Str}
                            </button>
                        </Link>
                        <Link to={`${this.props.path}/${day7}`}>
                            <button
                                className="tap"
                                style={
                                    day === day7
                                        ? {
                                            backgroundColor: 'white',
                                            borderBottomColor: 'white',
                                            position: 'relative',
                                            zIndex: '1'
                                        }
                                        : { backgroundColor: '#343A40', color: 'white' }
                                }
                                type="button"
                                onClick={e => this.onClickHandler(e)}
                                name={day7}
                            >
                                {day7Str}
                            </button>
                        </Link>
                    </div>
                </div>



                <SwipeableRoutes>
                    <Route
                        path={`${this.props.path}/${day1}`}

                        render={props => <EventList {...props} day={this.state.day} events={this.state.events} locations={this.state.locations} path={this.props.path} pathname={this.props.location.pathname} key={day1Str} />}
                    />
                    <Route
                        path={`${this.props.path}/${day2}`}
                        render={props => <EventList {...props} day={this.state.day} events={this.state.events} locations={this.state.locations} path={this.props.path} pathname={this.props.location.pathname} key={day2Str} />}
                    />
                    <Route
                        path={`${this.props.path}/${day3}`}
                        render={props => <EventList {...props} day={this.state.day} events={this.state.events} locations={this.state.locations} path={this.props.path} pathname={this.props.location.pathname} key={day3Str} />}
                    />
                    <Route
                        path={`${this.props.path}/${day4}`}
                        render={props => <EventList {...props} day={this.state.day} events={this.state.events} locations={this.state.locations} path={this.props.path} pathname={this.props.location.pathname} key={day4Str} />}
                    />
                    <Route
                        path={`${this.props.path}/${day5}`}
                        render={props => <EventList {...props} day={this.state.day} events={this.state.events} locations={this.state.locations} path={this.props.path} pathname={this.props.location.pathname} key={day5Str} />}
                    />
                    <Route
                        path={`${this.props.path}/${day6}`}
                        render={props => <EventList {...props} day={this.state.day} events={this.state.events} locations={this.state.locations} path={this.props.path} pathname={this.props.location.pathname} key={day6Str} />}
                    />
                    <Route
                        path={`${this.props.path}/${day7}`}
                        render={props => <EventList {...props} day={this.state.day} events={this.state.events} locations={this.state.locations} path={this.props.path} pathname={this.props.location.pathname} key={day7Str} />}
                    />
                </SwipeableRoutes>
            </div>
        )
    }
}

export default Days
