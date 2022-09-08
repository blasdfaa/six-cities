import { MapContainer, TileLayer } from 'react-leaflet';

const defaultMapOptions = {
  position: [51.505, -0.09],
  zoom: 13,
};

const LeafletMap = ({ className, zoom, scrollWheelZoom = false, center = [], children }) => {
  return (
    <MapContainer
      className={className}
      center={center ?? defaultMapOptions.position}
      zoom={zoom ?? defaultMapOptions.zoom}
      scrollWheelZoom={scrollWheelZoom}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      {children}
    </MapContainer>
  );
};

export default LeafletMap;
