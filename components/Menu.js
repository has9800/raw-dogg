import React from "react";

function Menu() {
  return (
    <div className="md:flex md:flex-col md:justify-start md:items-start hidden md:mr-5 md:p-5">
      <div className="mb-5">
        <h1 className="text-3xl font-bold">New Releases 🎉</h1>
        <ul className="my-4">
          {["Last 30 Days", "This Week", "This Month"].map((item) => (
            <li
              className="my-2 cursor-pointer font-light text-sm text-gray-400 hover:text-indigo-500 hover:transition-all ease-in-out"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="my-5">
        <h1 className="text-3xl font-bold">Top 🚀</h1>
        <ul className="my-4">
          {["Best of the year", "Popular 2021", "All time top 250"].map(
            (item) => (
              <li
                className="my-2 cursor-pointer font-light text-sm text-gray-400 hover:text-indigo-500 hover:transition-all ease-in-out"
                key={item}
              >
                {item}
              </li>
            )
          )}
        </ul>
      </div>
      <div className="my-5">
        <h1 className="text-3xl font-bold">Genres 👾</h1>
        <ul className="my-4">
          {[
            "Action",
            "Strategy",
            "RGP",
            "Shooter",
            "Adventure",
            "Puzzle",
            "Racing",
            "Sports",
          ].map((item) => (
            <li
              className="my-2 cursor-pointer font-light text-sm text-gray-400 hover:text-indigo-500 hover:transition-all ease-in-out"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
