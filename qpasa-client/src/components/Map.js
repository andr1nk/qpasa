import React from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'

class Map extends React.Component {
    state = {
        viewport: {
            width: 345,
            height: 300,
            latitude: this.props.latitude,
            longitude: this.props.longitude,
            zoom: 14
        }
    }

    render() {
        console.log(this.state)
        return (
            <ReactMapGL
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
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

export default Map
