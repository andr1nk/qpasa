import React from 'react'
import EventList from './Events/EventList'
import moment from "moment";
import { Route, Link } from 'react-router-dom'
import SwipeableRoutes from "react-swipeable-routes";


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
        day: day1
    }

    onClickHandler = (event) => {
        this.setState({
            day: event.target.name
        })
    }

    render() {
        const day = this.props.location.pathname.replace(`${this.props.path}/`, "")

        return (
            <div>
                <br />
                <br />
                <br />
                <br />
                <div className="btn-group" role="group" aria-label="Basic example">
                    <Link to={`${this.props.path}/${day1}`}>
                        <button className = "btn btn-secondary" style={day === day1 ? { backgroundColor: "red" } : { backgroundColor: "blue" }} type="button" onClick={(e) => this.onClickHandler(e)} name={day1}> {day1Str} </button>
                    </Link>
                    <Link to={`${this.props.path}/${day2}`}>
                        <button className = "btn btn-secondary" style={day === day2 ? { backgroundColor: "red" } : { backgroundColor: "blue" }} type="button" onClick={(e) => this.onClickHandler(e)} name={day2}> {day2Str} </button>
                    </Link>
                    <Link to={`${this.props.path}/${day3}`}>
                        <button className = "btn btn-secondary" style={day === day3 ? { backgroundColor: "red" } : { backgroundColor: "blue" }} type="button" onClick={(e) => this.onClickHandler(e)} name={day3}> {day3Str} </button>
                    </Link>
                    <Link to={`${this.props.path}/${day4}`}>
                        <button className = "btn btn-secondary" style={day === day4 ? { backgroundColor: "red" } : { backgroundColor: "blue" }} type="button" onClick={(e) => this.onClickHandler(e)} name={day4}> {day4Str} </button>
                    </Link>
                    <Link to={`${this.props.path}/${day5}`}>
                        <button className = "btn btn-secondary" style={day === day5 ? { backgroundColor: "red" } : { backgroundColor: "blue" }} type="button" onClick={(e) => this.onClickHandler(e)} name={day5}> {day5Str} </button>
                    </Link>
                    <Link to={`${this.props.path}/${day6}`}>
                        <button className = "btn btn-secondary" style={day === day6 ? { backgroundColor: "red" } : { backgroundColor: "blue" }} type="button" onClick={(e) => this.onClickHandler(e)} name={day6}> {day6Str} </button>
                    </Link>
                    <Link to={`${this.props.path}/${day7}`}>
                        <button className = "btn btn-secondary" style={day === day7 ? { backgroundColor: "red" } : { backgroundColor: "blue" }} type="button" onClick={(e) => this.onClickHandler(e)} name={day7}> {day7Str} </button>
                    </Link>
                </div>

                <SwipeableRoutes>
                    <Route
                        path={`${this.props.path}/${day1}`}
                        render={props => <EventList {...props} day={this.state.day} path={this.props.path} pathname={this.props.location.pathname} key={day1Str} />}
                    />
                    <Route
                        path={`${this.props.path}/${day2}`}
                        render={props => <EventList {...props} day={this.state.day} path={this.props.path} pathname={this.props.location.pathname} key={day2Str} />}
                    />
                    <Route
                        path={`${this.props.path}/${day3}`}
                        render={props => <EventList {...props} day={this.state.day} path={this.props.path} pathname={this.props.location.pathname} key={day3Str} />}
                    />
                    <Route
                        path={`${this.props.path}/${day4}`}
                        render={props => <EventList {...props} day={this.state.day} path={this.props.path} pathname={this.props.location.pathname} key={day4Str} />}
                    />
                    <Route
                        path={`${this.props.path}/${day5}`}
                        render={props => <EventList {...props} day={this.state.day} path={this.props.path} pathname={this.props.location.pathname} key={day5Str} />}
                    />
                    <Route
                        path={`${this.props.path}/${day6}`}
                        render={props => <EventList {...props} day={this.state.day} path={this.props.path} pathname={this.props.location.pathname} key={day6Str} />}
                    />
                    <Route
                        path={`${this.props.path}/${day7}`}
                        render={props => <EventList {...props} day={this.state.day} path={this.props.path} pathname={this.props.location.pathname} key={day7Str} />}
                    />
                </SwipeableRoutes>
            </div>
        )
    }
}

export default Days
