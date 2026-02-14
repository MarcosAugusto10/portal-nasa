import EventList from "@/components/EventList";
import { EONETEvent } from "@/types/eonet";

export default async function NaturalEventsPage() {
  const response = await fetch(
    "https://eonet.gsfc.nasa.gov/api/v2.1/events?source=InciWeb,EO",
  );
  const data = await response.json();
  return (
    <main className="flex flex-col gap-6">
      <h1 className="font-bold text-2xl">Eventos Naturais</h1>
      <EventList events={data.events as EONETEvent[]} />
    </main>
  );
}
