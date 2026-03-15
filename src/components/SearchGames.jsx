"use client"
import {useRouter} from "next/navigation"
import styles from "./SearchGames.module.css";

export default function SearchGames() {
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`?name=${e.target.nombre.value}&page=1`);
    }
    return (
        <form className={styles.buscador} onSubmit={handleSubmit}>
            <input type="text" name="nombre" placeholder="Buscar juegos..."/>
        </form>
    )
}