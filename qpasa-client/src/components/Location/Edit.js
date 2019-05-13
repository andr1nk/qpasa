import React from "react";
import axios from "axios";

class EditLocation extends React.Component {
  state = {
    location: {}
  };

  componentDidUpdate (prevProps, prevState){
    const location = this.props.location
    if (prevProps.location !== location) this.setState({location})
  }

  handleSubmit = event => {
    event.preventDefault();

    const id = this.props.location._id;

    axios
      .put(
        `${process.env.REACT_APP_SERVER_URL}/api/locations/${id}`,
        {
          city: this.state.location.city,
          name: this.state.location.name,
          GPS: {
            lat: this.state.location.GPS.lat,  
            long: this.state.location.GPS.long
          },
          address: this.state.location.address
        },
        { withCredentials: true }
      )
      .then(() => {
        this.props.getLocation();
        this.setState({
          location: {}
        });
      });
  };

  handleChange = event => {
    
    const name = event.target.name;
    const value = event.target.value;


    if (name === "lat" || name === "long") {
      this.setState({
        location: {
          ...this.state.location,
          GPS: {
            ...this.state.location.GPS,
            [name]: value
          }
        }
      })}
     else{   this.setState({
        location: {
        ...this.state.location,
        [name]: value
         }
      });
    }
    console.log(this.state)
};



  render() {
    
    return (
      <div>
        <hr />
        <h3>Edit form</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>name:</label>
            <input
              className="form-control"
              value={this.state.location.name}
              onChange={this.handleChange}
              name="name"
              type="text"
            />
          </div>
          <div className="form-group">
            <label>city:</label>
            <input
              className="form-control"
              value={this.state.location.city}
              onChange={this.handleChange}
              type="text"
              name="city"
            />
          </div>
          <div className="form-group">
            <label>GPS lat:</label>
            <input
              className="form-control"
              value={this.state.location.GPS && this.state.location.GPS.lat}
              onChange={this.handleChange}
              type="text"
              name="lat"
            />
          </div>
          <div className="form-group">
            <label>GPS long:</label>
            <input
              className="form-control"
              value={this.state.location.GPS && this.state.location.GPS.long}
              onChange={this.handleChange}
              type="text"
              name="long"
            />
          </div>
          <div className="form-group">
            <label>address:</label>
            <input
              className="form-control"
              value={this.state.location.address}
              onChange={this.handleChange}
              type="text"
              name="address"
            />
          </div>
          <input
            className="btn btn-primary"
            type="submit"
            value="Update Project"
          />
        </form>
      </div>
    );
  }
}

export default EditLocation;
