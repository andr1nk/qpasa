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
      .get(`http://localhost:5000/api/locations/${id}`, {
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

    axios.delete(`http://localhost:5000/api/locations/${id}`).then(response => {
      // redirects to /projects
      this.props.history.push("/locations");
    });
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { location } = this.state;
    let editBlock = <></>;

      editBlock = (
        <div>
          <EditLocation location={location} getDetails={this.getLocation} />
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
        <h1>{location.city}</h1>
        <p>{location.name}</p>

        {location.tasks && location.tasks.length > 0 && <h3>Tasks</h3>}
        {location.tasks &&
          location.tasks.map(task => {
            return (
              <div key={task._id}>
                <Link to={`/tasks/${task._id}`}>{task.title}</Link>
              </div>
            );
          })}
        {editBlock}
        <br />
        <Link to="/projects">Back</Link>
      </div>
    );
  }
}

export default LocationDetails;
