import React from 'react'
import EventList from './Events/EventList'
import moment from "moment";
import { Route, Link } from 'react-router-dom'
import SwipeableRoutes from "react-swipeable-routes";
import axios from 'axios'
import Locationcheckbox from './Locationcheckbox';
import { Checkbox, CheckboxGroup } from 'react-checkbox-group';

const day1 = moment(new Date()).format('DD.MM.YYYY')                    // Today
const day1Str = moment(new Date()).format('ddd')                    // TodayString
const day2 = moment(new Date()).add(1, 'day').format('DD.MM.YYYY')      // Tomorrow
const day2Str = moment(new Date()).add(1, 'day').format('ddd')      // Tomorrow
const day3 = moment(new Date()).add(2, 'day').format('DD.MM.YYYY')      // ...
const day3Str = moment(new Date()).add(2, 'day').format('ddd')      // ...
const day4 = moment(new Date()).add(3, 'day').format('DD.MM.YYYY')      // ...
const day4Str = moment(new Date()).add(3, 'day').format('ddd')      // ...
const day5 = moment(new Date()).add(4, 'day').format('DD.MM.YYYY')      // ...
const day5Str = moment(new Date()).add(4, 'day').format('ddd')      // ...
const day6 = moment(new Date()).add(5, 'day').format('DD.MM.YYYY')      // ...
const day6Str = moment(new Date()).add(5, 'day').format('ddd')      // ...
const day7 = moment(new Date()).add(6, 'day').format('DD.MM.YYYY')      // ...
const day7Str = moment(new Date()).add(6, 'day').format('ddd')      // ...


class Days extends React.Component {
    state = {
        day: day1,
        events: [],
        locations: [],
    }

    fetchData = () => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api/locations`)
        .then( locations => {
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

    onClickHandler = (event) => {
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

    render() {
        const day = this.props.location.pathname.replace(`${this.props.path}/`, "")
        console.log("Days render")
        return (
            <div>
                <br />
                <br />
                <br />
                <br />

                <div className="btn-group" role="group" aria-label="Basic example">
                    <Link to={`${this.props.path}/${day1}`}>
                        <button className="btn btn-secondary" style={day === day1 ? { backgroundColor: "red" } : { backgroundColor: "blue" }} type="button" onClick={(e) => this.onClickHandler(e)} name={day1}> {day1Str} </button>
                    </Link>
                    <Link to={`${this.props.path}/${day2}`}>
                        <button className="btn btn-secondary" style={day === day2 ? { backgroundColor: "red" } : { backgroundColor: "blue" }} type="button" onClick={(e) => this.onClickHandler(e)} name={day2}> {day2Str} </button>
                    </Link>
                    <Link to={`${this.props.path}/${day3}`}>
                        <button className="btn btn-secondary" style={day === day3 ? { backgroundColor: "red" } : { backgroundColor: "blue" }} type="button" onClick={(e) => this.onClickHandler(e)} name={day3}> {day3Str} </button>
                    </Link>
                    <Link to={`${this.props.path}/${day4}`}>
                        <button className="btn btn-secondary" style={day === day4 ? { backgroundColor: "red" } : { backgroundColor: "blue" }} type="button" onClick={(e) => this.onClickHandler(e)} name={day4}> {day4Str} </button>
                    </Link>
                    <Link to={`${this.props.path}/${day5}`}>
                        <button className="btn btn-secondary" style={day === day5 ? { backgroundColor: "red" } : { backgroundColor: "blue" }} type="button" onClick={(e) => this.onClickHandler(e)} name={day5}> {day5Str} </button>
                    </Link>
                    <Link to={`${this.props.path}/${day6}`}>
                        <button className="btn btn-secondary" style={day === day6 ? { backgroundColor: "red" } : { backgroundColor: "blue" }} type="button" onClick={(e) => this.onClickHandler(e)} name={day6}> {day6Str} </button>
                    </Link>
                    <Link to={`${this.props.path}/${day7}`}>
                        <button className="btn btn-secondary" style={day === day7 ? { backgroundColor: "red" } : { backgroundColor: "blue" }} type="button" onClick={(e) => this.onClickHandler(e)} name={day7}> {day7Str} </button>
                    </Link>
                    <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Filter
                    </button>
                </div>

                <div class="collapse" id="collapseExample">
                    <div class="card card-body">
                        <form>
                        {this.props.path === '/events-zurich'
                        ? 
                        this.state.locations
                            .sort((a, b) => a.name.localeCompare(b.name))
                            .filter(location => location.city === 'Zürich')
                            .map((location, index) => {
                                return (
                                <div key={index}>
                                    <label>{location.name}</label>  
                                    <input type="checkbox" name={location.name} checked={location.selected} onChange={(e) => this.handleChange(e)} /> 
                                </div>)
                        })
                        :
                        this.state.locations
                            .sort((a, b) => a.name.localeCompare(b.name))
                            .filter(location => location.city === 'Berlin')
                            .map((location, index) => {
                                return (
                                <div key={index}>
                                    <label>{location.name}</label>  
                                    <input type="checkbox" name={location.name} checked={location.selected} onChange={(e) => this.handleChange(e)} /> 
                                </div>)
                        }) 
                        }
                        </form>
                    </div>
                </div>

                <SwipeableRoutes>
                    <Route
                        path={`${this.props.path}/${day1}`}
                        render={props => <EventList {...props} day={this.state.day} events={this.state.events}  locations={this.state.locations} path={this.props.path} pathname={this.props.location.pathname} key={day1Str} />}
                    />
                    <Route
                        path={`${this.props.path}/${day2}`}
                        render={props => <EventList {...props} day={this.state.day} events={this.state.events}  locations={this.state.locations} path={this.props.path} pathname={this.props.location.pathname} key={day2Str} />}
                    />
                    <Route
                        path={`${this.props.path}/${day3}`}
                        render={props => <EventList {...props} day={this.state.day} events={this.state.events}  locations={this.state.locations} path={this.props.path} pathname={this.props.location.pathname} key={day3Str} />}
                    />
                    <Route
                        path={`${this.props.path}/${day4}`}
                        render={props => <EventList {...props} day={this.state.day} events={this.state.events}  locations={this.state.locations} path={this.props.path} pathname={this.props.location.pathname} key={day4Str} />}
                    />
                    <Route
                        path={`${this.props.path}/${day5}`}
                        render={props => <EventList {...props} day={this.state.day} events={this.state.events}  locations={this.state.locations} path={this.props.path} pathname={this.props.location.pathname} key={day5Str} />}
                    />
                    <Route
                        path={`${this.props.path}/${day6}`}
                        render={props => <EventList {...props} day={this.state.day} events={this.state.events}  locations={this.state.locations} path={this.props.path} pathname={this.props.location.pathname} key={day6Str} />}
                    />
                    <Route
                        path={`${this.props.path}/${day7}`}
                        render={props => <EventList {...props} day={this.state.day} events={this.state.events}  locations={this.state.locations} path={this.props.path} pathname={this.props.location.pathname} key={day7Str} />}
                    />
                </SwipeableRoutes>
            </div>
        )
    }
}

export default Days
