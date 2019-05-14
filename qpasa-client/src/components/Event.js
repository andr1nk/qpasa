import React from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import Map from './Map'
import './Event.css'

class Event extends React.Component {
    state = {
        events: [],
        currentMap: null
    }

    fetchData = () => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api/events`).then(response => {
            console.log(response.data)
            this.setState({
                events: response.data
            })
        })
    }
    //nada

    componentDidMount() {
        this.fetchData()
    }

    showMapHandler = eventId => {
        console.log('holandow')
        this.setState({
            currentMap: eventId
        })
    }

    render() {
        return (
            <div>
                <div className="container event-container">
                    {this.state.events.map(event => {
                        return (
                            <div className="card event-card" key={event._id}>
                                <div className="card-body">
                                    <h3 className="card-title">{event.name}</h3>
                                    <p className="card-text">
                                        <i className="far fa-calendar-alt" />
                                        {event.date}
                                    </p>

                                    <p>
                                        <button
                                            onClick={() => this.showMapHandler(event._id)}
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
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <p className="card-text">{event.description}</p>
                                                        <p className="card-text">
                                                            <i className="fas fa-map-marker-alt" />{' '}
                                                            {event.location.name} <br />
                                                            {event.location.address} <br /> {event.location.city}
                                                        </p>
                                                        <a href={event.url} target="_blank" className="card-link">
                                                            go to page
                                                        </a>
                                                    </div>
                                                    <div className="col-md-6">
                                                        {event._id === this.state.currentMap && <div>{<Map />}</div>}
                                                    </div>
                                                </div>
                                            </div>
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
