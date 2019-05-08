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
            <div className="container">
                <div>
                    {this.state.events.map(event => {
                        return (
                            <div className="card" key={event._id}>
                                <div className="card-body">
                                    <h5 className="card-title">{event.name}</h5>
                                    <p className="card-text">{event.description}</p>
                                    <p className="card-text">{event.date}</p>
                                    <a href={event.url} target="_blank" className="card-link">
                                        for more details
                                    </a>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Address</h5>
                                    <p className="card-text">{event.location.name}</p>
                                    <p className="card-text">
                                        {event.location.address}, {event.location.city}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Event
