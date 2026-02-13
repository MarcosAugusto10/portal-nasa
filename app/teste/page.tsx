export default async function Teste() {
  const response = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events?source=InciWeb,EO')
  const data = await response.json()
  return (
    <ul>
      {data.events.map((event) => (
        <li key={event.id}>{event.title}</li>
      ))}
    </ul>
  )
}