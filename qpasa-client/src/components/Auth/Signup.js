import React from 'react'
import './Signup.css'
import { signup } from '../../services/auth'

class Signup extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault()

        const { username, password } = this.state

        signup(username, password).then(user => {
            this.props.setUser(user)
            this.props.history.push('/')
        })
    }

    render() {
        return (
            <div className="container auth-container">
                <h1 className="text-center">Signup</h1>
                <form className="col-md-8 offset-md-2" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>username: </label>
                        <input
                            className="form-control"
                            value={this.state.username}
                            onChange={this.handleChange}
                            type="text"
                            name="username"
                        />
                    </div>
                    <div className="form-group">
                        <label>password: </label>
                        <input
                            className="form-control"
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                            name="password"
                        />
                    </div>
                    <button type="submit" className="btn btn-outline-dark" value="signup">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default Signup
