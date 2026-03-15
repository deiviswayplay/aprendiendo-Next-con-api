import SearchGames from "@/components/SearchGames";
import { getGames, getGameTags } from "@/actions/serverActions";
import GamesContainer  from "@/components/GamesContainer";
import Paginator from "@/components/Paginator";
import TagContainer from "@/components/tag-container";




export default async function Home({params, searchParams}) {

  const resolvedParams = await params;
  const searchParamsResueltos= await searchParams;


  const page = searchParamsResueltos.page || 1;
  const name = searchParamsResueltos.name || "";
  const genres = searchParamsResueltos.tags || [];
 const {results: tags } = await getGameTags();

  const {results: juegos } = await getGames(page, name, genres); 
 
  return (
    <>
    <Paginator page={page} />
    <SearchGames/>
    <TagContainer tags={tags} />
    <GamesContainer games={juegos} 

    />
    <Paginator page={page} />
</>
  );
}



