import React from "react";
import AddLocation from "./Add";
import axios from "axios";
import { Link } from "react-router-dom";

class LocationList extends React.Component {

  state = {
    locations: []
  };

  getData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/locations`, { withCredentials: true })
      .then(response => {
        this.setState({
          locations: response.data
        });
      });
  };



  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "space-evenly", margin: '70px' }}>
        <div>
          {this.state.locations.map(location => {
            return (
              <div key={location._id}>
                <div>
                  <h2>{location.name}</h2>
                  <p>city: {location.city}</p>
                  <p>GPS lat: {location.GPS.lat}</p>
                  <p>GPS long: {location.GPS.long}</p>
                  <p>address: {location.address}</p>
                  <br />
                </div>
                <div>
                  <Link to={`/locations/${location._id}`} className="nav-link">
                    Update / Delete Location
                  </Link>
                </div>
              </div>
            );
          })}
          <div>
            <AddLocation props={this.props} getData={this.getData} />
          </div>
        </div>
      </div>
    );
  }
}

export default LocationList;
