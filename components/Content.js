// imports
import Menu from "./Menu";
import GamesList from "./GamesList";
import SmGameCard from "./SmGameCard";

function Content({ data }) {
  console.log(data);
  return (
    <div className="flex flex-row items-start text-white max-h-screen p-5">
      {/* <h1 className="border-r-white bg-slate-500 h-screen hidden md:block md:w-1/3">
        Menu
      </h1> */}
      <Menu />
      <GamesList>
        {data?.map((game) => (
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
