import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'

const position = [34.0027714, -117.9472975]

import 'leaflet/dist/leaflet.css'

import marker from '../../public/assets/pin.png';
import { Icon } from 'leaflet'
const myIcon = new Icon({
 iconUrl: '../../public/assets/pin.png',
 iconSize: [32,32]
})

const MapComponent = () => {
  return (
    <div>
      <MapContainer center={[34.0027714, -117.9472975]} zoom={13}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[34.0027714, -117.9472975]}>
    <Popup>
      Blinker
    </Popup>
  </Marker>
</MapContainer>
    </div>
  )
}

export default MapComponent
