import React from 'react'
import { login } from '../../services/auth'
import { Link } from 'react-router-dom'

class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = event => {
        const { name, value } = event.target

        this.setState({ [name]: value })
    }

    handleSubmit = event => {
        event.preventDefault()

        const { username, password } = this.state

        login(username, password).then(user => {
            this.props.setUser(user)
            this.props.history.push('/')
        })
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center">Login</h1>

                <form className="col-md-8 offset-md-2" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>username</label>
                        <input
                            className="form-control"
                            type="text"
                            name="username"
                            onChange={this.handleChange}
                            value={this.state.username}
                        />
                    </div>
                    <div className="form-group">
                        <label>password</label>
                        <input
                            className="form-control"
                            type="password"
                            name="password"
                            onChange={this.handleChange}
                            value={this.state.password}
                        />
                    </div>

                    <button type="submit" className="btn btn-outline-dark" value="login">
                        Submit
                    </button>
                </form>
                <div className="col-md-8 offset-md-2">
                    <p>Dont have an account yet?</p>
                    <Link to="/signup">Sign up</Link>
                </div>
            </div>
        )
    }
}

export default Login
