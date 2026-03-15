"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./tag-container.module.css";

export default function TagSidebarSlider({ tags }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handlePush = (id) => {
    router.push(`?tags=${id}&page=1`);
    setOpen(false); // cerrar menú después de elegir
  };

  return (
    <>
      {/* Botón abrir menú */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-5 left-5 bg-blue-500 text-white px-4 py-2 rounded z-50"
      >
        ☰ Filtrar
      </button>

      {/* Fondo oscuro */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[300px] bg-gray-900 text-white z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-3">
          {/* Botón cerrar */}
          <button
            onClick={() => setOpen(false)}
            className="mb-6 bg-red-500 px-3 py-1 rounded"
          >
            Cerrar
          </button>

          <h2 className="text-xl mb-2">🎮 </h2>

          {/* Lista de tags */}
          <ul className="space-y-1">
            {tags.map((tag) => (
              <li
                key={tag.id}
                onClick={() => handlePush(tag.id)}
                className="cursor-pointer bg-gray-700 p-2 rounded hover:bg-gray-600"
              >
                {tag.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
