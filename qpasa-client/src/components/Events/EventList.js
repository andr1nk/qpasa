import React from 'react'
import axios from 'axios'
import './Event.css'
import Event from './Event'

class EventList extends React.Component {
    state = {
        events: this.props.events
    }

    // fetchData = () => {
    //     axios.get(`${process.env.REACT_APP_SERVER_URL}/api/events`)
    //         .then(response => {
    //             this.setState({
    //                 events: response.data
    //             })
    //         })
    // }

    // componentDidMount() {
    //     this.fetchData()
    // }

     componentDidUpdate(prevProps) {
         if (prevProps !== this.props) this.setState({ events: this.props.events })
     }
    render() {
        let day = this.props.location.pathname.replace(`${this.props.path}/`, "")
        console.log("Eventlist render")
        return (
            <div>
                <div className="container event-container">
                    {this.props.path === '/events-zurich'
                        ? this.state.events
                            .sort((a, b) => a.location.name.localeCompare(b.location.name))
                            .filter(event => {
                                return (
                                    event.location.city === 'Zürich' 
                                    && event.date === day
                                    && this.props.locations.find(location => event.location.name === location.name).selected === true
                                )
                            })
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
