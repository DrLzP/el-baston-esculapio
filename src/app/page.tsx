export default function HomePage() {
  return (
    <main className="p-10 min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Bienvenido a El Bastón de Esculapio
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Portal de referencia clínica con chuletas, calculadoras y algoritmos interactivos para urgencias y atención primaria.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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

          <a href="/diagnostico" className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-orange-600">Diagnóstico</h2>
            <p className="text-sm text-gray-500 mt-2">Pruebas e interpretación</p>
          </a>

          <a href="/tecnicas" className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-teal-700">Técnicas</h2>
            <p className="text-sm text-gray-500 mt-2">Procedimientos clínicos</p>
          </a>

          <a href="/farmacos" className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-rose-700">Fármacos</h2>
            <p className="text-sm text-gray-500 mt-2">Indicaciones y dosificación</p>
          </a>

          <a href="/perfusiones" className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-cyan-700">Perfusiones</h2>
            <p className="text-sm text-gray-500 mt-2">Esquemas de infusión</p>
          </a>
        </div>
      </div>
    </main>
  );
}
