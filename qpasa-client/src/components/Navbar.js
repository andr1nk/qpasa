import React from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../services/auth'
import moment from 'moment'

const day1 = moment(new Date()).format('DD.MM.YYYY') // Today

class Navbar extends React.Component {
    state = {
        loggedIn: this.props.loggedIn
    }

    componentDidUpdate(prevProps) {
        if (this.props.loggedIn !== prevProps.loggedIn) {
            this.setState({ loggedIn: this.props.loggedIn })
        }
    }

    handleLogout = () => {
        logout().then(() => {
            this.setState({ loggedIn: null })
            this.props.setUser(null)
        })
    }

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top">
                <a className="navbar-brand" href="/">
                    <span id="logo">Q'pasa</span>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/events-zurich/${day1}`} className="nav-link">
                                Zürich
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/events-berlin/${day1}`} className="nav-link">
                                Berlin
                            </Link>
                        </li>
                        {this.state.loggedIn ? (
                            <ul className="navbar-nav">
                                <li className="nav-item" onClick={this.handleLogout}>
                                    <Link to="/" className="nav-link">
                                        logout
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/locations" className="nav-link">
                                        locations
                                    </Link>
                                </li>
                            </ul>
                        ) : (
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/signup" className="nav-link">
                                        Sign up
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link">
                                        Login
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar
