interface Cita {
  hora: string;
  nombre: string;
  tratamiento: string;
  estado: "confirmado" | "pendiente" | "web";
  avatarColor: string;
}
 
function StatusBadge({ estado }: { estado: Cita["estado"] }) {
  const styles = {
    confirmado: "bg-green-100 text-green-600",
    pendiente:  "bg-yellow-100 text-yellow-600",
    web:        "bg-blue-100 text-blue-600",
  };
  const labels = {
    confirmado: "Confirmado",
    pendiente:  "Pago pend.",
    web:        "Web — nuevo",
  };
  return (
    <span className={`${styles[estado]} text-xs font-semibold px-2 py-1 rounded-md whitespace-nowrap`}>
      {labels[estado]}
    </span>
  );
}
 
function CitaItem({ hora, nombre, tratamiento, estado, avatarColor }: Cita) {
  const initials = nombre.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
  return (
    <div className="flex items-center gap-3 py-3 border-b border-gray-100">
      <span className="text-gray-400 text-xs w-10 shrink-0 font-mono">{hora}</span>
      <div className={`${avatarColor} w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0`}>
        {initials}
      </div>
      <div className="flex-1">
        <p className="text-gray-800 text-sm font-semibold">{nombre}</p>
        <p className="text-gray-400 text-xs">{tratamiento}</p>
      </div>
      <StatusBadge estado={estado} />
    </div>
  );
}
 
const CITAS: Cita[] = [
  { hora: "09:00", nombre: "María López",     tratamiento: "Extracción molar",        estado: "confirmado", avatarColor: "bg-green-400" },
  { hora: "10:00", nombre: "Juan Pérez",      tratamiento: "Implante — seguimiento",  estado: "confirmado", avatarColor: "bg-blue-400" },
  { hora: "11:30", nombre: "Sofía Ríos",      tratamiento: "Ortodoncia — mensual",    estado: "pendiente",  avatarColor: "bg-yellow-400" },
  { hora: "14:00", nombre: "Carlos Medina",   tratamiento: "Tratamiento de conducto", estado: "confirmado", avatarColor: "bg-purple-400" },
  { hora: "15:30", nombre: "Laura Fernández", tratamiento: "Consulta inicial",        estado: "web",        avatarColor: "bg-red-400" },
];
 
export default function CitaList() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 flex-1">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-800 font-semibold text-sm">Turnos de hoy</span>
        <span className="text-green-500 text-xs cursor-pointer">Ver agenda completa</span>
      </div>
      {CITAS.map((a, i) => <CitaItem key={i} {...a} />)}
    </div>
  );
}