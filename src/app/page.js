import SearchGames from "@/components/SearchGames";
import { getGames, getGameTags } from "@/actions/serverActions";
import GamesContainer from "@/components/GamesContainer";
import Paginator from "@/components/Paginator";
import TagContainer from "@/components/tag-container";

export default async function Home({ params, searchParams }) {
  const resolvedParams = await params;
  const searchParamsResueltos = await searchParams;

  const page = searchParamsResueltos.page || 1;
  const name = searchParamsResueltos.name || "";
  const genresParam = searchParamsResueltos.genres;
  const genres = genresParam ? (Array.isArray(genresParam) ? genresParam : [genresParam]) : [];
  const { results: tags } = await getGameTags();

  const { results: juegos } = await getGames(page, name, genres);

  return (
    <>
     
      <SearchGames />
       <Paginator page={page} />
      <TagContainer tags={tags} />
      <GamesContainer games={juegos} />
    </>
  );
}
