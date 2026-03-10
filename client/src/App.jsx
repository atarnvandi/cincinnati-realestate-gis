import { MapContainer, TileLayer } from 'react-leaflet'

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <MapContainer
        center={[39.1031, -84.5120]}
        zoom={12}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© OpenStreetMap contributors'
        />
      </MapContainer>
    </div>
  )
}

export default App