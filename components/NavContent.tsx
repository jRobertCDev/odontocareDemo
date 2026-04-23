export const NavContent = () => (
    <nav className="flex-1 p-2 flex flex-col gap-1 pt-4">
      <p className="text-gray-400 text-[10px] font-semibold tracking-widest px-2 mb-1">PRINCIPAL</p>
      <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-400 text-white text-sm font-semibold w-full text-left">⊞ Inicio</button>
      <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-500 text-sm w-full text-left hover:bg-gray-100">👤 Pacientes</button>
      <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-500 text-sm w-full text-left hover:bg-gray-100">□ Agenda</button>
      <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-500 text-sm w-full text-left hover:bg-gray-100">+ Nuevo Turno</button>

      <p className="text-gray-400 text-[10px] font-semibold tracking-widest px-2 mt-4 mb-1">GESTIÓN</p>
      <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-500 text-sm w-full text-left hover:bg-gray-100">≡ Historia clínica</button>
      <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-500 text-sm w-full text-left hover:bg-gray-100">★ Stock</button>
      <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-500 text-sm w-full text-left hover:bg-gray-100">◎ Pagos</button>
    </nav>
  );