import GamesCard from "./GamesCard";
import styles from "./GamesContainer.module.css";

export default function GamesContainer({ games }) {
  return (
    <div className={styles.container}>
      {games.length > 0 ? (
        games.map((game) => (
          <div key={game.id}>
            <GamesCard 
              backgroundColor={game.dominant_Color}
              title={game.name}
              games={game}
              image={game.background_image}
              id={game.id}
            />
          </div>
        ))
      ) : (
        <h2>No hay juegos</h2>
      )}
    </div>
  );
}
