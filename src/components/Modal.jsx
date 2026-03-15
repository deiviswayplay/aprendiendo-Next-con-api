"use client";

import { useState } from "react";


export default function SidebarSlider() {
  const [open, setOpen] = useState(false);

  return (
    <>
      Botón abrir
      <button
        onClick={() => setOpen(true)}
        className="fixed top-5 left-5 bg-blue-500 text-white px-4 py-2 rounded"
      >
        ☰ Menu
      </button>

      {/* Fondo oscuro */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* Slider  */}
      <div
        className={`fixed top-0 left-0 h-full w-[300px] bg-gray-900 text-white z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <button
            onClick={() => setOpen(false)}
            className="mb-6 bg-red-500 px-3 py-1 rounded"
          >
            Cerrar
          </button>

          <ul className="space-y-4">
            <li>🎮 </li>
            <li>🔥 </li>
            <li>⭐ </li>
            <li>  </li>
          </ul>
        </div>
      </div>
    </>
  );
}
