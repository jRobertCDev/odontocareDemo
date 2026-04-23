import { useState } from "react";
import { NavContent } from "./NavContent";

export default function Sidebar() {
  const [open,setOpen]=useState<boolean>(false)
  return (
    <>
    
       <aside className="hidden md:flex w-48 h-screen bg-white border-r border-gray-200  flex-col">
 
      {/* Logo */}
      <div className="hidden md:flex items-center gap-2 p-4 border-b border-gray-200">
        <div className="w-8 h-8 bg-green-400 rounded-lg flex items-center justify-center">🦷</div>
        <span className="font-bold text-sm text-gray-800">DentiGest</span>
      </div>
 
      {/* Nav */}
     <NavContent/>
 
      {/* Usuario */}
      <div className="flex items-center gap-2 p-4 border-t border-gray-200">
        <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center text-xs font-bold text-white shrink-0">DG</div>
        <span className="text-gray-500 text-sm">Dr. García</span>
      </div>
      

      
 
    </aside>
    <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-400 rounded-lg flex items-center justify-center">🦷</div>
            <span className="font-bold text-sm text-gray-800">DentiGest</span>
          </div>
          <button onClick={() => setOpen((v) => !v)} className="text-gray-500">
            {open ? "✕" : "☰"}
          </button>
        </div>
        {open && <NavContent />}
      </div>
    </>
    
  )
}
