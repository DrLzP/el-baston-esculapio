// src/app/chuletario/iamcest/page.tsx
export default function IAMCESTPage() {
  return (
    <main className="prose lg:prose-xl max-w-3xl mx-auto py-10">
      <h1>IAM con Elevación del ST (IAMCEST)</h1>

      <h2>1. Diagnóstico</h2>
      <ul>
        <li>Dolor torácico típico >20 minutos</li>
        <li>Elevación persistente del ST en 2 derivaciones contiguas:</li>
        <ul>
          <li>&ge; 2 mm en V2-V3 (hombres <40 años)</li>
          <li>&ge; 1.5 mm en V2-V3 (mujeres)</li>
          <li>&ge; 1 mm en otras derivaciones</li>
        </ul>
        <li>Bloqueo de rama izquierda nuevo con clínica compatible</li>
      </ul>

      <h2>2. Manejo inicial (ABCDE)</h2>
      <ul>
        <li>Asegurar vía aérea</li>
        <li>Oxígeno si SatO2 &lt; 90%</li>
        <li>Monitorización ECG + TA</li>
        <li>Vía venosa periférica x2</li>
        <li>Analgésia: morfina si dolor intenso</li>
        <li>Antiagregación: AAS 300 mg + Ticagrelor 180 mg o Clopidogrel 600 mg</li>
        <li>Anticoagulación: Enoxaparina o Heparina no fraccionada</li>
      </ul>

      <h2>3. Reperfusión urgente</h2>
      <ul>
        <li><strong>Primera elección:</strong> angioplastia primaria &lt;120 minutos</li>
        <li><strong>Alternativa:</strong> fibrinólisis (tenecteplasa) si no hay acceso a angioplastia inmediata</li>
        <li>Tras fibrinólisis exitosa, coronariografía en 2-24 h</li>
      </ul>

      <h2>4. Cuidados posteriores</h2>
      <ul>
        <li>Betabloqueantes si no hay contraindicaciones</li>
        <li>IECA/ARA II, estatinas de alta intensidad</li>
        <li>Control estricto de factores de riesgo cardiovascular</li>
      </ul>

      <p className="text-sm text-gray-500 mt-10">Última actualización: 2025</p>
    </main>
  );
}
