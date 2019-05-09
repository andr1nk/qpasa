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
                                    <p className="card-text">
                                        <i className="far fa-calendar-alt" />
                                        {event.date}
                                    </p>

                                    <p>
                                        <button
                                            className="btn btn-outline-dark"
                                            type="button"
                                            data-toggle="collapse"
                                            data-target={`#item-${event._id.toString()}`}
                                            aria-expanded="false"
                                            aria-controls={`item-${event._id.toString()}`}
                                        >
                                            More details
                                        </button>
                                    </p>
                                    <div className="collapse" id={`item-${event._id.toString()}`}>
                                        <div className="card card-body">
                                            <p className="card-text">{event.description}</p>
                                            <p className="card-text">
                                                <i className="fas fa-map-marker-alt" /> {event.location.name} <br />
                                                {event.location.address} <br /> {event.location.city}
                                            </p>
                                            <a href={event.url} target="_blank" className="card-link">
                                                go to page
                                            </a>
                                        </div>
                                    </div>
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
