import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import EditLocation from './Edit'

class LocationDetails extends React.Component {
  state = {
    location: {}
  };

  getLocation = () => {
    const id = this.props.match.params.id;

    axios
      .get(`${process.env.REACT_APP_API_URL}/api/locations/${id}`, {
        withCredentials: true
      })
      .then(response => {
        this.setState({
          location: response.data
        });
      });
  };

  deleteLocation = () => {
    console.log('delete method called')
    const id = this.props.match.params.id;

    axios.delete(`${process.env.REACT_APP_API_URL}/api/locations/${id}`).then(response => {
      // redirects to /projects
      this.props.history.push("/locations");
    });
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { location } = this.state;
    console.log('render called: ', location)
    let editBlock = <></>;

      editBlock = (
        <div>
          <EditLocation location={location} getLocation={this.getLocation} />
          <button
            style={{ marginTop: "10px" }}
            className="btn btn-danger"
            onClick={this.deleteLocation}
          >
            Delete Location
          </button>
        </div>
      );

    return (
      <div style={{ margin: '70px' }}>
        <h2>{location.name}</h2>
        <p>{location.city}</p>

        {editBlock}
        <br />
        <Link to="/locations">Back</Link>
      </div>
    );
  }
}

export default LocationDetails;
