export default function HomePage() {
  const secciones = [
    { nombre: "Chuletario", path: "/chuletario", color: "bg-blue-100", desc: "Protocolos urgentes" },
    { nombre: "Calculadoras", path: "/calculadoras", color: "bg-green-100", desc: "Scores y fórmulas médicas" },
    { nombre: "Consulta AP", path: "/primaria", color: "bg-purple-100", desc: "Algoritmos de atención primaria" },
    { nombre: "Diagnóstico", path: "/diagnostico", color: "bg-orange-100", desc: "Interpretación de pruebas" },
    { nombre: "Técnicas", path: "/tecnicas", color: "bg-teal-100", desc: "Procedimientos clínicos" },
    { nombre: "Fármacos", path: "/farmacos", color: "bg-pink-100", desc: "Dosis y usos" },
    { nombre: "Perfusiones", path: "/perfusiones", color: "bg-cyan-100", desc: "Esquemas de infusión" }
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">El Bastón de Esculapio</h1>
        <p className="text-lg text-gray-600 mb-12">Tu repositorio visual de herramientas clínicas</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {secciones.map((sec) => (
            <a key={sec.nombre} href={sec.path} className={`p-6 rounded-2xl shadow-md hover:shadow-lg transition ${sec.color}`}>
              <h2 className="text-2xl font-semibold text-gray-800">{sec.nombre}</h2>
              <p className="mt-2 text-gray-600 text-sm">{sec.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
