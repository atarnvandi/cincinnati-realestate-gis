import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import cincinnatizips from './cincinnati_zip_codes.json'

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <MapContainer
        center={[39.1031, -84.5120]}
        zoom={11}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© OpenStreetMap contributors'
        />
        <GeoJSON
          data={cincinnatizips}
          style={{
            color: '#2E6DA4',
            weight: 2,
            fillColor: '#90b4d4',
            fillOpacity: 0.3,
          }}
        />
      </MapContainer>
    </div>
  )
}

export default App