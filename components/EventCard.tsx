"use client";
import EventMap from "./EventMap";

import { EONETEvent } from "@/types/eonet";

type Props = {
  event: EONETEvent;
};

export default function EventCard({ event }: Props) {
  const geometry = event.geometries[0];
  const [lon, lat] =
    geometry.type === "Point"
      ? (geometry.coordinates as number[])
      : [null, null];

  return (
    <article
      key={event.id}
      className="flex flex-col h-full gap-6 bg-blue-900 p-4 rounded-2xl border border-blue-600"
    >
      <h3 className="text-lg font-bold leading-tight">{event.title}</h3>
      <EventMap geometry={geometry} title={event.title} />
      {lat !== null && lon !== null && (
        <div className="text-sm text-amber-100">
          {lat.toFixed(3)}, {lon.toFixed(3)}
        </div>
      )}
      {event.sources.map(
        (source, index) =>
          source.id == "EO" && (
            <a
              key={index}
              href={source.url}
              className="mt-auto bg-amber-500 hover:bg-amber-600 transition p-2 rounded-lg text-center font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Evento
            </a>
          ),
      )}
    </article>
  );
}
