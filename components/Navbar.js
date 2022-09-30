import { useContext } from "react";
import { useQuery } from "../context/SearchContext";
// import { AiOutlineSearch } from "react-icons/ai";

function Navbar() {
  const { query, setQuery } = useQuery();

  return (
    <div className="flex flex-row items-center justify-between p-8">
      <div>
        <h1 className="text-sm font-bold tracking-wide">Games</h1>
      </div>
      <div className="w-1/2">
        <input
          type="text"
          placeholder="Search games"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full py-2 px-5 rounded-full outline-none text-[#fff] 
          search-bg placeholder:text-sm placeholder:font-light
          focus:ring-[1px] focus:ring-white hover:transition-all font-light"
        />
      </div>
      <div className="px-3">
        <button
          type="button"
          className="bg-gradient-to-b from-indigo-500 to-violet-900 rounded-md p-2 w-[80px]
          hover:scale-105 hover:transition-all text-xs uppercase"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;
