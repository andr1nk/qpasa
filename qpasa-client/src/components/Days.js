import React from 'react'
import EventList from './Events/EventList'

class Days extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <EventList pathname={this.props.location.pathname} />
            </div>
        )
    }
}

export default Days
