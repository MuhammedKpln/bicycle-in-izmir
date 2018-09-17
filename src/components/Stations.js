import React, { Component } from 'react';
import Header from './Header'
import axios from 'axios'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
class Stations extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stations: []
        }
    }

    componentDidMount() {
        axios.get("https://api.citybik.es//v2/networks/melbourne-bike-share")
            .then((response) => {
                this.setState({
                    stations: response.data.network.stations
                })
            });
    }

    render() {
        return (
            <div>
                <Header />
                <div class="list">
                    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA8qnlPqw03vGanFRlxOBZTDs68DZfWRnE" async="" defer=""></script>
                    <div class="container">
                        <div class="col" style={{ overflowY: 'scroll' }}>
                            <ul>
                                {
                                    this.state.stations.map((station) => {
                                        return <li>
                                            <div>
                                                <h2>{station.name}</h2>
                                                <div>
                                                    <h4>Total stations: </h4>
                                                    <span>{station.extra.slots}</span>
                                                </div>
                                                <div>
                                                    <h4>Total bicycles: </h4>
                                                    <span>{station.empty_slots}</span>
                                                </div>
                                            </div>
                                            <div style={{ height: '50px' }}></div>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                        <div class="col">
                            <Map googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `100%` }} />}
                                mapElement={<div style={{ height: `100%` }} />} stations={this.state.stations}></Map>
                        </div>
                    </div>
                </div >
            </div>
        );
    }

}


const Map = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: -37.826246, lng: 145.010307 }}
    >
        {
            props.stations.map((station) => {
                return <Marker position={{ lat: station.latitude, lng: station.longitude }} clickable defaultIcon="https://image.ibb.co/kkADRy/marker_icon.png" />
            })
        }
    </GoogleMap>
))
export default Stations;
