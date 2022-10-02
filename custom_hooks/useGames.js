import { useState, useEffect } from "react";

// fetch list of games
export const useGames = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    await fetch("/api/games")
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    loading,
    error,
    games,
  };
};
