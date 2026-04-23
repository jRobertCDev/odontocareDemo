interface SummaryRow {
  label: string;
  value: number;
}
 
const SUMMARY: SummaryRow[] = [
  { label: "Consultas realizadas", value: 67 },
  { label: "Turnos cancelados",    value: 5  },
  { label: "Pacientes nuevos",     value: 12 },
  { label: "Turnos por web",       value: 18 },
];
 
export default function SummaryPanel() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4">
      <p className="text-gray-800 font-semibold text-sm mb-2">Resumen del mes</p>
      {SUMMARY.map((row, i) => (
        <div key={i} className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-gray-400 text-xs">{row.label}</span>
          <span className="text-gray-800 text-sm font-bold">{row.value}</span>
        </div>
      ))}
    </div>
  );
}
 