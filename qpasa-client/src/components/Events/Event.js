import React from 'react'
import Map from '../Map'
import './Event.css'

class Event extends React.Component {
    state = {
        currentMap: null
    }

    showMapHandler = eventId => {
        this.setState({
            currentMap: eventId
        })
    }

    render() {
        const { date, _id, description, url } = this.props.event
        const { city, address } = this.props.event.location
        const { lat, long } = this.props.event.location.GPS
        const eventName = this.props.event.name
        const locationName = this.props.event.location.name
        return (
            <div className="card event-card" key={_id}>
                <div className="card-body">
                    <h3 className="card-title">{eventName}</h3>
                    <i className="fas fa-map-marker-alt" /> {locationName}
                    {description === '' ? null : <p className="card-text">{description}</p>}
                    <p>
                        <button
                            onClick={() => this.showMapHandler(_id)}
                            className="btn btn-outline-dark event-button"
                            type="button"
                            data-toggle="collapse"
                            data-target={`#item-${_id.toString()}`}
                            aria-expanded="false"
                            aria-controls={`item-${_id.toString()}`}
                        >
                            More details
                        </button>
                    </p>
                    <div className="collapse" id={`item-${_id.toString()}`}>
                        <div className="card card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <p>
                                        <i className="far fa-calendar-alt" /> {date}
                                    </p>
                                    {description === '' ? null : (
                                        <p>
                                            <i className="fas fa-info" /> {description}
                                        </p>
                                    )}

                                    <p>
                                        <i className="fas fa-map-marker-alt" /> {locationName} <br />
                                        {address} <br /> {city}
                                    </p>

                                    <a href={url} target="_blank" className="badge badge-dark info-link">
                                        Go to webpage
                                    </a>
                                </div>
                                <div className="col-md-6">
                                    {_id === this.state.currentMap && lat && long && (
                                        <div>{<Map latitude={lat} longitude={long} />}</div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Event
