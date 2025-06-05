'use client';

import Link from "next/link";
import { useState } from "react";

export default function ChuletarioPage() {
  const tabs = [
    { label: "IAMCEST", path: "/chuletario/iamcest" },
    { label: "Código Sepsis", path: "/chuletario/códigosepsis" }
  ];
  const [active, setActive] = useState(tabs[0].label);

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Chuletario</h1>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {tabs.map((tab) => (
            <Link
              key={tab.label}
              href={tab.path}
              className={[
                "px-4 py-2 rounded-full text-sm font-medium transition border border-blue-700",
                active === tab.label ? "bg-blue-700 text-white" : "text-blue-700 hover:bg-blue-100"
              ].join(" ")}
              onClick={() => setActive(tab.label)}
            >
              {tab.label}
            </Link>
          ))}
        </div>

        <div className="text-center text-gray-600">
          <p className="text-lg">Selecciona una pestaña para continuar.</p>
        </div>
      </div>
    </main>
  );
}
