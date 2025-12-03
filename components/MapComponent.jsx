"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import markerImg from "../assets/mitka.svg";

const markerIcon = new L.Icon({
  iconUrl: markerImg.src,
  iconRetinaUrl: markerImg.src,
  iconSize: [55, 65],
  iconAnchor: [17, 45],
  popupAnchor: [0, -45],
  shadowSize: [45, 45],
});

export default function MapComponent() {
  return (
    <div className="flex flex-col justify-center items-center py-16 px-4 sm:px-10 bg-[#F9F9F9]">
      <h2 className="text-3xl sm:text-[50px] font-extrabold text-center text-[#1C1C1C] tracking-wide my-8 sm:my-12">
        Наша локація
      </h2>
      <div className="w-full max-w-[1000px] h-[300px] sm:h-[500px] rounded-[20px] sm:rounded-[30px] shadow-2xl overflow-hidden border-2 border-[#E4EDC0]">
        <MapContainer
          center={[49.888854308222285, 28.608064319451007]}
          zoom={16}
          scrollWheelZoom={false}
          className="h-full w-full"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker
            position={[49.888854308222285, 28.608064319451007]}
            icon={markerIcon}
          >
            <Popup>
              Школа №10, Semenivska St, 4, Berdychiv, Zhytomyr Oblast, 13300
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
