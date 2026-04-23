type StockLevel = "critical" | "low" | "ok";
 
interface StockItem {
  name: string;
  quantity: number;
  level: StockLevel;
}
 
const styles = {
  critical: { bar: "bg-red-400",    text: "text-red-400",    width: "w-1/6" },
  low:      { bar: "bg-yellow-400", text: "text-yellow-400", width: "w-1/3" },
  ok:       { bar: "bg-green-400",  text: "text-green-400",  width: "w-2/3" },
};
 
function StockItem({ name, quantity, level }: StockItem) {
  const s = styles[level];
  return (
    <div className="flex items-center gap-3 py-2 border-b border-gray-100">
      <span className="text-gray-800 text-sm flex-1">{name}</span>
      <div className="w-10 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div className={`${s.bar} ${s.width} h-full rounded-full`} />
      </div>
      <span className={`${s.text} text-xs font-mono w-8 text-right`}>{quantity} u.</span>
    </div>
  );
}
 
const STOCK: StockItem[] = [
  { name: "Anestesia",  quantity: 3,  level: "critical" },
  { name: "Sutura",     quantity: 8,  level: "low" },
  { name: "Resina",     quantity: 14, level: "ok" },
  { name: "Microbrush", quantity: 42, level: "ok" },
];
 
export default function StockPanel() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-800 font-semibold text-sm">Stock crítico</span>
        <span className="text-green-500 text-xs cursor-pointer">Ver todo</span>
      </div>
      {STOCK.map((s, i) => <StockItem key={i} {...s} />)}
    </div>
  );
}