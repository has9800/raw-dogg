import SmGameCard from "./SmGameCard";

function GamesList() {
  const foo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="p-4">
      <div className="md:mx-5">
        <h1 className="text-5xl md:text-6xl font-bold">New & Trending</h1>
        <p className="mt-3 text-neutral-400 text-sm">
          New & trending games this month...
        </p>
      </div>
      <div className="flex flex-row flex-wrap">
        {foo.map((item) => (
          <div key={item}>
            <SmGameCard />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GamesList;
