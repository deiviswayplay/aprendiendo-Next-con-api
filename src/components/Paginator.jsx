"use client";
import { useRouter } from "next/navigation";

export default function Paginator({page = 1}) {
  const router = useRouter();

  const handLeNextPage = () => {
    router.push(`?page=${parseInt(page) + 1}`);
  };
  const handlePrevPage = () => {
    router.push(`?page=${parseInt(page) - 1}`);
  };

  return (
    <>
      {page > 1 && (
        <button className="bg-gray-600 p-3" onClick={handlePrevPage}>
          Anterior
        </button>
      )}
      <button className="bg-gray-600 p-3" onClick={handLeNextPage}>
        siguiente
      </button>
    </>
  )
}

    
