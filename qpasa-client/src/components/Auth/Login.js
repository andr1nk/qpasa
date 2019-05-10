import React from "react";
import { login } from "../../services/auth";
import { Link } from 'react-router-dom';

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { username, password } = this.state;

    login(username, password).then(user => {
      this.props.setUser(user);
      this.props.history.push('/')
    });
  };

  render() {
    return (
      <div style={{ margin: "70px" }}>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>username</label>
            <input
              type="text"
              name="username"
              onChange={this.handleChange}
              value={this.state.username}
            />
          </div>
          <div>
            <label>password</label>
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </div>

          <input type="submit" value="login" />
        </form>
        <div>
          <br/>
          <p>Dont have an account yet?</p>
          <Link to="/signup" className="nav-link">
            Sign up
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;
