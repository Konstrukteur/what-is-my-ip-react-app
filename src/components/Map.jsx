// import { MapContainer } from "https://cdn.esm.sh/react-leaflet/MapContainer";
// import { TileLayer } from "https://cdn.esm.sh/react-leaflet/TileLayer";
// import { useMap } from "https://cdn.esm.sh/react-leaflet/hooks";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import Label from "./Label";

const Map = ({ position }) => {
  console.log("Map", position);
  const latlong = [position.latitude, position.longitude];
  console.log("Map", latlong);
  return (
    <div>
      {position.latitude && (
        <MapContainer center={latlong} zoom={15} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}'
            id='mapbox/dark-v10'
            accessToken='pk.eyJ1IjoicmF1bWVya3VuZGVyIiwiYSI6ImNrb2Vsanl3NzBkZTMyc29hZWkxdTdsdmMifQ.CbFqBFMtfx8gMgy6h9RgoA'
          />
          <Marker position={latlong}>
            <Popup>
              <Label position={position} />
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default Map;
