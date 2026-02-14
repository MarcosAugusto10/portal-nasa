import { EONETEvent } from "@/types/eonet";
import EventCard from "./EventCard";

type Props = {
  events: EONETEvent[];
};

export default function EventList({ events }: Props) {
  return (
    <main>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.map((event: EONETEvent) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </main>
  );
}
