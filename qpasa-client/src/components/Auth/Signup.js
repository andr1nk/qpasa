import React from "react";
import './Signup.css'
import { signup } from "../../services/auth";


class Signup extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { username, password } = this.state;

    signup(username, password).then(user => {
      this.props.setUser(user);
      this.props.history.push('/')
    });
  };

  render() {
    return (
      <div className='container'> 
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>username: </label>
            <input
              value={this.state.username}
              onChange={this.handleChange}
              type="text"
              name="username"
            />
          </div>
          <div>
            <label>password: </label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
            />
          </div>
          <input type="submit" value="signup" />
        </form>
      </div>
    );
  }
}

export default Signup;
