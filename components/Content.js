// imports
import Menu from "./Menu";
import GamesList from "./GamesList";
import SmGameCard from "./SmGameCard";
import { useQuery } from "../context/SearchContext";
import { useGames } from "../custom_hooks/useGames";

function Content() {
  const { query } = useQuery();
  const { loading, error, games } = useGames();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading page...</p>;

  return (
    <div className="flex flex-row text-white p-5">
      <Menu />
      <GamesList>
        {games?.map((game) => (
          <div key={game.id}>
            <SmGameCard
              title={game.name}
              bgImg={game.background_image}
              rating={game.rating}
            />
          </div>
        ))}
      </GamesList>
    </div>
  );
}

export default Content;
