import React from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'

class Location extends React.Component {
    state = {
        viewport: {
            width: 345,
            height: 300,
            latitude: parseFloat(this.props.latitude),
            longitude: parseFloat(this.props.longitude),
            zoom: 15
        }
    }

    render() {
        return (
            <ReactMapGL
                mapStyle="mapbox://styles/mapbox/bright-v8"
                mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKE}
                {...this.state.viewport}
                onViewportChange={viewport => this.setState({ viewport })}
            >
                <Marker latitude={this.state.viewport.latitude} longitude={this.state.viewport.longitude} draggable>
                    <i className="fas fa-map-marker-alt" />
                </Marker>
            </ReactMapGL>
        )
    }
}

export default Location
