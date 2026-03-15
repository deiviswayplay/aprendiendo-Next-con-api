"use client"
import {useRouter} from "next/navigation"

export default function SearchGames() {
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`?name=${e.target.nombre.value}&page=1`);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="nombre" placeholder="buscar.."/>
        </form>
    )
}