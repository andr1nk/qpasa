import React from 'react'
import axios from 'axios'

class Event extends React.Component {
    state = {
        events: []
    }

    fetchData = () => {
        axios.get('https://qpasa-api.herokuapp.com/api/events').then(response => {
            this.setState({
                events: response.data
            })
        })
    }

    componentDidMount() {
        this.fetchData()
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.events.map(event => {
                        return (
                            <div key={event._id}>
                                <h3>Event</h3>
                                <h3>{event.name}</h3>
                                <p>{event.description}</p>
                                <p>{event.url}</p>
                                <p>{event.date}</p>
                                <h3>Location</h3>
                                <p>{event.location.city}</p>
                                <p>{event.location.name}</p>
                                <p>{event.location.address}</p>
                                <p>{event.location.GPS}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Event
