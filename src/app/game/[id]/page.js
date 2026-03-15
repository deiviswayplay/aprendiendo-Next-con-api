import { getGameById } from "@/actions/serverActions";
import Image from "next/image";
import styles from "./page.module.css";

export default async function Page({ params }) {
  const { id } = await params;
  
  const { name, background_image, rating, creator_count, description, released, genres, platforms, developers, publishers, tags, website } = await getGameById(id);

  return (
    <div className={styles.container}>
      <Image src={background_image}   alt={name} width={400} height={300} className = {styles.image} />
      <div className={styles.info}>
      <p className={styles.name} >Nombre del juego: {name}</p>
      <p className={styles.rating}>Rating: {rating}</p>
      <p className={styles.creators}>Cantidad de creadores: {creator_count}</p>
      <p className={styles.slug}>Slug: {id}</p>
      <p className={styles.description}>Descripción: Lorem ipsum dolor sit amet, consectetur.</p>
      <p className={styles.released}>Fecha de lanzamiento: 2023-01-01</p>
      <p className={styles.genres}>Géneros: Acción, Aventura</p>
      <p className={styles.platforms}>Plataformas: PC, PlayStation, Xbox</p>
      <p className={styles.developers}>Desarrolladores: Studio XYZ</p>
      <p className={styles.publishers}>Publicadores: Publisher ABC</p>
      <p className={styles.tags}>Etiquetas: Multijugador, Mundo Abierto</p>
      <p className={styles.website}>Sitio web: <a href="https://www.example.com" target="_blank">www.example.com</a></p>
        </div>

    </div>
  );
}
