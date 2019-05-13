import React from "react";
import axios from "axios";

class AddLocation extends React.Component {
  state = {
    name: "",
    city: "",
    GPS: {
      lat: "",
      long: ""
    },
    address: ""
  };

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "lat" || name === "long") {
      this.setState({
        GPS: {
          [name]:value
        }});
    } else {
      this.setState({
        [name]: value
      });
    }
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/locations`,
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
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>name</label>
            <input
              className="form-control"
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
              type="text"
            />
          </div>
          <div className="form-group">
            <label>city</label>
            <input
              className="form-control"
              value={this.state.city}
              onChange={this.handleChange}
              type="text"
              name="city"
            />
          </div>
          <div className="form-group">
            <label>GPS lat</label>
            <input
              className="form-control"
              value={this.state.GPS.lat}
              onChange={this.handleChange}
              type="text"
              name="lat"
            />
          </div>
          <div className="form-group">
            <label>GPS long</label>
            <input
              className="form-control"
              value={this.state.GPS.long}
              onChange={this.handleChange}
              type="text"
              name="long"
            />
          </div>
          <div className="form-group">
            <label>address</label>
            <input
              className="form-control"
              value={this.state.address}
              onChange={this.handleChange}
              type="text"
              name="address"
            />
          </div>
          <input
            className="btn btn-primary"
            type="submit"
            value="Add Location"
          />
        </form>
      </div>
    );
  }
}

export default AddLocation;
