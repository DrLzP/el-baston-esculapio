'use client';

import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const tabs = [
    { label: "Chuletario", path: "/chuletario" },
    { label: "Calculadoras", path: "/calculadoras" },
    { label: "Consulta AP", path: "/primaria" },
    { label: "Diagnóstico", path: "/diagnostico" },
    { label: "Técnicas", path: "/tecnicas" },
    { label: "Fármacos", path: "/farmacos" },
    { label: "Perfusiones", path: "/perfusiones" },
  ];

  const [active, setActive] = useState("Chuletario");

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">El Bastón de Esculapio</h1>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {tabs.map((tab) => (
            <Link
              key={tab.label}
              href={tab.path}
              className={\`px-4 py-2 rounded-full text-sm font-medium transition border border-blue-700 \${active === tab.label ? "bg-blue-700 text-white" : "text-blue-700 hover:bg-blue-100"}\`}
              onClick={() => setActive(tab.label)}
            >
              {tab.label}
            </Link>
          ))}
        </div>

        <div className="text-center text-gray-600">
          <p className="text-lg">Selecciona una pestaña para acceder a herramientas clínicas, algoritmos y calculadoras.</p>
        </div>
      </div>
    </main>
  );
}
