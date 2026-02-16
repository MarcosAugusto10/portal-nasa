import EventsFlires from "@/components/EventsFlires";

export default async function ErupcaoSolar() {
  const response = await fetch(
    "https://api.nasa.gov/DONKI/FLR?api_key=Eoe2cXu98FEadNhvnhwH2EzbXMfjK6xT0RE4hzgs"
  );
  const data = await response.json();
  const sortedData = [...data].sort((a, b) => {
    return new Date(b.beginTime).getTime() - new Date(a.beginTime).getTime();
  });
  return (
    <main className="p-6">
      <h1 className="font-bold text-2xl mb-6">Erupções Solares</h1>
      <div className="bg-blue-950 border border-blue-700 rounded-2xl p-4 shadow-md">
        <h2 className="text-lg font-bold mb-3 text-white">
          🔥 Classificação das Erupções Solares
        </h2>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-red-600"></span>
            <span className="text-gray-200">
              <strong>Vermelho (Classe X)</strong> — Alta / Grave
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-orange-500"></span>
            <span className="text-gray-200">
              <strong>Laranja (Classe M)</strong> — Média / Forte
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-yellow-500"></span>
            <span className="text-gray-200">
              <strong>Amarelo (Classe C)</strong> — Baixa / Moderada
            </span>
          </div>

        </div>

      </div>
      <br/>
      <EventsFlires events={sortedData} />
    </main>
  );
}