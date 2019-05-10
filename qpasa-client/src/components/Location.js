import React from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'

class Location extends React.Component {
    state = {
        viewport: {
            width: 345,
            height: 300,
            latitude: 47.3748365,
            longitude: 8.5325012,
            zoom: 14
        }
    }

    render() {
        console.log(this.state)
        return (
            <ReactMapGL
                mapboxApiAccessToken= //TODO: as enviroment variable process.env.MAPBOX_ACCESS_TOK
                {...this.state.viewport}
                onViewportChange={viewport => this.setState({ viewport })}
            >
                <Marker latitude={this.state.viewport.latitude} longitude={this.state.viewport.longitude}>
                    <i className="fas fa-map-marker-alt" />
                </Marker>
            </ReactMapGL>
        )
    }
}

export default Location
