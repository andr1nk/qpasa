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
      .get("http://localhost:5000/api/locations", { withCredentials: true })
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
    console.log(this.state.locations)
    return (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          {this.state.locations.map(location => {
            return (
              <div key={location._id}>
                <h1>{location.city}</h1>
                <p>{location.name}</p>
                {/* <p>{location.GPS.lat}</p>
                <p>{location.GPS.long}</p> */}
                <p>{location.adress}</p>
                <br/>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default LocationList;
