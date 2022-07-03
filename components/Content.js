// imports
import Menu from "./Menu";
import GamesList from "./GamesList";

function Content() {
  return (
    <div className="flex flex-row items-start text-white max-h-screen p-5">
      {/* <h1 className="border-r-white bg-slate-500 h-screen hidden md:block md:w-1/3">
        Menu
      </h1> */}
      <Menu />
      {/* <h1 className="bg-neutral-800 w-full h-screen">Games</h1> */}
      <GamesList />
    </div>
  );
}

export default Content;
