interface StatCardProps {
  label: string;
  value: string;
  sub?: string;
  subColor?: string;
}
function StatCard({ label, value, sub, subColor = "text-green-500" }:StatCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 flex-1">
      <p className="text-gray-400 text-xs mb-2">{label}</p>
      <p className="text-gray-800 text-2xl font-bold">{value}</p>
      {sub && <p className={`${subColor} text-xs mt-2`}>{sub}</p>}
    </div>
  );
}
 
const STATS = [
  { label: "Turnos hoy",        value: "8",          sub: "▲ 2 más que ayer" },
  { label: "Pacientes totales", value: "342",         sub: "+5 este mes" },
  { label: "Cobrado este mes",  value: "$1.240.000",  sub: "▲ +12% vs marzo" },
  { label: "Deuda pendiente",   value: "$340.000",    sub: "▼ 3 pacientes", subColor: "text-red-400" },
];
 
export default function StatsGrid() {
  return (
    <div className="flex gap-3">
      {STATS.map((s, i) => <StatCard key={i} {...s} />)}
    </div>
  );
}