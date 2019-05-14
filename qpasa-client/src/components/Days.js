import React from 'react'
import EventList from './Events/EventList'

class Days extends React.Component {
    state = {
        day: '14.05.2019'
    }
    onClickHandler = () => {}
    render() {
        console.log(this.props)
        return (
            <div>
                <button value="17.05.2019"> day1</button>
                <button> Day2 </button>
                <EventList day={this.state.day} pathname={this.props.location.pathname} />
            </div>
        )
    }
}

export default Days
