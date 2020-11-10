import React, { createRef, Component } from 'react'
import { Map as LeafletMap, TileLayer, Marker } from 'react-leaflet'
import Popup from 'react-leaflet-editable-popup'
import {blueIcon,redIcon} from './Icons'
import Search from "react-leaflet-search";
import firebaseconfig from './firebaseconfig'


type State = {
    hasLocation: boolean,
    latlng: {
        lat: number,
        lng: number,
    },
}


class Map extends Component<{},State>{

    state = {
        hasLocation: false,
        latlng: {
            lat: 38.0018,
            lng: 23.7423,
        },
    }
    mapRef = createRef();

    removeMarker = () => {
        this.mapRef.current.leafletElement.closePopup()

        this.setState({
            hasLocation: false,
            latlng: null
        })
    }

    handleClick = () => {
        const map = this.mapRef.current
        if (map != null) {
            map.leafletElement.locate()
        }
        if (this.state.hasLocation){
            map.leafletElement.flyTo(this.state.latlng,13)
        }



    }
    handleLocationFound = (e: Object) => {
        this.setState({
            hasLocation: true,
            latlng: e.latlng,
        })
        this.mapRef.current.leafletElement.flyTo(this.state.latlng,13)
    }

    render(){
        const marker = this.state.hasLocation ? (
            <Marker position={this.state.latlng} icon={blueIcon}>
                <Popup removable editable
                       removalCallback={ () => { this.removeMarker() } }>
                    You are here and can edit this!
                </Popup>
            </Marker>
        ) : null
        return (
            <LeafletMap doubleClickZoom={false} id="mapId" zoom={11} center={[38,23.74]}
                        onLocationfound={this.handleLocationFound}
                        ref={this.mapRef}>

                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {marker}
                <Search position="topleft" markerIcon={redIcon} zoom={14}/>
                <button id="findMe" onClick={ this.handleClick }>Find my location</button>
            </LeafletMap>


        )
    }


}

export default Map