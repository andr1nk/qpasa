import React from 'react'
import axios from 'axios'
import Navbar from './Navbar'

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
                <Navbar />
                <div className="container">
                    {this.state.events.map(event => {
                        return (
                            <div className="card" key={event._id}>
                                <div className="card-body">
                                    <h3 className="card-title">{event.name}</h3>
                                    <p className="card-text">{event.description}</p>
                                    <p className="card-text">
                                        <i className="far fa-calendar-alt" />
                                        {event.date}
                                    </p>
                                    <p className="card-text">
                                        <i class="fas fa-map-marker-alt" /> {event.location.name} <br />
                                        {event.location.address} <br /> {event.location.city}
                                    </p>
                                    <a href={event.url} target="_blank" className="card-link">
                                        for more details
                                    </a>
                                </div>
                                <div className="card-body" />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Event
