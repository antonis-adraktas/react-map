import React from 'react'
import { Map as LeafletMap, TileLayer, Marker } from 'react-leaflet'
import Popup from 'react-leaflet-editable-popup'


class Map extends React.Component{

    constructor() {
        super()
        this.state = {
            lat: 51.505,
            lng: -0.09,
            zoom: 13
        }
    }

    render(){
        const position = [this.state.lat, this.state.lng];
        return (
            <LeafletMap doubleClickZoom={false} id="mapId" zoom={4} center={[33.852169, -100.5322]}  >

                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={position}>
                    <Popup maxWidth="600" removable editable >
                        Removable editable popup
                    </Popup>
                </Marker>

                <Marker position={[20.96176, -117.03529]}  >
                    <Popup removable>
                        A removable popup
                    </Popup>
                </Marker>

                <Marker position={[25.86176, -112.03529]}>
                    <Popup maxWidth="500" editable>
                        Editable popup
                    </Popup>
                </Marker>
            </LeafletMap>


        )
    }


}

export default Map