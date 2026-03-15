"use client";
import { useRouter } from "next/navigation";
import styles from "./Paginator.module.css";

export default function Paginator({ page = 1 }) {
  const router = useRouter();

  const handLeNextPage = () => {
    router.push(`?page=${parseInt(page) + 1}`);
  };
  const handlePrevPage = () => {
    router.push(`?page=${parseInt(page) - 1}`);
  };

  return (
    <div className={styles.container}>

      {page > 1 && (
        <button className={styles.button} onClick={handlePrevPage}>
          Anterior
        </button>
      )}
      <button className={styles.button} onClick={handLeNextPage}>
        siguiente
      </button>
    </div>
  );
}
