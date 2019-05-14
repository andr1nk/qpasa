import React from 'react'
import EventList from './Events/EventList'
import moment from "moment";

const day1 = moment(new Date()).format('DD.MM.YYYY')                    // Today
const day1Str = moment(new Date()).format('dddd')                    // TodayString
const day2 = moment(new Date()).add(1, 'day').format('DD.MM.YYYY')      // Tomorrow
const day2Str = moment(new Date()).add(1, 'day').format('dddd')      // Tomorrow
const day3 = moment(new Date()).add(2, 'day').format('DD.MM.YYYY')      // ...
const day3Str = moment(new Date()).add(2, 'day').format('dddd')      // ...
const day4 = moment(new Date()).add(3, 'day').format('DD.MM.YYYY')      // ...
const day4Str = moment(new Date()).add(3, 'day').format('dddd')      // ...
const day5 = moment(new Date()).add(4, 'day').format('DD.MM.YYYY')      // ...
const day5Str = moment(new Date()).add(4, 'day').format('dddd')      // ...
const day6 = moment(new Date()).add(5, 'day').format('DD.MM.YYYY')      // ...
const day6Str = moment(new Date()).add(5, 'day').format('dddd')      // ...
const day7 = moment(new Date()).add(6, 'day').format('DD.MM.YYYY')      // ...
const day7Str = moment(new Date()).add(6, 'day').format('dddd')      // ...

class Days extends React.Component {
    state = {
        day: day1
    }
    
    onClickHandler= (event)=> {
        this.setState({
            day:event.target.name
        })
        
    }

    render() {
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <button type="button" onClick={(e)=>this.onClickHandler(e)} name={day1}> Today </button>
                <button type="button" onClick={(e)=>this.onClickHandler(e)} name={day2}> Tomorrow </button>
                <button type="button" onClick={(e)=>this.onClickHandler(e)} name={day3}> {day3Str}</button>
                <button type="button" onClick={(e)=>this.onClickHandler(e)} name={day4}> {day4Str}</button>
                <button type="button" onClick={(e)=>this.onClickHandler(e)} name={day5}> {day5Str}</button>
                <button type="button" onClick={(e)=>this.onClickHandler(e)} name={day6}> {day6Str}</button>
                <button type="button" onClick={(e)=>this.onClickHandler(e)} name={day7}> {day7Str}</button>

                <EventList day={this.state.day} pathname={this.props.location.pathname} />
            </div>
        )
    }
}

export default Days
