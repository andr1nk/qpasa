import React from "react";
import axios from "axios";

class AddLocation extends React.Component {
  state = {
    city: "",
    name: "",
    GPS: {
      lat: "",
      long: ""
    },
    address: ""
  };

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .post(
        "http://localhost:5000/api/locations",
        {
          city: this.state.city,
          name: this.state.name,
          GPS: {
            lat: this.state.GPS.lat,
            long: this.state.GPS.long
          },
          address: this.state.address
        },
        { withCredentials: true }
      )
      .then(() => {
        this.props.getData();
        this.setState({ title: "", description: "" });
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>title:</label>
            <input
              className="form-control"
              value={this.state.title}
              onChange={this.handleChange}
              name="title"
              type="text"
            />
          </div>
          <div className="form-group">
            <label>description:</label>
            <input
              className="form-control"
              value={this.state.description}
              onChange={this.handleChange}
              type="text"
              name="description"
            />
          </div>
          <input
            className="btn btn-primary"
            type="submit"
            value="Create Project"
          />
        </form>
      </div>
    );
  }
}

export default AddLocation;
