import { getGameById, getGamesByGenre } from "@/actions/serverActions";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default async function Page({ params }) {
  const { id } = await params;

  const game = await getGameById(id);

  const genreSlug = game.genres[0].slug;
  // obtenemos el slug del primer género del juego para usarlo 
  // en la función getGamesByGenre y obtener juegos relacionados a ese género
  const suggestedGames = await getGamesByGenre(genreSlug);

  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        {/* lado izquierdo */}
        <div className={styles.left}>
          <Image
            src={game.background_image}
            alt={game.name}
            width={600}
            height={500}
            className={styles.image}
          />
        </div>
          {/* lado derecho */}
        <div className={styles.right}>
          <div className={styles.info}>
            <p className={styles.name}>Nombre del juego: {game.name}</p>
            
            
            <p>Fecha de lanzamiento: {game.released}</p>
             <p>
              Géneros:{" "}
              {game.genres.map((genre, index) => (
                <span key={genre.id}>
                  <Link href={`/?genres=${genre.slug}`}>{genre.name}</Link>
                  {index < game.genres.length - 1 ? ", " : ""}
                </span>
              ))}
              <p className={styles.raiting}> + {game.rating}</p>
            </p>
           
          </div>

          <h2 className={styles.title}> 🎮 Juegos recomendados</h2>
          <div className={styles.suggestions}>
            {suggestedGames.slice(0, 2).map((item) => (
              <Link key={item.id} href={`/game/${item.id}`}>
                <div className={styles.card}>
                  <Image
                    src={item.background_image}
                    alt={item.name}
                    width={200}
                    height={120}
                  />

                  <p>{item.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
// getGamesByGenre lo usamos para mostrar juegos relacionados al género del juego que estamos viendo, esto lo hacemos para mejorar 
// la experiencia del usuario y ofrecerle opciones similares a lo que le gusta. 
