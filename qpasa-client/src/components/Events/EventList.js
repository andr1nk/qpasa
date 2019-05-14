import React from 'react'
import axios from 'axios'
import './Event.css'
import Event from './Event'

class EventList extends React.Component {
    state = {
        events: []
    }

    fetchData = () => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api/events`).then(response => {
            this.setState({
                events: response.data
            })
        })
    }
    //nada

    componentDidMount() {
        this.fetchData()
    }

    render() {
        return (
            <div>
                <div className="container event-container">
                    {this.props.pathname === '/events-zurich'
                        ? this.state.events
                              .filter(event => {
                                  return event.location.city === 'Zürich'
                              })
                              .map(event => {
                                  return (
                                      <div>
                                          <Event event={event} key={event._id} />
                                      </div>
                                  )
                              })
                        : this.state.events
                              .filter(event => {
                                  return event.location.city === 'Berlin'
                              })
                              .map(event => {
                                  return (
                                      <div>
                                          <Event event={event} key={event._id} />
                                      </div>
                                  )
                              })}
                </div>
            </div>
        )
    }
}

export default EventList
