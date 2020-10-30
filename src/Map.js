import React from 'react'
import { Map as LeafletMap, TileLayer, Marker } from 'react-leaflet'
import Popup from 'react-leaflet-editable-popup'
import {blueIcon} from './Icons'


class Map extends React.Component{

    // constructor() {
    //     super()
    //     this.state = {
    //         lat: 38.0018,
    //         lng: 23.7423,
    //         zoom: 13
    //     }
    // }

    render(){
        const position = [38.0018, 23.7423];
        return (
            <LeafletMap doubleClickZoom={false} id="mapId" zoom={13} center={[38.0018, 23.7423]}  >

                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={position} icon={blueIcon}>
                    <Popup maxWidth="600" removable editable >
                        Removable editable popup
                    </Popup>
                </Marker>

                <Marker position={[38.01, 23.74]} icon={blueIcon}  >
                    <Popup removable>
                        A removable popup
                    </Popup>
                </Marker>

                <Marker position={[38.015, 23.75]} icon={blueIcon}>
                    <Popup maxWidth="500" editable>
                        Editable popup
                    </Popup>
                </Marker>
            </LeafletMap>


        )
    }


}

export default Map