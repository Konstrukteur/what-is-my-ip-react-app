import { useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import Label from "./Label";
import SearchComponent from "./SearchComponent";
import "leaflet/dist/leaflet.css";
import icon from "../images/marker.svg";

const Map = ({ position, setIp }) => {
  const positionIcon = L.icon({
    iconUrl: icon,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, 0],
  });
  console.log("Map", position);
  const latlong = [position.latitude, position.longitude];
  console.log("Map", latlong);
  return (
    <div className={"mapcontainer"}>
      {position.latitude && (
        <MapContainer center={latlong} zoom={15} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}'
            id='mapbox/dark-v10'
            accessToken='pk.eyJ1IjoicmF1bWVya3VuZGVyIiwiYSI6ImNrb2Vsanl3NzBkZTMyc29hZWkxdTdsdmMifQ.CbFqBFMtfx8gMgy6h9RgoA'
          />
          <Marker position={latlong} icon={positionIcon}>
            <Popup>
              <Label position={position} />
            </Popup>
          </Marker>
        </MapContainer>
      )}
      <SearchComponent setIp={setIp} />
    </div>
  );
};

export default Map;
