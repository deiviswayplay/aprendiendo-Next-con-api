"use server";

export const getGames = async (page = 1, name = "", genres) => {
  // console.log(process.env.API_KEY);
  const params = new URLSearchParams({
    page,
    search: name,
    key: process.env.API_KEY,
    
  });
  if (genres.length > 0){
    params.set('tags', genres)
  }

  const res = await fetch(`${process.env.API_URL}/games?${params}`, {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
    next: {
      revalidate: 60, // Revalida los datos cada 60 segundos
    },
  });
  const datos = await res.json();
  return datos;
};
export const getGameTrailers = async (id) => {
  const res = await fetch(
    `${process.env.API_URL}/games/${id}/movies?key=${process.env.API_KEY}`,
  );
  const datos = await res.json();
  return datos;
};

export const getGameTags = async () => {
  const res = await fetch(
    `${process.env.API_URL}/tags?key=${process.env.API_KEY}`,
  );
  const datos = await res.json();
  return datos;
};

export const getGameById = async (id) => {
  const res = await fetch(
    `${process.env.API_URL}/games/${id}?key=${process.env.API_KEY}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    },
  );
  const datos = await res.json();
  return datos;
};
