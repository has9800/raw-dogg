// imports
import Menu from "./Menu";
import GamesList from "./GamesList";
import SmGameCard from "./SmGameCard";
import { useEffect, useState } from "react";
import { useQuery } from "../context/SearchContext";

function Content() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { query } = useQuery();

  const fetchData = async () => {
    setLoading(true);

    await fetch("/api/games")
      .then((res) => res.json())
      .then((data) => setGames(data.results))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading page...</p>;

  return (
    <div className="flex flex-row text-white p-5">
      {console.log(query)}
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
