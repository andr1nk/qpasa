import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import moment from 'moment'

const day1 = moment(new Date()).format('DD.MM.YYYY') // Today

class Home extends React.Component {
    render() {
        return (
            <div>
                <header className="teaser">
                    <p className="teaser-heading">¿qpasa?</p>
                </header>
                <div className="container">
                    <div className="col-md-10 offset-md-1">
                        <p className="description">
                            <h2 style={{textAlign: "center"}} >All your favourite parties with one click.</h2>
                            <br/>
                        </p>
                        <div className="buttons">
                            <button className="btn btn-lg btn-dark button">
                                <Link to={`/events-zurich/${day1}`} className="nav-link">
                                    Zürich
                                </Link>
                            </button>
                            <button className="btn btn-lg btn-dark button">
                                <Link to={`/events-berlin/${day1}`} className="nav-link">
                                    Berlin
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
