import { FLIREEvent } from "@/types/flire"

type Props = {
  event: FLIREEvent
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleString("pt-BR", {
    dateStyle: "short",
    timeStyle: "medium",
  });
}
function getClassColor(classType: string) {
  const type = classType.charAt(0)

  if (type === "X") return "bg-red-600"
  if (type === "M") return "bg-orange-500"
  if (type === "C") return "bg-yellow-500"
  return "bg-blue-500"
}

export default function EventsFliresCard({ event }: Props) {
  return (
    <article
      className="flex flex-col h-full gap-6 bg-blue-900 p-4 rounded-2xl border border-blue-600">
      <div className="flex justify-between items-center mb-4">
        <span className={`px-3 py-1 text-sm font-bold rounded-full text-white ${getClassColor(event.classType)}`}>
          Classe {event.classType}
        </span>

        <span className="text-xs text-gray-400">
          {event.flrID}
        </span>
      </div>
      <div className="space-y-2 text-sm text-gray-200">
        <p><span className="font-semibold text-gray-400">Início:</span> {formatDate(event.beginTime)}</p>
        <p><span className="font-semibold text-gray-400">Pico:</span> {formatDate(event.peakTime)}</p>
        <p><span className="font-semibold text-gray-400">Fim:</span> {formatDate(event.endTime)}</p>
      </div>
        <a className="mt-auto bg-amber-500 hover:bg-amber-600 transition p-2 rounded-lg text-center font-semibold" target="_blank" rel="noopener noreferrer" href={event.link}>Ver Detalhes</a>
    </article>
  )
}