"use client";

import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "@/lib/leaflet";
import { LatLngExpression } from "leaflet";

type Props = {
  geometry: {
    type: "Point" | "Polygon";
    coordinates: number[] | number[][];
  };
  title: string;
};

export default function EventMapClient({ geometry, title }: Props) {
  if (geometry.type === "Point") {
    const [lon, lat] = geometry.coordinates as number[];

    return (
      <MapContainer
        center={[lat, lon]}
        zoom={6}
        className="h-64 w-full rounded-lg"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker position={[lat, lon]}>
          <Popup>{title}</Popup>
        </Marker>
      </MapContainer>
    );
  }

  const positions = (geometry.coordinates as number[][]).map(([lon, lat]) => [
    lat,
    lon,
  ]);

  return (
    <MapContainer
      center={positions[0] as LatLngExpression}
      zoom={5}
      className="h-64 w-full rounded-lg"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Polygon positions={positions as LatLngExpression[]} />
    </MapContainer>
  );
}
