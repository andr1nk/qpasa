import React from 'react'
import axios from 'axios'
import './Event.css'
import Event from './Event'

class EventList extends React.Component {
    state = {
        events: []
    }

    fetchData = () => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api/events`)
            .then(response => {
                this.setState({
                    events: response.data
                })
            })
    }

    componentDidMount() {
        this.fetchData()
    }

    render() {
        console.log(this.props.match)
        let day = this.props.location.pathname.replace(`${this.props.path}/`, "")
        return (
            <div>
                <div className="container event-container">
                    {this.props.pathname === '/events-zurich'
                        ? this.state.events
                            .sort((a, b) => a.location.name.localeCompare(b.location.name))
                            .filter(event => event.location.city === 'Zürich' && event.date === day)
                            .map((event, index) => <div key={index}><Event event={event} /> </div>)
                        : this.state.events
                            .sort((a, b) => a.location.name.localeCompare(b.location.name))
                            .filter(event => event.location.city === 'Berlin' && event.date === day)
                            .map((event, index) => <div key={index}><Event event={event} /></div>)
                    }
                </div>
            </div>
        )
    }
}

export default EventList
