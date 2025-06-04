export default function HomePage() {
  return (
    <main className="p-10 min-h-screen bg-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Bienvenido a El Bastón de Esculapio
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Portal de referencia clínica con chuletas, calculadoras y algoritmos interactivos para urgencias y atención primaria.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="/chuletario" className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-blue-700">Chuletario</h2>
            <p className="text-sm text-gray-500 mt-2">Protocolos por patología</p>
          </a>

          <a href="/calculadoras" className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-green-700">Calculadoras</h2>
            <p className="text-sm text-gray-500 mt-2">Escalas y scores médicos</p>
          </a>

          <a href="/primaria" className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-purple-700">Consulta AP</h2>
            <p className="text-sm text-gray-500 mt-2">Algoritmos interactivos</p>
          </a>
        </div>
      </div>
    </main>
  );
}
